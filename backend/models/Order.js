const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    orderId:{
        type:String,
        required:true,
        unique:true
    },

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    service:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    pickupDate:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports =
mongoose.model("Order",orderSchema);