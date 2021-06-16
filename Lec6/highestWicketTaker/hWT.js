const request = require("request");
const cheerio = require("cheerio");

// request => Async function
let link = 
"https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(link, cb);

function cb(error, response, html){
    evalHTML(html);
}
function evalHTML(html){
     let ch=cheerio.load(html);
     //let winningTeam= ch(".match-header .status-text span").text();
    
    let allBowlersTrs= ch(".table.bowler tbody tr");
    
    let highestWicketTakerName;
    let highestWickets;
    let lowestEconomy;


    for(let i=0;i<allBowlersTrs.length;i++){
        let oneBowlerDetail= allBowlersTrs[i];  // ek row mila in 1 iteration
        
        let allTds= ch(oneBowlerDetail).find("td");  //find kro table datas me

        // 0 index kam ka
        let bowlerName= ch(allTds[0]).text();
        // 4 index kam ka
        let wickets= ch(allTds[4]).text();
        // 5 index kam ka
        let economy= ch(allTds[5]).text();

        if(i==0){
            highestWicketTakerName= bowlerName;
            highestWickets= wickets;
            lowestEconomy= economy;
        }
        else{
             if(wickets > highestWickets || (wickets == highestWickets && economy< lowestEconomy)){
                highestWicketTakerName= bowlerName;
                highestWickets= wickets;
                lowestEconomy= economy;
             } 
        }
    }

    console.log( `Highest wicket taken by  ${highestWicketTakerName}  Highest wickets are ${highestWickets}
     lowest economy is ${lowestEconomy}`);
}
