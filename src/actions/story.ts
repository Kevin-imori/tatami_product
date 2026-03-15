'use server'

import prisma from '@/lib/prisma'

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
    return await prisma.$transaction(async (tx: any) => {
        // try to find existing story or create one
        let story = await tx.story.findFirst()
        if (!story) {
            story = await tx.story.create({
                data: { title, content }
            })
        } else {
            story = await tx.story.update({
                where: { id: story.id },
                data: { title, content }
            })
        }

        // save to history
        await tx.storyHistory.create({
            data: {
                storyId: story.id,
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
