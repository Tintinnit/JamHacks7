import {simplify} from "./gpt.js";
import express from "express";
import cors from "cors";
import json from "body-parser";

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