import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Returns individual verbe that matches 'verbe' parameter
export default async function getVerbeByVerbe(verbe: string) {
    const specificVerbe = await prisma.verbes.findFirst({
        where: {
            'verbe': verbe
        }
    })

    return specificVerbe
}