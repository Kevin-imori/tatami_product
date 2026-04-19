import Link from 'next/link'
import { getKukiProducts } from '@/actions/kukiProduct'

export const dynamic = 'force-dynamic'

export default async function AdminKukiProducts() {
    const products = await getKukiProducts()

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex items-center gap-4">
                    <Link href="/admin" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        ← 管理画面トップへ
                    </Link>
                    <h1 className="text-2xl font-bold">九鬼の商品紹介 管理</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <div key={p.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                            <h2 className="text-xl font-bold mb-4">{p.title}</h2>
                            <img src={p.imageUrl} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-4 border border-slate-100" />
                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-grow leading-relaxed">{p.content}</p>
                            <Link href={`/admin/kuki-products/${p.id}`} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center">
                                編集する
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
