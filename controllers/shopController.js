const Shop = require('../models/shop')
const Menu = require('../models/menu')

exports.shop = async (req, res, next) => {
    const shops =await Shop.find().sort({_id: -1});

    const shopWithPhotoDomain = shops.map( ( shop, index ) => {
        return {
            id: shop._id,
            name: shop.name,
            photo: 'http://localhost:3000/images/' + shop.photo,
            location: shop.location
        }
    })

    res.status(200).json({
        data: shopWithPhotoDomain
    }) 
}

exports.menu = async (req, res, next) => {
    //const menu =await Menu.find().select('+name -price')
   // const menu =await Menu.find().where('price').gt(200) //gt greater than
    const menu = await Menu.find().populate('menu')
    res.status(200).json({
        data: menu
    }) 
}


exports.show = async (req, res, next) => {
    const shop = await Shop.findById(req.params.id).populate('menu')
    res.status(200).json({
        data: shop
    }) 
}
