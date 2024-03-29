const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true, },
    description:{
         type:String,
         required:true,
    },
    richDescription:{
        type:String,
        default:'',
    },

    image:{
        type:String,
        default:''
    },
    images:[
        {
            type:String,
        }
    ],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    brand:{
        type:String,
        default:'',
    },
    price:{
        type:Number,
        default:0,
    },
    numReview:{
        type:Number,
        default:0,
    },
    rating:{
        type:Number,
        default:0,
    }, 
    dateCreated:{
        type:Date,
        default:Date.now
    },
    isFeatured:{
        type:Boolean,
        default:false,
    },
    countInStock:{
        type:Number,
        required:true,
        min:0,
        max:255,
    },
    
 });
 productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.Product=mongoose.model('Product',productSchema)
