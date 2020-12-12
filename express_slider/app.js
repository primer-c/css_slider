const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.NODE_ENV || 3000
app.listen(PORT,()=>{
  console.log(`Server listen on port: ${PORT} ...`)
})