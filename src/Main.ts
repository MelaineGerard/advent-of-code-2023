import {config, parse} from "dotenv";
import { readFileSync } from "fs";
import { env } from "process";

config()

let fileName = env.INPUT_FILE as string

let fileContent = readFileSync(fileName).toString()

let lines = fileContent.split("\n")

let total = 0

let numbers = {
    "one": 1,
    "two" : 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

for (let line of lines) {

    const matches = line.toLowerCase().matchAll(/(?=((\d)|one|two|three|four|five|six|seven|eight|nine))/gm);

    const hits = [];

    // Collect matched values in the hits array
    for (const match of matches) {
        hits.push(match[1]);
    }

    const firstDigit = hits[0];
    const lastDigit = hits[hits.length-1];

    // If there are matched values, convert and add them to the result
    if (hits.length) {
        // @ts-ignore
        const converted = `${isNaN(parseInt(firstDigit)) ? numbers[firstDigit] : firstDigit}${isNaN(parseInt(lastDigit)) ? numbers[lastDigit] : lastDigit}`;
        total += parseInt(converted);
    }
}

console.log(`Le total est : ${total} !`)