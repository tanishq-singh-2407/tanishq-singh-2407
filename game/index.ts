import { parse } from "https://deno.land/std@0.158.0/flags/mod.ts";
const { username, guessed_number } = parse(Deno.args);

console.log({ username, guessed_number })

// deno run game/index.ts --username=tanishq-singh-2301 --guessed_number=10