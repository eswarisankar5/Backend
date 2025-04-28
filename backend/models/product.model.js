import mongoose from "mongoose";
 const productSchema = new mongoose.Schema({
    
    name: { 
        type: String, 
        required: [true, "Name is required"] 
    },
    description: { 
        type: String, 
        required: [true, "Description is required"] 
    },
    price: { 
        type: Number, 
        min: 0,
        required: true
    },
    image: { 
        type: String, 
        required: [true, "Image is required"] 
    },
    category: { 
        type: String, 
        required:true
    },
    isFeatured: { 
        type: Boolean, 
        default: false 
    },
    countInStock: { 
        type: Number, 
        min: 0, 
        default: 0 
    },
    rating: { 
        type: Number, 
        min: 0, 
        max: 5, 
        default: 0 
    }
},{timestamps:true});

export const Product = mongoose.model("Product", productSchema);
export default Product;