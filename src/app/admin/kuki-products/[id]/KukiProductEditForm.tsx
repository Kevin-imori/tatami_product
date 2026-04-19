'use client'

import { useState } from 'react'
import { updateKukiProduct } from '@/actions/kukiProduct'

type Product = {
    id: string
    title: string
    content: string
    imageUrl: string
}

type History = {
    id: string
    title: string
    content: string
    imageUrl: string
    createdAt: Date
}

export default function KukiProductEditForm({
    initialProduct,
    initialHistories
}: {
    initialProduct: Product
    initialHistories: History[]
}) {
    const [title, setTitle] = useState(initialProduct.title)
    const [content, setContent] = useState(initialProduct.content)
    const [imageUrl, setImageUrl] = useState(initialProduct.imageUrl)

    const [histories, setHistories] = useState(initialHistories)
    const [isSaving, setIsSaving] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        try {
            await updateKukiProduct(initialProduct.id, { title, content, imageUrl })
            alert('保存しました')

            setHistories([{
                id: 'temp-' + Date.now(),
                title,
                content,
                imageUrl,
                createdAt: new Date()
            }, ...histories])

        } catch (error) {
            console.error(error)
            alert('保存に失敗しました')
        } finally {
            setIsSaving(false)
        }
    }

    const handleRestore = (h: History) => {
        setTitle(h.title)
        setContent(h.content)
        setImageUrl(h.imageUrl)
        setIsModalOpen(false)
    }

    return (
        <>
            <form onSubmit={handleSave} className="flex flex-col gap-6">
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-sm text-slate-500">※フロントエンドの「九鬼の紹介」ページ内の同カードに反映されます</p>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
                    >
                        変更履歴 ({histories.length})
                    </button>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">タイトル</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">画像URL</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {imageUrl && <img src={imageUrl} alt="preview" className="mt-4 w-32 h-32 object-cover rounded-lg border border-slate-200" />}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">説明文</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full p-3 h-48 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none leading-loose"
                    ></textarea>
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors"
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
                                    <div key={h.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-slate-500">
                                                {new Date(h.createdAt).toLocaleString()} {i === 0 && '(最新)'}
                                            </span>
                                            <button
                                                onClick={() => handleRestore(h)}
                                                type="button"
                                                className="px-4 py-2 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-lg text-sm hover:bg-amber-200 font-medium transition-colors"
                                            >
                                                この内容を復元する
                                            </button>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                            <p className="font-bold text-lg">{h.title}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{h.content}</p>
                                        </div>
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
