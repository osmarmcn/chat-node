const express = require("express")
const path = require("path")
const http = require("http")


const app = express()
const server = http.createServer(app)
const PORT = 4000
const socketId = require('socket.io')

app.use(express.static(path.join(__dirname, 'public')))
server.listen(PORT, () => "servidor online na porta" + PORT)

const io = socketIO(server)