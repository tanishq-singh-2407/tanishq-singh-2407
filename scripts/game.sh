#! /bin/bash

ISSUE_TITLE=$1
USERNAME=$2

regex="^And I guess \(0-9\):( |)[0-9]$"

if [[ $ISSUE_TITLE =~ $regex ]]; then
    NUMBER="${ISSUE_TITLE:18}"

    if [[ ${NUMBER:0:1} == " " ]]; then
        NUMBER="${NUMBER:1}"
    fi

    deno run --reload game/index.ts --username=$USERNAME --guessed_number=$NUMBER
else
    echo "Format got changed, it must follow '$regex'."
    echo "Example: 'And I guess (0-9): 2'"

    exit 418
fi