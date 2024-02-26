import mongoose, { Schema , model } from "mongoose";
 export interface Iuser {
   clerkId? :string
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
export const UserModel  = mongoose.models.producdmern ||model<Iuser>("producdmern" , UserShema)


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
export const  Connection = async ()=>{
    try{
    
    await mongoose.connect(process.env.MONGODB_URL_CONNECTION!)
    return console.log("suc COnnetc")
    }
    catch(err){
        console.log(err)
    }
    
    
    }