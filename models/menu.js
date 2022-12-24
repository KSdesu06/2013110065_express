const  mongoose = require('mongoose')
const Schema =mongoose.Schema

const schema = new Schema({

    name: { type: String, required: true, trim: true },
    price: { type: Number },
    shop: { type: Schema.Types.ObjectId, ref: 'Shop' },

},{ 
    timestamps: true,
    collection: "menus" 
});

const menu = mongoose.model("Menu", schema)
module.exports  = menu