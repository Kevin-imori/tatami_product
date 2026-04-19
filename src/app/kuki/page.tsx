import { getKukiProducts } from "@/actions/kukiProduct";

export const dynamic = 'force-dynamic';

export default async function KukiPage() {
  const products = await getKukiProducts();

  return (
    <div className="bg-[#f8f9fa] text-[#1a2b4c]">
      
      {/* Section 1: Reuse (Slide 6) */}
      <section className="min-h-screen flex flex-col items-center justify-center py-32 px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-center mb-20 md:mb-32 leading-relaxed">
          - 使われていないものを<br className="md:hidden" />価値あるものへ再活用 -
        </h1>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              <h2 className="text-2xl font-bold tracking-widest mb-8">{product.title}</h2>
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-white p-3 shadow-sm border border-[#1a2b4c]/5">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <p className="mt-8 text-base tracking-widest text-center text-[#1a2b4c]/80 leading-loose max-w-sm whitespace-pre-wrap">
                {product.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#1a2b4c]/20 max-w-7xl mx-auto"></div>

      {/* Section 2: Efforts and Challenges (Slide 7) */}
      <section className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full h-[50vh] md:h-auto relative overflow-hidden p-8 md:p-16">
          <img
            src="https://images.unsplash.com/photo-1596706935703-e82ebf90b236?q=80&w=1200&auto=format&fit=crop"
            alt="九鬼の町並み"
            className="object-cover w-full h-full rounded-sm"
          />
        </div>

        {/* Right: Text content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-12 lg:p-24 space-y-20 bg-[#f8f9fa]">
          <div className="max-w-xl w-full mx-auto md:mx-0 pr-0 lg:pr-12">
            
            {/* Current Efforts */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold tracking-[0.2em]">
                - 現在の取り組み -
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold text-[#1a2b4c]">✓</span>
                  <p className="text-base tracking-widest leading-loose">空き家に残された不要品を回収し、BASE等で販売</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold text-[#1a2b4c]">✓</span>
                  <p className="text-base tracking-widest leading-loose">まだ使えるきれいな食器や衣類を希望者へ譲渡</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-xl font-bold text-[#1a2b4c]">✓</span>
                  <p className="text-base tracking-widest leading-loose">地域イベントでの再利用品の展示・啓蒙活動</p>
                </li>
              </ul>
            </div>

            <div className="w-full h-[1px] bg-[#1a2b4c]/20 my-16"></div>

            {/* Current Challenges */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold tracking-[0.2em]">
                - 現在の課題 -
              </h2>
              <ul className="space-y-6 text-[#1a2b4c]/90">
                <li className="flex items-start">
                  <span className="mr-4 text-[#1a2b4c]">■</span>
                  <p className="text-base tracking-widest leading-loose">デザインが古く、そのままでは売り出しにくい品の加工技術</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-[#1a2b4c]">■</span>
                  <p className="text-base tracking-widest leading-loose">日常的に着物を着る機会が減少し、リメイク先が限られる</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 text-[#1a2b4c]">■</span>
                  <p className="text-base tracking-widest leading-loose">重い家具や食器の運び出し、処分のための人手と手間</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
