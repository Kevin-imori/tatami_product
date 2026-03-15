import Link from "next/link";
import { getLatestIntroduction } from "@/actions/introduction";

export const dynamic = 'force-dynamic'

export default async function KukiPage() {
    const intro = await getLatestIntroduction();

    return (
        <div className="min-h-screen p-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center justify-between mb-12">
                    <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                        ← TOPへ戻る
                    </Link>
                    <h1 className="text-3xl font-bold">九鬼の紹介</h1>
                </header>
                <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 whitespace-pre-wrap">
                    {intro?.content || "ここに九鬼の紹介内容が表示されます。（※連携・実装予定）"}
                </div>
            </div>
        </div>
    );
}
