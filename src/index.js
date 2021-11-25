require('./data/init')
const express= require('express')
const app= express();

const indexRouter= require('./routes/index.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/v1',indexRouter)



console.log(process.env.NODE_ENV)
const PORT= process.env.PORT || 3000;
app.listen( PORT, error =>{
    if(error){
        console.error(error.message)
        return;
    }
    console.log(`check on http://localhost:${PORT}/v1/getproducts`)
} )