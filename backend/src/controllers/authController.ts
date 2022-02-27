import jwt from 'jwt-simple';
import User from '../models/userModel';
import { secretKey } from '../config/settings';
import {Request, Response, NextFunction} from "express";

export default class AuthController
{
    public static async login(req:Request, res: Response, next: Function ){
        try{
            
        }catch(e){
            console.log(e);
        }
    }
}