const {Product}=require('../Models/product');
const express=require('express');
const router= express.Router();
const Category = require('../Models/category');
const mongoose=require('mongoose');

// filter by category as well as get all products 
router.get(`/`, async (req, res) =>{
    // localhost:3000/api/v1/products?categories=2342342,234234
    let filter = {};
    if(req.query.categories)
    {
         filter = {category: req.query.categories.split(',')}
    }

    const productList = await Product.find(filter).populate('category');

    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})


// get products with category field means category section contains category all info
 router.get(`/:id`, async (req, res) =>{
  const product = await Product.findById(req.params.id).populate('category');

  if(!product) {
      res.status(500).json({success: false})
  } 
  res.send(product);
})
   
// update the product
router.put('/:id',async (req, res)=> {
    
    if(!mongoose.isValidObjectId(req.params.id)){                       // check invalid id condition -: suppose user put invalid product id
        return res.status(400).send('invalid product id ');
    }

    const category = await Category.findById(req.body.category);        // if category id not available in category table
    if(!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true}
    )

    if(!product)
    return res.status(500).send('the product cannot be updared!')       // if product not not updated 
  
    res.send(product);                                                 // response sent to user after updating product
  })


 // count the product  
  router.get('/get/count', async (req, res) =>{
    const productCount = await Product.countDocuments();   
    if(!productCount) {
        res.status(500).json({success: false})
    }
    
    res.send({
        productCount:productCount
    });
  })


  // getting feature product only means product have isfeature field true
  router.get('/get/featured', async (req, res) =>{
    const product = await Product.find({isFeatured:true})
    if(!product) {
        res.status(500).json({success: false})
    }
    
    res.send(product);
  })

// new product add
 router.post(`/`, async (req, res) =>{
  const category = await Category.findById(req.body.category);
  if(!category) return res.status(400).send('Invalid Category')

  let product = new Product({
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
  })

  product = await product.save();

  if(!product) 
  return res.status(500).send('The product cannot be created')

  res.send(product);
})


 module.exports=router;