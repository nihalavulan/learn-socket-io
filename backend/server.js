const express = require("express")
const chats = require("./data/data")
const dotenv = require("dotenv")


const app = express()
dotenv.config()



const port = process.env.PORT || 3002

app.get('/' , (req,res) => {
    res.send('Server is ready.')
})
app.get('/api/chat' , (req,res) => {
    res.send(chats)
})
app.get('/api/chat/:id' , (req,res) => {
    const singleChat = chats.find((c) => c._id == req.params.id)
    res.send(singleChat)
})
app.listen(port , console.log(`Server started on http://localhost:${port}`))