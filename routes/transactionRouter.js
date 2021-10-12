import express from "express";
import Transaction from "../model/transaction.js";

const transactionRouter = express.Router();

transactionRouter.get(
    "/:accountUsername",
    async(req,res)=>{

        const user_account = await Transaction.findOne({
            accountUsername: req.params.accountUsername
            });

        try{

            res.status(200).json(user_account);
        }

        catch(error){

            res.status(500).json(error);
        }
    }
)

export default transactionRouter;