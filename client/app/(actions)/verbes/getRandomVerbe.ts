import { prisma } from "@/app/(libs)/client"

export default async function getRandomVerbe() {
    const randomVerbe = await prisma.verbes.aggregateRaw({
        pipeline: [
            {
                $sample: {
                    size: 1
                }
            }
        ]
    }).then(verbe => {
        const stringifyVerbe = JSON.stringify(verbe)
        const JSONParseVerbe = JSON.parse(stringifyVerbe)
        return JSONParseVerbe[0]
    })

    return randomVerbe
}