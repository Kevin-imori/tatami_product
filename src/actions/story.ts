'use server'

import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getLatestStory() {
    return await prisma.story.findFirst({
        orderBy: { updatedAt: 'desc' }
    })
}

export async function getStoryHistories(storyId: string) {
    return await prisma.storyHistory.findMany({
        where: { storyId },
        orderBy: { createdAt: 'desc' },
    })
}

export async function updateStory(title: string, content: string) {
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        const existingStory = await tx.story.findFirst()
        // 既に story が存在する場合の処理
        const story = await (async () => {
            if (!existingStory) {
                return await tx.story.create({ data: { title, content } });
            } else {
                // story が存在しない場合の処理
                return await tx.story.update({
                    where: { id: existingStory.id },
                    data: { title, content }
                });
            }

            // save to history
            const saveHistory = await tx.story.findFirst()
            await tx.storyHistory.create({
                data: {
                    storyId: existingStory.id,
                    title,
                    content
                }
            })

            // fetch histories to delete older ones (keep last 5)
            // we use take/skip to find histories from offset 5, then delete them
            const historiesToDelete = await tx.storyHistory.findMany({
                where: { storyId: story.id },
                orderBy: { createdAt: 'desc' },
                skip: 5,
                select: { id: true }
            })

            if (historiesToDelete.length > 0) {
                await tx.storyHistory.deleteMany({
                    where: {
                        id: {
                            in: historiesToDelete.map((h: any) => h.id)
                        }
                    }
                })
            }

            return story
        })
    }
