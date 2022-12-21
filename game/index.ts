import { parse } from "https://deno.land/std@0.158.0/flags/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.10.3/mod.ts";
import type { WildGuess, TopGuessers } from "./types/wild_guess.ts";

const { guessed_number, username, game, render, issue_number } = parse(Deno.args);
let client: Client;

try {
    client = new Client(
        Deno.env.get("database_uri") ?? ""
    );
} catch (error) {
    console.log(error.message);
    Deno.exit(0);
}

const addGuess = async (issue_number: number, username: string, guessed_number: number, actual_number: number) => {
    try {
        await client.connect();
     
        if (!client.connected) return;

        await client.queryArray({
            text: "INSERT INTO wild_guess (issue_number, username, guessed_number, actual_number) VALUES ($1, $2, $3, $4);",
            args: [issue_number, username, guessed_number, actual_number]
        });

    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}

const getGuesses = async (limit = 1000) => {
    try {
        await client.connect();

        if (!client.connected) return;

        return await client.queryObject<WildGuess>({
            text: "SELECT * FROM wild_guess ORDER BY created_at DESC LIMIT $1;",
            args: [limit]
        });
    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}

const getTopPlayers = async (limit = 3) => {
    try {
        await client.connect();

        if (!client.connected) return;

        return await client.queryObject<TopGuessers>({
            text:
                `SELECT
                    username,
                    array_agg(issue_number) AS issue_numbers
                FROM
                    wild_guess
                WHERE
                    guessed_number = actual_number
                GROUP BY
                    username
                ORDER BY
                    COUNT(issue_number) DESC
                LIMIT
                    $1;`,
            args: [limit]
        });
    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}

const renderReadme = async () => {
    const topPlayers = await getTopPlayers();
    const guesses = await getGuesses();

    const html = await renderFileToString("./view/README.ejs", {
        topPlayers: topPlayers?.rows ?? [],
        guesses: guesses?.rows ?? []
    });

    await Deno.writeTextFile("../README.md", html);
}

if (render)
    await renderReadme();

else if (game) {
    if (issue_number && username && guessed_number) {
        const actual_number = Math.floor(Math.random() * 9);

        try {
            await addGuess(issue_number, username, guessed_number, actual_number);
            await renderReadme();

            if (guessed_number == actual_number)
                console.log("got-it");

            else
                console.log("missed-it");
        } catch (error) {
            console.log(error.message);
        }
    }
}