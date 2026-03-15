import Link from "next/link";
import IntroductionEditForm from "./IntroductionEditForm";
import { getLatestIntroduction, getIntroductionHistories } from "@/actions/introduction";

export const dynamic = 'force-dynamic'

export default async function AdminKukiEdit() {
    const intro = await getLatestIntroduction();
    const histories = intro ? await getIntroductionHistories(intro.id) : [];

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center gap-4 mb-8">
                    <Link href="/admin" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        ← 戻る
                    </Link>
                    <h1 className="text-2xl font-bold">九鬼の紹介編集ページ</h1>
                </header>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <IntroductionEditForm initialIntro={intro} initialHistories={histories} />
                </div>
            </div>
        </div>
    );
}
