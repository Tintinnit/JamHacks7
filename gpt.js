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
        prompt: "Select the most important few key points from the following terms that is most likely to affect the user's privacy. It should make the user aware of the potentially dangerous terms they are agreeing while omitting irrelevant statements like introductions or term definitions. Summarize briefly in an overview in point form, omit points with similar meanings, with no extra titles or headings. \nIf the text does not seem to be some sort of terms, conditions, or privacy policy, prompt to try again.\n Example: You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction. In any case, you must be at least 13 years old, or in the case of Periscope 16 years old, to use the Services. If you are accepting these Terms and using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so and have the authority to bind such entity to these Terms, in which case the words “you” and “your” as used in these Terms shall refer to such entity.\nSimplified:\n- You must not be barred from this service by the law. \n- You must be at least 13 years old, or 16 for periscope. \n- If you are using this service for a company, you must ensure the company follows these terms.\n\n" + terms,
        temperature: 0.5,
        max_tokens: 750,
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

