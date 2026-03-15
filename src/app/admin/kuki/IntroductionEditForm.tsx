'use client'

import { useState } from 'react'
import { updateIntroduction } from '@/actions/introduction'

type Intro = {
    id: string
    content: string
}

type History = {
    id: string
    content: string
    createdAt: Date
}

export default function IntroductionEditForm({
    initialIntro,
    initialHistories
}: {
    initialIntro: Intro | null
    initialHistories: History[]
}) {
    const [content, setContent] = useState(initialIntro?.content ?? '')
    const [histories, setHistories] = useState(initialHistories)
    const [isSaving, setIsSaving] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        try {
            const saved = await updateIntroduction(content)
            alert('保存しました')

            setHistories([{
                id: 'temp-' + Date.now(),
                content,
                createdAt: new Date()
            }, ...histories].slice(0, 5))

        } catch (error) {
            console.error(error)
            alert('保存に失敗しました')
        } finally {
            setIsSaving(false)
        }
    }

    const handleRestore = (h: History) => {
        setContent(h.content)
        setIsModalOpen(false)
    }

    return (
        <>
            <form onSubmit={handleSave} className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium">本文</label>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        変更履歴 ({histories.length})
                    </button>
                </div>

                <div>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full p-3 h-64 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="紹介の本文を入力..."
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors"
                    >
                        {isSaving ? '保存中...' : '保存する'}
                    </button>
                </div>
            </form>

            {/* History Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="text-xl font-bold">変更履歴</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
                                ✕
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
                            {histories.length === 0 ? (
                                <p className="text-slate-500">履歴がありません</p>
                            ) : (
                                histories.map((h, i) => (
                                    <div key={h.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-slate-500">
                                                {new Date(h.createdAt).toLocaleString()} {i === 0 && '(最新)'}
                                            </span>
                                            <button
                                                onClick={() => handleRestore(h)}
                                                type="button"
                                                className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded text-sm hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                                            >
                                                この内容を復元
                                            </button>
                                        </div>
                                        <div className="text-sm line-clamp-3 text-slate-600 dark:text-slate-400">{h.content}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
