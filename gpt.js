import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create an api call to simplify terms and conditions into concise and simple bullet points
export async function simplify(terms) {
    return await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role:"user", content: "Simplify the key points from the following terms and conditions using concise and short bullet points and simple vocabulary and phrasing.\nIf the text does not seem to be some sort of terms, conditions, or privacy policy, please prompt to try again.\n" + terms},
            {role:"system", content: "Provide the bullet points using a (~) before each point."}
        ],
    });
}

