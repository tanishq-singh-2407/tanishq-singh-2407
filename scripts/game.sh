#! /bin/bash

ISSUE_TITLE=$1
USERNAME=$2
ISSUE_NUMBER=$3

regex="^And I guess \(0-9\):( |)[0-9]$"

if [[ $ISSUE_TITLE =~ $regex ]]; then
    NUMBER="${ISSUE_TITLE:18}"

    if [[ ${NUMBER:0:1} == " " ]]; then
        NUMBER="${NUMBER:1}"
    fi

    database_uri=$database_uri deno run -A index.ts --game --username=$USERNAME --guessed_number=$NUMBER --issue_number=$ISSUE_NUMBER
else
    echo "You Entered NaN."
fi