import Link from "next/link";

export default function ProductPage() {
  const shopUrl = "https://kukiproduct.base.shop/";

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 font-sans flex flex-col">
      <div className="max-w-6xl mx-auto w-full space-y-12 flex-grow flex flex-col">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
              商品一覧
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              商品の詳細・ご購入は公式オンラインショップ（Base）にて承っております。
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium text-slate-700 dark:text-slate-200 shadow-sm"
          >
            TOPへ戻る
          </Link>
        </header>

        {/* Shop Link Section */}
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 text-center max-w-2xl w-full hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-500">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-5xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] transform hover:rotate-12 transition-transform duration-300">
              🛍️
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
              公式オンラインショップ
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              こだわりの商品は、Baseショップにてお買い求めいただけます。<br/>
              最新情報や詳細についてもこちらからご覧ください。
            </p>
            
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">🏬</span>
              Baseショップを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
