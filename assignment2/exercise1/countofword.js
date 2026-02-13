const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8");
const words = data.trim().split(/\s+/);
const wordCount = words.length;
const outputText = `Number of words: ${wordCount}`;
console.log(outputText);
fs.writeFileSync(path.resolve(__dirname, "output.txt"), outputText);
