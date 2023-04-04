import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const uri = Deno.env.get('postgres-uri');

export default () => {
    try {
        if (!uri) throw new Error("Postgress URI not defined.");

        return new Client(uri);
    } catch (error) {
        return (error as Error).message;
    }
}