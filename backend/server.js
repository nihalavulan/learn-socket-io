const express = require("express")


const app = express()

app.get('/' , (req,res) => {
    res.send('Server is ready.')
})

app.listen(3001 , console.log("Server started on http://localhost:3001"))