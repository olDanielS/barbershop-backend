import prismaClient from "../../prisma";

interface HaircutProps{
    user_id:string,
    status: boolean | string
}

class ListHaircutService {
    async execute({user_id, status}:HaircutProps){

        const haircuts = await prismaClient.haircut.findMany({where: {
            userId: user_id,
            status: status === "true" ? true : false
        }})

    return haircuts;

    }
}

export {ListHaircutService};