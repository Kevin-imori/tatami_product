import Link from "next/link";
import StoryEditForm from "./StoryEditForm";
import { getLatestStory, getStoryHistories } from "@/actions/story";

export const dynamic = 'force-dynamic'

export default async function AdminStoryEdit() {
    const story = await getLatestStory();
    const histories = story ? await getStoryHistories(story.id) : [];

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center gap-4 mb-8">
                    <Link href="/admin" className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        ← 戻る
                    </Link>
                    <h1 className="text-2xl font-bold">ストーリー編集画面</h1>
                </header>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <StoryEditForm initialStory={story} initialHistories={histories} />
                </div>
            </div>
        </div>
    );
}
