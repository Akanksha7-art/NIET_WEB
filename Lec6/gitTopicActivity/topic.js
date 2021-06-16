let link= 'https://github.com/topics';
const request = require("request");
const cheerio= require("cheerio");
const fs = require("fs");
const getProjects= require('./project.js');
let folderPath= './Topics';


request(link, function(err, response, html){
    evalHTML(html);
})

function evalHTML(html){
 let ch= cheerio.load(html);

 // all  3 topics 
 let allTopics= ch('.d-flex.flex-wrap.flex-justify-start li');

for(let i=0 ; i<allTopics.length ; i++){

    // ek topic ka naam
    let oneTopicName= ch(allTopics[i]).find(".f3.lh-condensed.text-center").text().trim();

    // make folder for each topic
    let topicFiles=  folderPath +'/'+ oneTopicName;
    fs.mkdirSync(topicFiles);

    // send topic ka html link
    let oneTopicLink= link + "/" + oneTopicName;

    getProjects(oneTopicLink, oneTopicName);
 }


}
