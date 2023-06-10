import {simplify} from "./gpt.js";
import express from "express";
import cors from "cors";
import json from "body-parser";
import puppeteer from "puppeteer";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.post("/", async (req, res) => {
    const response = await simplify(req.body.userInput);
    res.send({body: response.data.choices[0].text}); 
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


async function checkTermsOfService(url) {

    axios.get(url, {maxRedirects: 10}).then(response => {
        const htmlContent = response.data;
    
        // Perform the check for terms of service in the HTML content
        if (htmlContent.includes('Terms') || htmlContent.includes('terms') ) {
        console.log('Terms of service found.');
        } else {
        console.log('Terms of service not found.');
        }
    });
  }