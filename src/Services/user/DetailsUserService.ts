import prismaClient from "../../prisma"

class DetailsUserService {
    async execute(user_id: string) {

        const user = prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                endereco: true,
                subscription: {
                    select: {
                        id: true,
                        priceId: true,
                        status: true,
                    }

                }
            }
        })

        return user;
    }
}

export { DetailsUserService }