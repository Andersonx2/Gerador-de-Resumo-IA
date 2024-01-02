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