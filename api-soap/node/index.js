const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')


const app = express()
const router = require('./routes/tipoMonedas')

const port = process.env.PORT || 3030
app
  .use(express.json())
  .use(express.static('public'))
  .use(router)
  .use(morgan('combined'))
  .use(helmet())
  .set('view engine', 'pug')

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})