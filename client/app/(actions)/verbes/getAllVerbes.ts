import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function getAllVerbes() {
    const allVerbes = await prisma.verbes.findMany()

    return allVerbes
}