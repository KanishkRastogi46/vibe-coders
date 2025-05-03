import { createPartFromUri, createUserContent, GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: String(process.env.GEMINI_API_KEY!) });

var systemPrompt = ``;

export async function getResponseFromGemini(query: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
      config: {
        systemInstruction: systemPrompt,
      },
    });
    return response?.text || "Sorry, I couldn't generate a response for this.";
  } catch (error: any) {
    console.error("Error generating response from Gemini:", error.message);
    throw new Error("An error occurred while generating the response from Gemini.");
  }
}

export async function getWebPageFromImageUsingGemini(imagePath: string): Promise<string> {
    try {
        const image = await ai.files.upload({
            file: imagePath,
          });
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: [
                createUserContent([
                "",
                createPartFromUri(image.uri as string, image.mimeType as string),
              ]),
            ],
        });
        return response?.text || "Sorry, I couldn't generate a response for this.";
    } catch (error: any) {
        console.error("Error generating response from Gemini:", error.message);
        throw new Error("An error occurred while generating the response from Gemini.");
    }
}