const fs = require("fs");

const questions = fs.readFileSync(`${__dirname}/files/questions.txt`, "utf-8");
const brQuestions = fs.readFileSync(`${__dirname}/files/questions-br.txt`, "utf-8");

const obj = {
  en: questions.split("\n").map((w) => w.replace("\r", "")),
  br: brQuestions.split("\n").map((w) => w.replace("\r", "")),
};

fs.writeFileSync(`${__dirname}/files/questions.json`, JSON.stringify(obj));
