<<<<<<< HEAD
import cors from "cors"
import express from "express"

import { convert } from "./convert.js"
import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./sumarize.js"
import { cat } from "@xenova/transformers"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/summary/:id", async (request, response) => {
  try {
    await download(request.params.id)
    const audioConvert = await convert()
    console.log(audioConvert)

    const result = await transcribe(audioConvert)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.post("/summary", async (request, response) => {
  try {
    const result = await summarize(request.body.text)
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.listen(3333, () => console.log("Server is running on port 3333"))
=======
import cors from 'cors'
import express from 'express'
import { download } from "./dowload.js"
import { transcribe } from './transcribe.js'
  

const app = express()
app.use(cors())


app.get('/summary/:id', async (request, response) =>  {
   await download(request.params.id)
    const result = await transcribe()


    response.json({result })

})



app.listen(3333, () => console.log('server ins runnin on port 3333') )


>>>>>>> 6d694feae1ed062abf9fddf8b59b29035b2891d1
