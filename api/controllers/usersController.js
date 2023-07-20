// import express from "express"
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { createError } from "../utility/createError.js";



export const registerUser=async(req,res)=>{
    try {
        const hash =bcrypt.hashSync(req.body.password,10)
        const newuser=new User({...req.body,password:hash})
        await newuser.save()
        res.status(200).send("New user has been created")
    } catch (error) {
        res.status(500).send("Something went wrong")
        console.log(error)
    }
}

export const Login=async(req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username});
        if(!user)return res.status(404).send("user not found")
        const isCorrect=bcrypt.compareSync(req.body.password,user.password)
        if(!isCorrect)return res.status(400).send("wrong password or username ")

        const token =jwt.sign({
            id:user._id,
            isSeller:user.isSeller},
            process.env.JWT_KEY)
        const{password,...info}=user._doc;
        res.cookie("access_token", token,{httpOnly:true}).status(200).send(info);

    } catch (error) {
        res.status(500).send("Something went wrong")
  
    }
}

export const deleteUser=async(req,res)=>{
    const user= await User.findById(req.params.id);
    if(req.userId !== user._id.toString()){
        return createError(403,"You can only delete your account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted")
}
export const Logout=async(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,
    })
    .status(200)
    .send("user has been logged out")
}