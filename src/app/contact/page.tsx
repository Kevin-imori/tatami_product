export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row flex-grow w-full h-[calc(100vh-73px)]">
      {/* Left side: Illustration */}
      <div className="md:w-1/2 w-full h-[40vh] md:h-full bg-slate-200 flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop"
          alt="Illustration"
          className="w-full h-full object-cover filter contrast-75 brightness-110 opacity-90"
        />
      </div>

      {/* Right side: Contact Info */}
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center p-12 lg:p-24 bg-[#f8f9fa] overflow-y-auto">
        <div className="max-w-lg w-full space-y-12 mx-auto md:mx-0">
          
          <div className="flex items-center space-x-6">
            <div className="w-[6px] h-14 bg-[#1a2b4c]"></div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-[#1a2b4c]">
              - お問い合わせ -
            </h1>
          </div>

          <div className="space-y-10 mt-16 text-[#1a2b4c]">
            <div className="border-t border-[#1a2b4c]/10 pt-10">
              <div className="flex items-start space-x-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a2b4c] mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest mb-3">メールでのお問い合わせ</h3>
                  <p className="text-sm tracking-wider leading-loose text-[#1a2b4c]/80">
                    ご質問やご相談のご連絡は、以下のメールアドレスよりお願いいたします。<br/>
                    <a href="mailto:info@kukiproduct.com" className="font-bold underline mt-3 inline-block hover:opacity-70 transition-opacity">info@kukiproduct.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1a2b4c]/10 pt-10">
              <div className="flex items-start space-x-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a2b4c] mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest mb-3">オンラインショップ</h3>
                  <p className="text-sm tracking-wider leading-loose text-[#1a2b4c]/80">
                    商品の詳細やご購入に関する内容につきましては、BASEオンラインショップをご利用ください。<br/>
                    ※ 各商品に関するお問い合わせもショップ内から可能です。
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1a2b4c]/10 pt-10 border-b pb-10">
              <div className="flex items-start space-x-5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1a2b4c] mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold tracking-widest mb-3">よくあるご質問</h3>
                  <p className="text-sm tracking-wider leading-loose text-[#1a2b4c]/80">
                    お問い合わせいただく前に、オンラインショップ下部にございます「よくあるご質問」もあわせてご確認ください。
                  </p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
