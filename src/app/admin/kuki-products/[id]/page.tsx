import Link from "next/link";
import KukiProductEditForm from "./KukiProductEditForm";
import { getKukiProducts, getKukiProductHistories } from "@/actions/kukiProduct";

export const dynamic = 'force-dynamic'

export default async function AdminKukiProductEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const products = await getKukiProducts();
    const product = products.find(p => p.id === id);
    
    if (!product) return <div>Not Found</div>;

    const histories = await getKukiProductHistories(id);

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center gap-4 mb-8">
                    <Link href="/admin/kuki-products" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        ← 一覧へ戻る
                    </Link>
                    <h1 className="text-2xl font-bold">商品（{product.title}）の編集</h1>
                </header>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <KukiProductEditForm initialProduct={product} initialHistories={histories} />
                </div>
            </div>
        </div>
    );
}
