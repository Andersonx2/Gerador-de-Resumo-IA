<<<<<<< HEAD
import { pipeline } from "@xenova/transformers"
import { transcriptionExample } from "./utils/transcription.js"
export async function transcribe(audio) {
  try {
    //return transcriptionExample
    console.log("Realizando a transcrição")

    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )
    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",
    })
    console.log("transcrição realizada com suecesso")
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
=======
import { transcribe } from "./utils/transcription"
export async  function transcribe(){

}
>>>>>>> 6d694feae1ed062abf9fddf8b59b29035b2891d1
