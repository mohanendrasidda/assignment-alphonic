require('../models/product.js')
const mogoose= require('mongoose')

mogoose.connect('mongodb://localhost:27017/myDb')

mogoose.connection.on('connected',()=>{
    console.log('connected')
})

mogoose.connection.on('error',error=>{
    console.error(error.message)
})

mogoose.connection.on('disconnect',()=>{
    console.error(error.message)
})

