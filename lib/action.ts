import { UserModel , Connection , Iuser} from "./mongoose";
export const CreateUser = async (user : Iuser) =>{
    try {
Connection()
const newUser = new UserModel(user)
await newUser.save()    
}
    catch(err:any) {
        console.log(err)
    }
}