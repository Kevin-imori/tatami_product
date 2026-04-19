'use server'

import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient();

export async function getLatestIntroduction() {
    return await prisma.introduction.findFirst({
        orderBy: { updatedAt: 'desc' }
    })
}

export async function getIntroductionHistories(introductionId: string) {
    return await prisma.introductionHistory.findMany({
        where: { introductionId },
        orderBy: { createdAt: 'desc' },
    })
}

export async function updateIntroduction(content: string) {
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        // try to find existing introduction or create one
        let intro = await tx.introduction.findFirst()
        if (!intro) {
            intro = await tx.introduction.create({
                data: { content }
            })
        } else {
            intro = await tx.introduction.update({
                where: { id: intro.id },
                data: { content }
            })
        }

        // save to history
        await tx.introductionHistory.create({
            data: {
                introductionId: intro.id,
                content
            }
        })

        // fetch histories to delete older ones (keep last 5)
        const historiesToDelete = await tx.introductionHistory.findMany({
            where: { introductionId: intro.id },
            orderBy: { createdAt: 'desc' },
            skip: 5,
            select: { id: true }
        })

        if (historiesToDelete.length > 0) {
            await tx.introductionHistory.deleteMany({
                where: {
                    id: {
                        in: historiesToDelete.map((h: any) => h.id)
                    }
                }
            })
        }

        return intro
    })
}
