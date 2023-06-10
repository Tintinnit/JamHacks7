import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create an api call to simplify terms and conditions into concise and simple bullet points
export async function simplify(terms) {
    return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Select the most important few key points from the following terms that is most likely to affect the user's privacy. It should make the user aware of the potentially dangerous terms they are agreeing while omitting irrelevant statements like introductions or term definitions. Summarize briefly in an overview in point form, omit points with similar meanings, with no extra titles or headings. \nIf the text does not seem to be some sort of terms, conditions, or privacy policy, prompt to try again.\n" + terms,
        temperature: 0.5,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        best_of: 3,
      });
    
    // return await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //         {role:"user", content: "Select the most important few key points from the following terms that is most likely to affect the user's privacy. It should make the user aware of the potentially dangerous terms they are agreeing while omitting irrelevant statements. Summarize briefly in an overview in point form, omit points with similar meanings. \nIf the text does not seem to be some sort of terms, conditions, or privacy policy, prompt to try again.\n" + terms},
    //         {role:"system", content: "Add the character ~ before every single point."}
    //     ],
    //     max_tokens: 300
    // });
}

