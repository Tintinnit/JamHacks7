import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create an api call to simplify terms and conditions into concise and simple bullet points
async function simplify(terms) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role:"user", content: "Summarize the key points from the following terms and conditions using concise and simple bullet points with casual vocabulary and phrasing.\n\n" + terms},
        ],
    });

    console.log(response.data.choices[0].message.content);
}

// Test terms and conditions
let terms = "You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction. In any case, you must be at least 13 years old, or in the case of Periscope 16 years old, to use the Services. If you are accepting these Terms and using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so and have the authority to bind such entity to these Terms, in which case the words “you” and “your” as used in these Terms shall refer to such entity.";
simplify(terms);
