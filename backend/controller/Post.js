const Post = require("../models/Post");
exports.createProduct = async (req,res) => {
    try {
        const {title ,price,description,availability,category} = req.body;
        let product = await Post.create({title ,price,description,availability,category});

        res.status(201).json({
            success : true,
            data : product
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}
exports.categoryAll = async(req,res)=>{
    try {
        const arr = [];
        const categoryFind = await Post.find();
        for(let i = 0; i < categoryFind.length; i++){
           arr.push(categoryFind[i].category);
        };
        const original = [...new Set(arr)];

        res.status(200).json({
            success : true,
            category : original
        });

    } catch (error) {
        res.status(500).json({
            success : false,
            data : error.message
        })
    }
}

exports.getDataById = async (req,res) =>{   
    try {
        const product =   await Post.findById(req.params.id)
        .select("title price description availability")
        res.status(200).json({
            success : true,
            data : product
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message

        })
    }
}