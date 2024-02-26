"use server"
import { UserModel , Connection , Iuser} from "./mongoose";
export const CreateUser = async (user : Iuser) =>{
    try {
Connection()
const newUser = new UserModel(
{
    username :user.username,
    image:user.image,
    email:user.email,


})
await newUser.save()   
console.log("add") 
}
    catch(err:any) {
        console.log(err)
    }
}