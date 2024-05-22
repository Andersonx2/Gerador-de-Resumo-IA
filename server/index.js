import cors from "cors"
import express, { response } from "express"
import { download } from "./dowload.js"
import { transcribe } from "./transcribe.js"
import { request } from "http"
import { summarize } from "./sumarize.js"
import { convert } from "./convert.js"
import { error } from "console"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/summary/:id", async (request, response) => {
  try {
    await download(request.params.id)
    const audioConverted = await convert()
    const result = await transcribe(audioConverted)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.post("/summary", async (request, response) => {
  try {
    const result = await summarize(request.body.text)
    console.log(request.body.text)
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.listen(3333, () => console.log("server ins runnin on port 3333"))