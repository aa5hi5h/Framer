import Ollama from "ollama";

export const generateWebsiteIdea = async (prompt:string) => {
  try {
    const output = await Ollama.generate({
      model: "llama2",
      prompt: prompt,
    });
    return output ;
  } catch (error) {
    console.error("Error generating website idea:", error);
    return null;
  }
};
