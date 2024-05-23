import prismaClient from "../../prisma"

class CountHaircutService{
    async execute(user_id:string){
        
        const countHaircut = await prismaClient.haircut.count({where: {
            userId:user_id
        }})

        return countHaircut;
    }
}

export {CountHaircutService}