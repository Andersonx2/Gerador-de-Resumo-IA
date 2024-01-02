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


