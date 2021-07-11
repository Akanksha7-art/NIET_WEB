const puppeteer = require("puppeteer");
const id= "pepcoding";

(async function () {
    try{
        let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
          executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        });

        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.youtube.com");

        await tab.waitForSelector('#search-input>input', {visible: true});

        await tab.type('#search-input>input', id , {delay : 70} );
        //await tab.click('button#searchbox-button.style-scope.ytd-searchbox');
        await tab.keyboard.press('Enter');
        
        await tab.waitForSelector('div#info.style-scope.ytd-channel-renderer',{visible: true});
        await tab.click('div#info.style-scope.ytd-channel-renderer');
        
        await tab.waitForTimeout("2000");

        await tab.goto('https://www.youtube.com/c/Pepcoding/videos');

    
        await tab.waitForTimeout("500");

        let allVideoATag = await tab.$$('h3.style-scope.ytd-grid-video-renderer > a');
            
            // select one video and go to that video
        let oneVideoLink = await tab.evaluate(function(elem) {return elem.getAttribute("href")} , allVideoATag[0]);
        let VideoLink =  'https://www.youtube.com'+ oneVideoLink;

        await tab.goto(VideoLink);
            
            // wait for like button and click like 
            
            // go to videos page after every like
        await tab.waitForTimeout("2000");

        await tab.goto('https://www.youtube.com/c/Pepcoding/videos');
            
            
      

    }
    catch(err){
        console.log(err);
    }
})();