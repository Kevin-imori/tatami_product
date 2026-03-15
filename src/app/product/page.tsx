import Link from "next/link";
import Image from "next/image";

// Base API Type definitions
type BaseItem = {
  item_id: number;
  title: string;
  detail: string;
  price: number;
  stock: number;
  item_tax_type: number;
  tax: number;
  visible: number;
  list_order: number;
  identifier: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  categories: any[];
};

type BaseItemsResponse = {
  items: BaseItem[];
};

// Fallback Mock Data in case API is not available
const MOCK_ITEMS: BaseItem[] = [
  {
    item_id: 1,
    title: "オリジナル畳ラグ - 千羽鶴",
    detail: "最高級のい草を使用したオリジナルデザインの畳ラグです。現代のインテリアにも合うモダンなデザイン。",
    price: 15000,
    stock: 10,
    item_tax_type: 1,
    tax: 1500,
    visible: 1,
    list_order: 1,
    identifier: "item-001",
    image1: "https://images.unsplash.com/photo-1542016391-7f9cb8163f53?w=800&q=80",
    categories: [],
  },
  {
    item_id: 2,
    title: "和モダンクッション",
    detail: "畳素材を使用した心地よいクッション。お部屋のアクセントに最適です。",
    price: 4500,
    stock: 25,
    item_tax_type: 1,
    tax: 450,
    visible: 1,
    list_order: 2,
    identifier: "item-002",
    image1: "https://images.unsplash.com/photo-1579705745124-7ebba39ee4b9?w=800&q=80",
    categories: [],
  },
  {
    item_id: 3,
    title: "畳コースターセット（4枚入り）",
    detail: "職人が手作りした畳のミニコースター。ギフトにもぴったりです。",
    price: 2000,
    stock: 50,
    item_tax_type: 1,
    tax: 200,
    visible: 1,
    list_order: 3,
    identifier: "item-003",
    image1: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    categories: [],
  }
];

// Fetch function for Base API
async function fetchBaseItems(): Promise<BaseItem[]> {
  const accessToken = process.env.BASE_ACCESS_TOKEN;
  
  if (!accessToken) {
    console.warn("BASE_ACCESS_TOKEN is not set. Using mock data.");
    return MOCK_ITEMS;
  }

  try {
    const res = await fetch("https://api.thebase.in/1/items", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!res.ok) {
      console.error("Base API error", res.status, res.statusText);
      return MOCK_ITEMS; // Fallback to mock data on error
    }

    const data: BaseItemsResponse = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch from Base API", error);
    return MOCK_ITEMS;
  }
}

export default async function ProductPage() {
  const items = await fetchBaseItems();
  const shopUrl = process.env.NEXT_PUBLIC_BASE_SHOP_URL || "https://thebase.in";

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
              商品一覧
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Baseで作成・管理されている商品を表示しています。
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium text-slate-700 dark:text-slate-200 shadow-sm"
          >
            TOPへ戻る
          </Link>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.item_id} className="group flex flex-col bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Product Image */}
              <div className="relative aspect-square bg-slate-100 dark:bg-slate-700 overflow-hidden">
                {item.image1 ? (
                  <img
                    src={item.image1}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="text-4xl">📦</span>
                  </div>
                )}
                {item.stock <= 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex-grow space-y-2">
                  <h2 className="text-xl font-bold line-clamp-2 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    ¥{item.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                    {item.detail}
                  </p>
                </div>

                {/* Purchase Button (Links to Base shop) */}
                <a
                  href={`${shopUrl}/items/${item.identifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="mr-2 text-xl">🛍️</span>
                  Baseで購入する
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {items.length === 0 && (
          <div className="text-center py-24 text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 border-dashed">
            <p className="text-2xl font-semibold mb-2">商品がありません</p>
            <p>商品が登録されていないか、非公開になっています。</p>
          </div>
        )}
      </div>
    </div>
  );
}
