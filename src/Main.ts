import { config } from "dotenv";
import { env } from "process";
import { readFileSync } from "fs";

config()

const fileName = env.INPUT_FILE as string;

const file = readFileSync(fileName, "utf-8");

const lines = file.split("\n");
let totalGames = 0;
let sumOfPowers = 0;
const maxValues = {
    red: 12,
    green: 13,
    blue: 14
}
for (const line of lines) {
    if (line.length === 0) continue;
    const [name, games] = line.split(":");
    const gameId = parseInt(name.replaceAll("Game", "").trim());

    let isGameValid = true;
    let gameArray = games.split(";");

    let minimumColors = {
        red: 0,
        green: 0,
        blue: 0
    }

    for (const game of gameArray) {
        const gameColors = game.split(", ");
        for (let color of gameColors) {
            let [value, colorName] = color.trim().split(" ");
            // @ts-ignore
            if (minimumColors[colorName] < parseInt(value)) {
                // @ts-ignore
                minimumColors[colorName] = parseInt(value);
            }
            // @ts-ignore
            if (parseInt(value) > maxValues[colorName]) {
                isGameValid = false;
            }
        }
    }

    sumOfPowers += minimumColors.red * minimumColors.green * minimumColors.blue;

    if (isGameValid) {
        totalGames += gameId;
    }
}

console.log(totalGames + " games are valid");
console.log("The sum of the minimum powers is " + sumOfPowers)
