import { prisma } from "@/app/(libs)/client"

export default async function getVerbeById(id: string) {
    const verbe = await prisma.verbes.findUnique({
        'where': {
            'id': id
        }
    })

    return verbe
}