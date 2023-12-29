import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter title."]
    },
    description: {
        type: String,
        required: [true, "Please enter description."]
    },
    yt: String,
    price: {
        type: Number,
        required: [true, "Please enter price."]
    },
    content: {
        type: String,
        required: [true, "Please enter content."]
    },
    top: Boolean,
    thumbnail: String,
    pic: String,
   
});



const Service = mongoose.models?.service || mongoose.model("service", serviceSchema);
export default Service;