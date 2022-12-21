type WildGuess = {
    issue_number: number;
    username: string;
    guessed_number: number;
    actual_number: number;
}

type TopGuessers = {
    username: string;
    issue_numbers: number[];
}

export type {
    WildGuess,
    TopGuessers
}