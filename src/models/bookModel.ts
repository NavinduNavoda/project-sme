import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter title."]
    },
    description: {
        type: String,
        required: [true, "Please enter description."]
    },
    price: {
        type: Number,
        required: [true, "Please enter price."]
    },
    content: {
        type: String,
        required: [true, "Please enter content."]
    },
    relatedServices: [String],
    top: Boolean,
    thumbnail: String,
    pic: String,
    file: String,
    
});



const Book = mongoose.models?.book || mongoose.model("book", bookSchema);
export default Book;