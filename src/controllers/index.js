const mongoose = require('mongoose')

const product = mongoose.model('product')


const getproducts = async (req, res, next) => {
    try {
        const products = await product.find()
        res.json(products)

    } catch (error) {
        console.log('couldnt fetch all products')
    }

}

const getproductById = async (req, res, next) => {
    let { id } = req.query
    try {
        filteredproduct = await product.findById({ _id: id })
        if (!filteredproduct) {
            console.log('error in id')
        }
        res.json(filteredproduct)
    } catch (error) {
        console.log('error in fetching product by id')
    }
}

const addproduct = async (req, res) => {
    const newproduct = req.body
    try {
        const updatedproduct = await product.create(newproduct)
        res.json(updatedproduct)
    }
    catch (error) {
        console.log('error in adding product')
    }
}

const updateproduct = async (req, res) => {
    const { id } = req.params
    const newproduct = req.body
    try {
        const updatedproduct = await product.findByIdAndUpdate(id, newproduct)
        res.end('your product is updated ')

    } catch (error) {
        console.log('error in updating product data')
    }

}

const searchproduct = async (req, res) => {
    const { search } = req.query
    try {
        const finalproduct = await product.find(
            {
                $or:[
                    {
                        name:
                        {
                            $regex: search,
                            $options: '$i'
                        }
                    },
                    {
                        description:
                        {
                            $regex: search,
                            $options: '$i'
                        }
                    }
                ]
            }
            )
        res.json(finalproduct)
    } catch (error) {
        console.log('error in searching data')
    }
}
module.exports = {
    getproducts,
    getproductById,
    addproduct,
    updateproduct,
    searchproduct
}

//   const filters = req.query;
//   const filteredUsers = data.filter(user => {
//     let isValid = true;
//     for (key in filters) {
//       console.log(key, user[key], filters[key]);
//       isValid = isValid && user[key] == filters[key];
//     }
//     return isValid;
//   });
//   res.send(filteredUsers);