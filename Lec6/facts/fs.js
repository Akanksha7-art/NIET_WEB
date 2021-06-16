const fs= require("fs");
const cheerio= require("cheerio");

let htmlKaData= fs.readFileSync("index.html", "utf-8");

let ch= cheerio.load(htmlKaData);

console.log(ch);