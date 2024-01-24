import mongoose, { Schema , model } from "mongoose";
 export interface Iuser {
    _id ?: string
    username : string
    image? :string
    email?: string
 }
const UserShema = new Schema<Iuser>({
username :{type :String , required :true , unique :true} ,
image :{type :String } ,
email :{type :String}
})
export const UserModel  = mongoose.models.newusers ||model<Iuser>("newusers" , UserShema)


export interface IProduct {
productName : string 
price :number
description :string
imageUrl : string
stockQuantity : number
}

const Product = new Schema<IProduct>({
   productName : {type :String  , required :true},
   price : {type :Number  , required: true ,min :[1 ,""] },
   description :  {type :String  , required: true  } ,
   imageUrl : {type :String  , required: true  }  ,
   stockQuantity : {type :Number  , required: true ,min :[0,""] }
})
export const ProductModel = model<IProduct>("productmern" , Product)
export const  Connection = async ()=>{
    try{
    
    await mongoose.connect('mongodb+srv://huhutech:yuyupopoyuyu@cluster0.euukfd7.mongodb.net/popo?retryWrites=true&w=majority')
    return console.log("suc COnnetc")
    }
    catch(err){
        console.log(err)
    }
    
    
    }