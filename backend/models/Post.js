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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
  });

module.exports = mongoose.model("Post", postSchema);