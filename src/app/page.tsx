import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 font-sans">
      <main className="flex flex-col gap-12 items-center w-full max-w-5xl z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Tatami Product
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            画面遷移図に基づくプロトタイプ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Link href="/product" className="group rounded-3xl p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">🛍️</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">商品</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">商品一覧を見る</p>
            </div>
          </Link>

          <Link href="/story" className="group rounded-3xl p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">📖</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">ストーリー</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">ブランドのストーリーを見る</p>
            </div>
          </Link>

          <Link href="/kuki" className="group rounded-3xl p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">九鬼の紹介</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">こだわりや背景について</p>
            </div>
          </Link>
        </div>

      </main>
    </div>
  );
}
