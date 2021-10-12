import express from "express";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

const userRouter = express.Router();

userRouter.get(
    "/",
    (req,res)=>
    {
        res.send("User Auth ");
    }
)

userRouter.post(
    "/login",
    async(req,res)=>{

        try{
            const user = await User.findOne({
                username: req.body.username
            });

            !user && res.status(401).json("Wrong password or username...!");

            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);

            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            originalPassword !== req.body.password && 
                res.status(401).json("Wrong password or username....!!");

            const accessToken = jwt.sign({
                id: user._id,

            },

            process.env.SECRET_KEY,
            {expiresIn:"5d"}

            );

            const {password, ...info} = user._doc;

            //res.status(200).json({...info, accessToken});

            res.redirect(`/${user.username}`)
         }

        catch(error){ 
            res.status(500).json(error);
        }
    }
)

userRouter.get(
    "/:username",
    async(req,res)=>{

        const user = await User.findOne({
            username:req.params.username
        })
        try{
            res.status(200).json(user)
        }

        catch(error){

            res.status(500).json(error);
        }
    }
)

export default userRouter;