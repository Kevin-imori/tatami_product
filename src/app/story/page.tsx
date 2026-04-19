export default function StoryPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-73px)] bg-[#f8f9fa]">
      {/* Top half: Text content */}
      <div className="w-full flex-grow flex flex-col items-center justify-center py-24 px-6 md:px-12 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-[#1a2b4c] mb-20 text-center">
          - 九鬼の実情 -
        </h1>

        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-[#1a2b4c]">
          {/* Point 1 */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-widest border-b border-[#1a2b4c] pb-3 px-4">少子高齢化</h2>
            <p className="text-base leading-loose tracking-wider text-[#1a2b4c]/80 text-left md:text-center w-full max-w-xs md:max-w-full">
              高齢者が9割を占める限界集落となっており、地域コミュニティの維持が困難になりつつあります。
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-widest border-b border-[#1a2b4c] pb-3 px-4">空き家の増加</h2>
            <p className="text-base leading-loose tracking-wider text-[#1a2b4c]/80 text-left md:text-center w-full max-w-xs md:max-w-full">
              施設に入所したり、地元を出たまま戻らないなどの理由により、年々管理されない空き家が増加しています。
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-widest border-b border-[#1a2b4c] pb-3 px-4">東南海地震</h2>
            <p className="text-base leading-loose tracking-wider text-[#1a2b4c]/80 text-left md:text-center w-full max-w-xs md:max-w-full">
              食器や衣服など使わなくとも残している家が多く、地震の際には逃げ道の妨げや火災の原因になるリスクを抱えています。
            </p>
          </div>
        </div>
      </div>

      {/* Bottom half: Panoramic Image */}
      <div className="w-full h-[40vh] relative mt-auto border-t-[8px] border-white">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2000&auto=format&fit=crop"
          alt="九鬼の風景"
          className="object-cover w-full h-full opacity-90 grayscale-[20%]"
        />
      </div>
    </div>
  );
}
