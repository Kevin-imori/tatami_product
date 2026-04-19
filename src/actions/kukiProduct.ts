'use server'

import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient();

export async function getKukiProducts() {
    const products = await prisma.kukiProduct.findMany({
        orderBy: { order: 'asc' }
    })
    
    // Seed default data if empty
    if (products.length === 0) {
        const defaultProducts = [
            { 
              title: "食器", 
              content: "古くなった陶器や使われない食器を丁寧に洗浄し、モダンな食卓にも合うように再提案。", 
              imageUrl: "https://plus.unsplash.com/premium_photo-1663045610667-27a3fd97eec9?q=80&w=800&auto=format&fit=crop", 
              order: 1 
            },
            { 
              title: "着物", 
              content: "タンスに眠っている美しい柄の着物を、現代のライフスタイルに合わせた小物や衣服にリメイク。", 
              imageUrl: "https://images.unsplash.com/photo-1549045763-71bf9e8a75e1?q=80&w=800&auto=format&fit=crop", 
              order: 2 
            },
            { 
              title: "畳", 
              content: "廃棄されるい草を加工し、コースターやインテリアのアクセントとして新しい命を吹き込みます。", 
              imageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop", 
              order: 3 
            },
        ]
        
        for (const dp of defaultProducts) {
            await prisma.kukiProduct.create({ data: dp })
        }
        
        return await prisma.kukiProduct.findMany({
            orderBy: { order: 'asc' }
        })
    }
    
    return products
}

export async function updateKukiProduct(id: string, data: { title: string, content: string, imageUrl: string }) {
    // any cast because prisma client types aren't generated locally
    return await (prisma as any).$transaction(async (tx: any) => {
        let product = await tx.kukiProduct.findUnique({ where: { id } })
        
        if (!product) {
            throw new Error('Product not found')
        }

        product = await tx.kukiProduct.update({
            where: { id },
            data
        })

        // save to history
        await tx.kukiProductHistory.create({
            data: {
                kukiProductId: product.id,
                title: data.title,
                content: data.content,
                imageUrl: data.imageUrl,
            }
        })

        return product
    })
}

export async function getKukiProductHistories(kukiProductId: string) {
    return await prisma.kukiProductHistory.findMany({
        where: { kukiProductId },
        orderBy: { createdAt: 'desc' },
    })
}
