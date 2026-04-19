import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function InquiryList() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-8 font-sans text-slate-900 dark:text-slate-100">
      <main className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="flex justify-between items-center mb-8 border-b border-slate-300 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shadow-sm">✉️</span>
              お問い合わせ一覧
            </h1>
            <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold px-3 py-1 rounded-full text-sm">
              {inquiries.length}件
            </span>
          </div>
          <Link href="/admin" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-medium transition-colors hover:-translate-x-1 inline-flex items-center gap-1">
            <span>←</span> 管理者TOPへ戻る
          </Link>
        </header>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          {inquiries.length === 0 ? (
             <div className="p-16 text-center text-slate-500 dark:text-slate-400 flex flex-col items-center gap-4">
               <div className="text-6xl text-slate-300 dark:text-slate-700">📪</div>
               <p className="text-lg">現在、お問い合わせはありません。</p>
             </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-bold w-48">受信日時</th>
                    <th className="p-4 font-bold w-48">送信者情報</th>
                    <th className="p-4 font-bold w-1/4">件名</th>
                    <th className="p-4 font-bold">メッセージ内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                      <td className="p-4 align-top whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                        {new Date(inquiry.createdAt).toLocaleString("ja-JP", {
                          year: "numeric", month: "2-digit", day: "2-digit",
                          hour: "2-digit", minute: "2-digit"
                        })}
                      </td>
                      <td className="p-4 align-top text-sm">
                        <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {inquiry.name}
                        </div>
                        <a href={`mailto:${inquiry.email}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H3zm14 2.207l-6.54 6.54a2 2 0 01-2.92 0L3 6.207V6h14v.207z" />
                          </svg>
                          <span className="truncate max-w-[150px]" title={inquiry.email}>{inquiry.email}</span>
                        </a>
                      </td>
                      <td className="p-4 align-top text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {inquiry.subject ? inquiry.subject : <span className="text-slate-400 dark:text-slate-500 font-normal italic">（件名なし）</span>}
                      </td>
                      <td className="p-4 align-top text-sm text-slate-700 dark:text-slate-300">
                        <div className="max-h-36 overflow-y-auto whitespace-pre-wrap break-words pr-2 custom-scrollbar p-3 bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-100 dark:border-slate-800">
                          {inquiry.message}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
