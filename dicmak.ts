import { join } from "https://deno.land/std@0.200.0/path/mod.ts";

const inputPath = join(Deno.cwd(), "dicionario-portugues.txt");
const outputPath = join(Deno.cwd(), "output.txt");
const allowedCharacters = /^[a-zA-Z]+$/;
const minimumLength = 7;
const maximumLength = 7;

const inputWords = Deno.readTextFileSync(inputPath).split("\n");
const outputWords = new Set<string>();

for (const word of inputWords) {
  if (
    word.length >= minimumLength &&
    word.length <= maximumLength &&
    word.match(allowedCharacters) &&
    !word.match(/[zxgjhsi]/) &&
    !word.match(/oe/) &&
    !word.match(/ara$/)
  ) {
    outputWords.add(word.toLowerCase());
  }
}

const asArray = [...outputWords.values()]
  .sort(() => (Math.random() > 0.5 ? -1 : 1))
  .slice(0, 256);

Deno.writeTextFileSync(
  outputPath,
  asArray
    .map(
      (palavra, indice) =>
        `${palavra} ${indice} 0x${indice
          .toString(16)
          .toUpperCase()
          .padStart(2, "0")}`
    )
    .join("\n")
);
