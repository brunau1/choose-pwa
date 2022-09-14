const fs = require("fs");

const text = fs.readFileSync("./fontData.txt", "utf-8");

const textFiltered = text
  .split("%")
  .filter((item) => item.includes("or") && item.length <= 60);

console.log(textFiltered);
