import mongoose from "mongoose";
const useShema=new mongoose.Schema(
    {
        nom:String,
        email :String,
        password:String,
    },
    {timestamps:true}

);
const User=mongoose.model("User",useShema);
export default User;