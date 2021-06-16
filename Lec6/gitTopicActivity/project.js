const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function getProjects(oneTopicLink, oneTopicName){
    
    let projectLinks= './Topics/'+ oneTopicName;
    
    request(oneTopicLink , function(error , response , html){
        processHTML(html, projectLinks);
    })

}

function processHTML(html, projectLinks){
   
  let ch = cheerio.load(html);

  let projectsOnPage = ch('a.text-bold');

 // console.log(projectsOnPage.length);
  
  for(let i=0; i<5 ;i++){
      // 1 project name
      let oneProjectTag= ch(projectsOnPage[i]);
      let projectLink = "https://www.github.com"+ oneProjectTag.attr("href");
      let projectName= projectLink.split("/").pop();
      
     // create local folder for that project
      let projectFolders= projectLinks +"/"+ projectName ;
      fs.mkdirSync(projectFolders);
      
      let projectIssuesLink = projectLink+"/issues";
      let jsonFileLink = projectLinks + "/" + projectName + "/issues.json";
      getIssueData(projectIssuesLink, jsonFileLink);

    }

}


function getIssueData(projectIssuesLink, jsonFileLink){
    request(projectIssuesLink, function(err,res, html){
        issueData(html, projectIssuesLink, jsonFileLink)
    })
}


function issueData( data, projectIssuesLink , jsonFileLink){
    
    let ch= cheerio.load(data);

    let allIssuesATag = ch('a[data-hovercard-type="issue"]');
    
    for(let i=0;i<5;i++){

        let oneIssue = ch(allIssuesATag[i]);
        let issueName = oneIssue.text().trim();
        let issueLink =  "https://www.github.com"+oneIssue.attr("href");
    
      //  let IssueKaLink= issueLink +"/"+ oneLink;
         if(i==0){
             firstIssue(jsonFileLink, issueName,issueLink );
         }else{
             updateIssue(jsonFileLink, issueName, issueLink);
         }
    }

}

function firstIssue(jsonFileLink, issueName, issueLink){
  
    let issueFile= [];
    let issueDetail={
        issueKaName: issueName,
        issueKaLink : issueLink
    }
   issueFile.push(issueDetail);
   fs.writeFileSync(jsonFileLink, JSON.stringify(issueFile));

}

function updateIssue(jsonFileLink, issueName, issueLink){
    let fileDetails = fs.readFileSync(jsonFileLink);
    fileDetails = JSON.parse(fileDetails);

    let issueDetail={
        issueKaName: issueName,
        issueKaLink: issueLink
    }

    fileDetails.push(issueDetail);
    fs.writeFileSync(jsonFileLink, JSON.stringify(fileDetails));
}

module.exports= getProjects;