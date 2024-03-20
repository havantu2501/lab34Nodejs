import mongoose from "mongoose"

const pschema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    author: String

},
    {
        timestams: true
    })
export const books = mongoose.model('books', pschema)