import prismaClient from "../../prisma";

class CheckSubscriptionService {
    async execute(user_id:string){
        
        const subscriptionStatus = await prismaClient.user.findFirst({where: {
            id: user_id
        },
        select: {
            subscription: {
                select: {
                    id:true,
                    status: true,
                }
        }
    }
    })

        return subscriptionStatus
    }
}

export {CheckSubscriptionService};