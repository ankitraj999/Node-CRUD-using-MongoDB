const express=require('express')
const router=express.Router()
const {getProductById,getProduct,createProduct,deleteProduct,updateProduct}=require('../controller/product.controller')

//get products
router.get('/',getProduct)
//get a single product
router.get('/:id',getProductById)
//post request
router.post('/',createProduct)
// delete a product
router.delete('/:id',deleteProduct)
// update a product
router.put('/:id',updateProduct)

module.exports=router