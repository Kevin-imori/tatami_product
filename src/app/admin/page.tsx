import Link from "next/link";

export default function AdminTop() {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
            <main className="max-w-6xl mx-auto flex flex-col gap-8">
                <header className="flex justify-between items-center mb-8 border-b border-slate-300 dark:border-slate-800 pb-6">
                    <h1 className="text-3xl font-bold">管理者TOP</h1>
                    <Link href="/" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
                        フロントエンド (TOP) へ戻る ↗
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Internal CMS */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">📝</span>
                            コンテンツ編集
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Link href="/admin/story" className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-md transition-all">
                                <div className="font-semibold">ストーリー編集画面</div>
                                <div className="text-slate-400 group-hover:text-blue-500 transition-colors">→</div>
                            </Link>
                            <Link href="/admin/kuki" className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:shadow-md transition-all">
                                <div className="font-semibold">九鬼の紹介編集ページ</div>
                                <div className="text-slate-400 group-hover:text-blue-500 transition-colors">→</div>
                            </Link>
                        </div>
                    </div>

                    {/* External Links */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">🛒</span>
                            Base管理 (外部)
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Link href="https://admin.thebase.in" target="_blank" className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-md transition-all">
                                <div className="font-semibold">商品編集画面（Base）</div>
                                <div className="text-slate-400 group-hover:text-emerald-500 transition-colors">↗</div>
                            </Link>
                            <Link href="https://admin.thebase.in" target="_blank" className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 hover:shadow-md transition-all">
                                <div className="font-semibold">購入者分析画面（Base）</div>
                                <div className="text-slate-400 group-hover:text-emerald-500 transition-colors">↗</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
