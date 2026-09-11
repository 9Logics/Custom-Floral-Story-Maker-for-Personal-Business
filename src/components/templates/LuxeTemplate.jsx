import React from 'react';

export default function LuxeTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f5f0e8] text-[#2c2c2c] p-6 text-center">
        <p style={{ fontFamily: 'Tenor Sans, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#f8f5f0] flex flex-col p-6 font-sans text-[#2c2c2c] border-[6px] border-[#e8dcc4] relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Victorian Flourish Accents */}
      <svg className="absolute top-2 left-2 w-16 h-16 text-[#cfa86e] opacity-40" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 10 10 Q 30 10 30 30 Q 30 50 50 50 Q 30 50 30 70 Q 30 90 10 90 Q 30 90 50 90 Q 70 90 70 70 Q 70 50 90 50 Q 70 50 70 30 Q 70 10 90 10 Q 70 10 50 10 Q 30 10 10 10 Z" />
      </svg>
      <svg className="absolute bottom-2 right-2 w-16 h-16 text-[#cfa86e] opacity-40 rotate-180" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 10 10 Q 30 10 30 30 Q 30 50 50 50 Q 30 50 30 70 Q 30 90 10 90 Q 30 90 50 90 Q 70 90 70 70 Q 70 50 90 50 Q 70 50 70 30 Q 70 10 90 10 Q 70 10 50 10 Q 30 10 10 10 Z" />
      </svg>

      {/* Header */}
      <div className="text-center mb-1 pt-1 relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className="font-serif text-[20px] text-[#2c2c2c] font-medium capitalize" style={{ fontFamily: 'Cinzel, serif' }}>
          {brandName}
        </h1>
        </div>
        <p className="text-[9px] text-[#9b8566] tracking-[0.2em] uppercase mt-2 font-bold" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>
          Today's Pricing
        </p>
        <div className="w-16 h-[1px] bg-[#cfa86e] mx-auto mt-2"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-2 grid-rows-3' : count >= 2 ? 'gap-4 grid-rows-2' : 'gap-4'} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#e8dcc4]">
            <div className={`w-full aspect-square relative w-full shrink-0 bg-[#f5f0e8] overflow-hidden flex items-center justify-center relative mb-1.5 ring-1 ring-[#cfa86e]/30`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover ${!product.image ? 'opacity-50' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1">
              <h3 className={`${count > 4 ? 'text-[13px]' : 'text-[17px]'} font-medium truncate text-[#3d3326] capitalize`} style={{ fontFamily: 'Cinzel, serif' }}>{product.name || 'Flower Name'}</h3>
              <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} text-[#b0874c] font-bold ${count > 4 ? 'mt-0' : 'mt-1'}`} style={{ fontFamily: 'Tenor Sans, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2 relative z-10">
        <div className="inline-block bg-[#2c2c2c] text-[#f8f5f0] text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-3 shadow-[0_4px_15px_rgba(44,44,44,0.3)]" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





