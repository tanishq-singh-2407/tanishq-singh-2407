SELECT
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
    $1;