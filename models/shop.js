const  mongoose = require('mongoose')
const Schema =mongoose.Schema

const shopSchema = new Schema({
    name:  { type: String, require: true, trim: true },
    photo: { type: String, default: 'nopic.png' },
    location: {
        lat: Number,
        lgn: Number
    },
    //createdAt: { type: Date, default: Date.now },   //createdAt and updatedAt ไม่จำเป็นต้องเขียน เพราะ schema สร้างให้อัตโนมัติ
    //updatedAt: { type: Date, default: Date.now }, 
},{ 
    toJSON: { virtuals: true },
    timestamps: true,
    collection: "shops" });

    shopSchema.virtual('menu', {
        ref: 'Menu',
        localField: '_id', 
        foreignField: 'shop', 
        });

const shop = mongoose.model("Shop", shopSchema)
module.exports  = shop