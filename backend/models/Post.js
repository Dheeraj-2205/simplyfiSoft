const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: { 
        type: Number,
        required: true
    },
    description: { 
        type: String,
         required: true
        },
    availability: { 
        type: Boolean,
        default: true
    },
    category: { 
        type: String,
        ref: 'Category'
    },
    
  });
// console.log(mongoose.Schema.Types.ObjectId);
module.exports = mongoose.model("Post", postSchema);