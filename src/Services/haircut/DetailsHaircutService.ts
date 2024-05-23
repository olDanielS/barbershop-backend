import prismaClient from "../../prisma"

class DetailsHaircutService{
    async execute(haircut_id:string){
        
        const detailsHaircut = await prismaClient.haircut.findFirst({where: {
            id: haircut_id
        }})

        return detailsHaircut;
    }
}

export {DetailsHaircutService}