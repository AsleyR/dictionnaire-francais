import { prisma } from "@/app/(libs)/client"

export default async function getAllVerbes() {
    const allVerbes = await prisma.verbes.findMany()

    return allVerbes
}