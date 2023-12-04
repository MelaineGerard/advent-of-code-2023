import {config} from "dotenv";
import { readFileSync } from "fs";
import { env } from "process";

config()

let fileName = env.INPUT_FILE as string

let fileContent = readFileSync(fileName).toString()

let lines = fileContent.split("\n")

for (let line of lines) {
    if (line.length === 0) continue

    console.log(line)
}