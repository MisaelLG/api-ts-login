import { Request,Response } from "express";
import User,{ IUser } from '../models/user';
import jwt from 'jsonwebtoken'
import config from "../config/config";


function createToken(user: IUser){

    return jwt.sign({id: user.id, email: user.email}, config.jwtSecret,{
        expiresIn: 86400 
    } )

}


export const signUp = async (req: Request, res: Response): Promise<Response> =>{

    if(!req.body.username || !req.body.email || !req.body.phone || !req.body.password){
        return res.status(404).json({msg: 'Please. send your complete data '});
    }
    const user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({ msg: "The Email already Exists"});
    }
    const username = await User.findOne({username: req.body.username});
    if(username){
        return res.status(400).json({msg: "The Username already Exists" })
    }
    const phone = await User.findOne({phone: req.body.phone});
    if(phone){
        return res.status(400).json({msg: "The Phone already Exists" })
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);

};




export const signIn = async (req: Request, res: Response) =>{
    
    if(!req.body.email || !req.body.password){
        return res.status(406).json({msg: 'Please. Send your Email and Password '});
    }
    

    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json({msg: "The User no Exists"});
    }

    const isMatch = await  user.comparePassword(req.body.password);
    if(isMatch){
        return res.status(200).json({token: createToken(user)});
    }

    return res.status(400).json({
        msg:"The email or pasword are incorrect"
    });

};
