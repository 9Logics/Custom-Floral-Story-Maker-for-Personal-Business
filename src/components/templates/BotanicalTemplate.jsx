import React from 'react';

export default function BotanicalTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#2a4a20] text-[#f4eae1] p-6 text-center">
        <p className="font-serif italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#1e3016] flex flex-col p-6 font-sans text-white relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Texture and Petals Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <svg className="absolute top-[10%] -left-12 w-48 h-48 text-[#4a6b38] opacity-30 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 20 C70 20 80 40 80 50 C80 60 70 80 50 80 C30 80 20 60 20 50 C20 40 30 20 50 20 Z" />
      </svg>
      <svg className="absolute bottom-[20%] right-[-2rem] w-40 h-40 text-[#4a6b38] opacity-20 rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 20 C70 20 80 40 80 50 C80 60 70 80 50 80 C30 80 20 60 20 50 C20 40 30 20 50 20 Z" />
      </svg>

      {/* Header */}
      <div className="text-center mb-6 pt-2 z-10 relative">
        
        {brandLogo && (<img src={brandLogo} alt="Logo" className="w-12 h-12 object-contain mx-auto mb-2" />)}
        <h1 className="font-serif text-[44px] text-[#f2f5eb] font-normal capitalize tracking-tight" style={{ fontFamily: 'Italiana, serif',  textShadow: '0 4px 20px rgba(0,0,0,0.3)'  }}>
          {brandName}
        </h1>
        <p className="text-[10px] text-[#b4d49a] tracking-[0.2em] uppercase mt-2 font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Wild & Organic
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-4 ${count >= 2 ? 'grid-rows-2' : ''} z-10 relative`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white/[0.06] backdrop-blur-xl p-3 rounded-[24px] border border-white/[0.15] shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
            <div className={`w-full flex-1 min-h-0 relative bg-black/20 rounded-[18px] overflow-hidden flex items-center justify-center relative mb-3 shadow-inner`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.1] transition-all duration-700 hover:scale-110 hover:brightness-100 ${!product.image ? 'opacity-70' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="flex flex-col text-center px-1 pb-1">
              <h3 className="font-serif text-[17px] font-medium truncate text-[#f2f5eb] capitalize" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{product.name || 'Flower Name'}</h3>
              <p className="text-[12px] text-[#b4d49a] font-semibold mt-1 tracking-wide">{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center pb-2 z-10 relative">
        <div className="inline-block bg-[#f2f5eb] text-[#1e3016] text-[13px] font-bold tracking-widest px-10 py-3.5 rounded-full shadow-[0_8px_20px_rgba(242,245,235,0.2)] capitalize transition-transform hover:-translate-y-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





