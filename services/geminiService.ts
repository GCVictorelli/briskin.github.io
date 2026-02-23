
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é a Assistente Virtual da Clínica Briskin Dermatologia. 
Seu objetivo é ajudar pacientes a entenderem os serviços da clínica, fornecer informações básicas sobre cuidados com a pele (sempre recomendando consulta médica) e ajudar a tirar dúvidas sobre o agendamento.
A clínica é liderada pela Dra. Daniele Briski Felzke e Dra. Denise Briski Leite.
Serviços: Dermatologia Clínica, Estética, Tratamento de Acne, Melasma, Rejuvenescimento, Injetáveis (Botox/Preenchimento), Laser.
Localização: Indaiatuba, SP. 
WhatsApp para agendamento: (19) 98966-9889.
Seja sempre elegante, educada e empática. Use um tom sofisticado condizente com a marca.
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Desculpe, não consegui processar sua pergunta no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao tentar falar com nossa assistente. Por favor, tente novamente mais tarde.";
  }
};
