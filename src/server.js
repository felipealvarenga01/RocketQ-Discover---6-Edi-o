const express = require('express')
const route = require('./route')
const path = require('path')
const initdb = require('./db/init')
const Database = require("./db/config")

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, async () => {
  // const db = await Database()
  // try {
    
  //   const sql = await db.run('select * from rooms')
  //   console.log(sql)

  // } catch (error) {
  //   initdb.init()
  // }
  console.log("RODANDO")})