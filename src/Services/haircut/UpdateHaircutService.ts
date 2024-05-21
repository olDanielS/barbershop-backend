import prismaClient from "../../prisma"

interface HaircutProps{
    user_id: string,
    haircut_id: string,
    name: string,
    price: number,
    status: boolean | string;
}

class UpdateHaircutService{
    async execute({user_id, haircut_id, name, price, status}:HaircutProps){

        const user = await prismaClient.user.findFirst({where: {
            id: user_id,
        },
        include:{
            subscription: true
        }
    })
    
    if(user?.subscription?.status !== 'active' ){
        throw new Error("Not authorized")
    }
    
    const haircutUpdate = await prismaClient.haircut.update({
        where: {
            id: haircut_id,
        },
        data: {
            name: name,
            price: price,
            status: status === true ? true : false
        }
    })
    console.log(haircutUpdate)

    return haircutUpdate;

    }
}

export {UpdateHaircutService};