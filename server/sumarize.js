import { summaryExample } from "./utils/summary.js"
import { pipeline } from "@xenova/transformers"
export async function summarize(text) {
  try {
    //return summaryExample
    console.log("Relizando o resumo")

    //huggingface.co
    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
      //Models: 
      //"Xenova/bart-large-xsum"
      /// "Xenova/distilbart-cnn-12-6" *//
    )

    const output = await generator(text)

    console.log("Resumo concluido com sucesso ")

    return output[0].summary_text
  } catch (error) {
    console.log("nao foi possivel gerar o resumo", error)
    throw new error(error)
  }
}
