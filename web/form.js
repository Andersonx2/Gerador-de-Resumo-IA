<<<<<<< HEAD
import { server } from "./server.js"
const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async () => {
  event.preventDefault()
  content.classList.remove("placeholder")
  const videoUrl = input.value
  if (!videoUrl.includes("shorts")) {
    return (content.textContent =
      "Esse video não é um shorts. Troque para obter seu resumo.")
  }

  const [_, params] = videoUrl.split("/shorts/", [2])

  const [videoId] = params.split("?si")
  content.textContent = "Obtendo texto do audio..."

  const transcription = await server.get("/summary/" + videoId)

  content.textContent = "realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
  console.log(content.textContent)
})
=======
import { getVideoID } from "ytdl-core"
import { server } from "./server.js"
const form = document.querySelector("#form")
const input = document.querySelector("#url")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parece ser um short.")
} 

const [_,params]= videoURL.split("/shorts/")
const[videoId] = params.split('?si')

console.log(params)

content.textContent = 'Obtendo texto do áudio...'


const transcription  = await server.get('/summary/' + VideoID)

content.textContent= 'Processando o resumo...'

content.textContent = transcription.data.result

})
>>>>>>> 6d694feae1ed062abf9fddf8b59b29035b2891d1
