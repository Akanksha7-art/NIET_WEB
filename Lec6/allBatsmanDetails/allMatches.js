let allMatchesLink = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results';
const request = require("request");
const cheerio = require("cheerio");
const getMatchDetails= require('./match.js');

request(allMatchesLink, function(err, response , data){
    processHTML(data);
})

function processHTML(data){
    let ch= cheerio.load(data);
    let allAnchorTags= ch("a[data-hover=Scorecard]");

    for(let i=0;i<allAnchorTags.length;i++){
        let matchLink= "https://www.espncricinfo.com"+ ch(allAnchorTags[i]).attr("href");
        //console.log(getMatchLink);

        getMatchDetails(matchLink);
    }
}