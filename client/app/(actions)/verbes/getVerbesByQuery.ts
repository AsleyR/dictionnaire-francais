import { prisma } from "@/app/(libs)/client"

// Used for searching verbes
export default async function getVerbesByQuery(verbe: string) {
    const verbes = await prisma.verbes.findMany({
        where: {
            'verbe': {
                'contains': verbe,
                mode: 'insensitive'
            }
        }
    })

    return verbes
}