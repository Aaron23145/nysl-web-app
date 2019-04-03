const express = require('express')
const path = require('path')

const app = express()

const staticFileMiddleware = express.static('dist')
app.use(staticFileMiddleware)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT ? process.env.PORT : 8080
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
})
