const id ="tegahac842@gocasin.com";
const pw = "Aka@123";
const pep = "pepcoding";
const puppeteer = require("puppeteer");

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
        await tab.goto("https://www.instagram.com");
        
        await tab.waitForSelector('input[name="username"]' ,{visible:true});

        // type username and password and click login button

        await tab.type('input[name="username"]', id, {delay: 50});
        await tab.type('input[name="password"]', pw, {delay: 50});
        await tab.click("button.sqdOP.L3NKy.y3zKF");
       
       //skip remember password page

        await tab.waitForSelector('a[href="/"] svg' ,{visible:true});
        await tab.click('a[href="/"] svg');

        //skip turn on notification pop up
        
        await tab.waitForSelector('.aOOlW.HoLwm ' ,{visible:true});
        await tab.click('.aOOlW.HoLwm');

        // type pepcoding in search box
        
        await tab.waitForSelector('.pbgfb.Di7vw ' ,{visible:true});
        await tab.type('input[autocapitalize="none"]', pep,{delay:500});

        // go to pep home page
        
        await tab.waitForSelector('a[href="/pepcoding/"]',{visible:true, delay:500});
        await tab.click('a[href="/pepcoding/"]');
        
      // get first 10 posts
        for(let i=0;i<5;i++){

            //this is important to define within for loop
            await tab.waitForSelector(".v1Nh3.kIKUG._bz0w > a",{visible:true});
            let allPostATag = await tab.$$(".v1Nh3.kIKUG._bz0w > a");

            //get ont postlink and go to that post
    
            let onePostLink = await tab.evaluate(function(elem) {return elem.getAttribute("href")} , allPostATag[i]);
            let PostLink = "https://www.instagram.com" + onePostLink;

            await tab.goto(PostLink);
            
          // like the post and return to home page everytime

            await tab.waitForSelector(".fr66n>.wpO6b" ,{visible: true});
            await tab.click(".fr66n>.wpO6b");
            
            await tab.waitForTimeout("2000");
            await tab.goto("https://www.instagram.com/pepcoding/")
        }
    }
    catch(err){
        console.log(err);
    }
})();

//'a[href="/p/CQS4b2BLUgw/"]'