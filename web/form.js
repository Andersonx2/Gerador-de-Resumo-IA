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
  console.log(videoId)

  const transcription = await server.get("/summary/" + videoId)

  console.log("essa e a transcricao do video: ", transcription)

  content.textContent = "realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
    
  })
  content.textContent = summary.data.result
})
