const express= require('express')
const router= express.Router()

const {getproducts, getproductById, addproduct, updateproduct, searchproduct}= require('../controllers/index.js')

router.get('/getProducts',getproducts)
router.get('/getProduct',getproductById)
router.get('/searchProducts/',searchproduct)
router.post('/addProduct',addproduct)
router.patch('/updateProduct/:id',updateproduct)

module.exports= router




