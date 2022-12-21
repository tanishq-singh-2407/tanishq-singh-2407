import { parse } from "https://deno.land/std@0.158.0/flags/mod.ts";
const { guessed_number } = parse(Deno.args);

if (Math.floor(Math.random() * 9) === guessed_number){
    console.log("got-it");
}

else {
    console.log("missed-it");
}