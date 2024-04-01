const mongoose = require("mongoose")
const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")
const multer = require("multer")
const cors = require("cors")

app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://MongoDb:1@reactecommercedb.jmsuysu.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri).then(() => {
    console.log("Database bağlantısı başarılı")
}).catch((err) => {
    console.log(err.message)
})

//User Collection
const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema)
//User Collection

//Product Collection
const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    stock: Number,
    price: Number,
    imageUrl: String
})
const Product = mongoose.model("Product", productSchema)
//Product Collection

//Basket Collection
const basketScheme = new mongoose.Schema({
    _id: String,
    productID: String,
    userID: String,
    count: Number,
    price: Number
})

const Basket = mongoose.model("Basket", basketScheme)
//Basket Collection

//Order Collection
const orderScheme = new mongoose({
    _id: String,
    productID: String,
    userID: String,
    count: Number,
    price: Number
})

const Order = mongoose.model("Order", orderScheme)
//Order Collection



const port = 5000;
app.listen(5000, () => {
    console.log("Uygulama http://localhost:" + port + " üzerinden ayakta")
})

