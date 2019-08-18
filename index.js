const puppeteer = require('puppeteer');

const takeScreenshot = async () => {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    const options = { 
       path: 'capturas/website.png',
       fullPage: true,
       omitBackground: false,
       
   };

    await page.goto('https://www.youtube.com', { waitUntil: 'networkidle2' });
    await page.screenshot(options);
    
    await browser.close();
};

const doPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options2 = {
     path: 'pdf/web.pdf',
    }
    await page.goto('https://hackernoon.com/how-to-create-an-instagram-bot-with-node-js-a289185a7d6f', { waitUntil: 'networkidle2'});
    await page.pdf(options2);

    await browser.close();

};

takeScreenshot();
doPdf();