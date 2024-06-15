import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function getVerbeById(id: string) {
    const verbe = await prisma.verbes.findUnique({
        'where': {
            'id': id
        }
    })

    return verbe
}