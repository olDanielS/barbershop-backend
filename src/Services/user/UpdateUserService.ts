import prismaClient from "../../prisma"

interface updateProps {
    user_id: string,
    name: string,
    endereco: string
}

class UpdateUserService {
    async execute({ user_id, name, endereco }: updateProps) {

    try{

        const findUser = await prismaClient.user.findFirst({where: {
            id:user_id
        }})
        
        if(!findUser){
            throw new Error("User not exist!")
        }
        
        const updateUser = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name,
                endereco
            },
            select: {
                name: true,
                endereco: true,
                email: true
            }
        })
        
        return updateUser;
        
    }catch(err){
        console.log(err)
        throw new Error("Error an update the user!")
    }
    }
}

export { UpdateUserService }