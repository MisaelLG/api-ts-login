import { Request,Response } from "express";
import User,{ IUser } from '../models/user';


export const signUp = async (req: Request, res: Response) =>{

    if(!req.body.username || !req.body.email || !req.body.phone || !req.body.password){
        return res.status(406).json({msg: 'Please. send your complete data '});
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

};
export const signIn = (req: Request, res: Response) =>{
    
    if(!req.body.email || !req.body.password){
        return res.status(406).json({msg: 'Please. Send your Email and Password '});
    }
    res.send('received');

};
