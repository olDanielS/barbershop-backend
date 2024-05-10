import prismaClient from "../../prisma";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

interface AuthProps{
    email: string,
    password: string
}

class AuthUserService{
    async execute({email, password}:AuthProps){
        if(!email || !password){
            throw new Error("Something was wrong")
        }

        const user = await prismaClient.user.findFirst({where:{
            email
        },
        include:{
            subscription: true
        }})

        if(!user){
            throw new Error("User not found")
        }

        const validatePass = await compare(password, user?.password);
        if(!validatePass){
            throw new Error("Email/password incorrent!")
        }

       const token = sign({
        name:user.name,
        email:user.email
       },
       process.env.JWT_TOKEN,
       {
        subject: user.id,
        expiresIn: '30d'
       }
        )

    return {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        endereco: user?.endereco,
        token: token,
        subscriptions: user.subscription ? {
            id: user.subscription?.id,
            status: user.subscription?.status
        } : null
    }
    }
}

export {AuthUserService}