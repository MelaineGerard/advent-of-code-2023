import {config, parse} from "dotenv";
import { readFileSync } from "fs";
import { env } from "process";

config()

let fileName = env.INPUT_FILE as string

let fileContent = readFileSync(fileName).toString()

let lines = fileContent.split("\n")

let total = 0

for (let line of lines) {
    let firstNumber = -1
    let lastNumber = -1
    for (let i = 0; i < line.length; i++) {
        if (!isNaN(parseInt(line[i]))) {
            if (firstNumber === -1) {
                firstNumber = parseInt(line[i])
            }
            lastNumber = parseInt(line[i])
        }
    }


    let newNumber = firstNumber.toString() + lastNumber.toString()

        total += parseInt(newNumber)
}

console.log(`Le total est : ${total} !`)