import React from 'react';

export default function ClassicTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#faf9f6] text-[#2d4a22] p-6 text-center">
        <p className=" italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#fcfbf9] flex flex-col p-6 font-sans text-[#1f2937] relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Background Floral Accents */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-[#2d4a22] opacity-[0.04] -translate-x-8 -translate-y-8" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C60 30 90 40 100 50 C90 60 60 70 50 100 C40 70 10 60 0 50 C10 40 40 30 50 0 Z" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-48 h-48 text-[#2d4a22] opacity-[0.03] translate-x-12 translate-y-12 rotate-45" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C60 30 90 40 100 50 C90 60 60 70 50 100 C40 70 10 60 0 50 C10 40 40 30 50 0 Z" />
      </svg>

      {/* Header */}
      <div className="text-center mb-1 pt-1 relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className=" text-[20px] font-serif text-[#1b3312] font-medium capitalize leading-tight tracking-tight" style={{ fontFamily: 'Prata, serif' }}>
          {brandName}
        </h1>
        </div>
        <div className={`flex items-center justify-center gap-3 mt-2`}>
          <div className="w-8 h-px bg-[#d4af37]/40"></div>
          <svg className="w-3 h-3 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" fill="currentColor" opacity="0.3"/>
          </svg>
          <div className="w-8 h-px bg-[#d4af37]/40"></div>
        </div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-2 grid-rows-3' : count >= 2 ? 'gap-4 grid-rows-2' : 'gap-4'} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className={`flex flex-col h-full bg-white ${count > 4 ? 'p-1.5' : 'p-3.5'} shadow-[0_8px_30px_rgba(45,74,34,0.08)] rounded-2xl border border-[#f0ede8]/50 hover:shadow-[0_12px_40px_rgba(45,74,34,0.12)] transition-shadow duration-500`}>
            <div className={`w-full aspect-square relative w-full bg-[#f9f8f6] rounded-xl overflow-hidden flex items-center justify-center relative mb-1.5 ring-1 ring-black/5`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${!product.image ? 'opacity-80' : ''}`} />
            </div>
            <div className={`flex flex-col text-center px-1 ${count > 4 ? 'mt-0' : 'mt-1'}`}>
              <h3 className={` ${count > 4 ? 'text-[13px]' : 'text-[17px]'} font-bold truncate text-[#1b3312] capitalize`}>{product.name || 'Flower Name'}</h3>
              <p className={`${count > 4 ? 'text-[12px]' : 'text-[15px]'} text-[#967140] font-bold ${count > 4 ? 'mt-0' : 'mt-1'} tracking-wide`}>{product.price ? `₹${product.price.replace('₹', '')}${product.unit || ''}` : 'Price'}</p>
              {product.description && count <= 2 && (
                <p className="text-[11px] text-[#8c857b] mt-2.5 line-clamp-2 leading-relaxed">{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-4 relative z-10">
        <div className="inline-block bg-[#1b3312] text-[#fcfbf9] text-[13px] font-semibold tracking-wider px-10 py-3.5 rounded-full shadow-[0_4px_14px_rgba(27,51,18,0.25)] capitalize" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





