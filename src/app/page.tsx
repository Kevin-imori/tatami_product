export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-grow w-full h-[calc(100vh-73px)]">
      {/* Left side: Image */}
      <div className="md:w-1/2 w-full h-[50vh] md:h-full relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542016391-7f9cb8163f53?q=80&w=1600&auto=format&fit=crop"
          alt="九鬼の港"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side: Text Content */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-12 lg:p-24 bg-[#f8f9fa] h-full overflow-y-auto">
        <div className="max-w-md w-full space-y-12 text-center flex flex-col items-center justify-center">
          
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-[#1a2b4c]">
              九鬼
            </h1>
            <div className="w-16 h-[2px] bg-[#1a2b4c] mt-8 mb-4"></div>
          </div>

          <div className="space-y-6 flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] font-medium text-[#1a2b4c]">
              暮らしに活かすエシカル
            </h2>
            <p className="text-sm md:text-base text-[#1a2b4c]/80 tracking-widest mt-2">
              〜九鬼のために活動したいこと〜
            </p>
          </div>

          <div className="w-full max-w-[200px] pt-12 border-t border-[#1a2b4c]/20 flex flex-col items-center text-xs md:text-sm tracking-widest text-[#1a2b4c]/80 space-y-3">
            <p>令和8年4月10日</p>
            <p>エシカル・アクション部</p>
            <p>尾崎 萌美</p>
          </div>

        </div>
      </div>
    </div>
  );
}
