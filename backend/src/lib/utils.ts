import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path: '.env.local', quiet: true});

const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = (userId: String, res: any) => {
     const token = jwt.sign(
        {id: userId.toString()},
        JWT_SECRET as string,
        {expiresIn: '30d'}
    )

    res.cookie("jwt",token,{
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true, //accessible only by web server, prevent xxs
        sameSite: 'strict', //CSRF attacks
        secure: process.env.NODE_ENV === 'development' ? false : true, //https 
    })

    return token;
}