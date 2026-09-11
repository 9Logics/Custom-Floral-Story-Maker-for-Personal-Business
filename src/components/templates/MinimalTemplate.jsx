import React from 'react';

export default function MinimalTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white text-[#2a2a2a] p-6 text-center">
        <p style={{ fontFamily: 'Tenor Sans, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const imageHeight = count === 1 ? 'h-[220px]' : count === 2 ? 'h-[130px]' : count <= 4 ? 'h-[90px]' : 'h-[50px]';

  return (
    <div className="w-full h-full bg-[#fdfdfc] flex flex-col p-6 font-sans text-[#1a1a1a] relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Delicate Line-Art Stem Background */}
      <svg className="absolute top-0 right-0 w-64 h-64 text-[#a3b19b] opacity-[0.15] -translate-y-8 translate-x-12 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M 50 100 Q 40 70 60 40 T 80 0" fill="none" />
        <path d="M 55 60 Q 70 50 85 55 Q 70 65 55 60" fill="currentColor" opacity="0.5" />
        <path d="M 62 35 Q 45 25 35 15 Q 45 40 62 35" fill="currentColor" opacity="0.5" />
        <path d="M 72 20 Q 85 10 95 15 Q 85 25 72 20" fill="currentColor" opacity="0.5" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-48 h-48 text-[#a3b19b] opacity-[0.12] translate-y-8 -translate-x-8 pointer-events-none rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M 50 100 Q 40 70 60 40 T 80 0" fill="none" />
        <path d="M 55 60 Q 70 50 85 55 Q 70 65 55 60" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Header */}
      <div className="mb-2 pt-1 flex flex-col items-center relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className="text-[18px] text-[#1a1a1a] font-medium tracking-[0.05em] uppercase leading-tight" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>
          {brandName}
        </h1>
        </div>
        <p className="text-[10px] text-[#7a7a7a] tracking-[0.2em] uppercase mt-2">Pure & Simple</p>
      </div>

      {/* Grid */}
      <div className={`flex-1 flex flex-col relative z-10 ${count > 4 ? 'grid grid-cols-2 grid-rows-3 gap-2' : count >= 2 ? 'grid grid-cols-2 grid-rows-2 gap-4' : 'gap-4'}`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full group">
            <div className={`w-full flex-1 min-h-0 relative w-full bg-[#f5f5f5] overflow-hidden mb-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.03)]`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${!product.image ? 'opacity-50' : ''}`} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-baseline border-b border-[#e5e5e5] pb-1.5 mb-1.5">
                <h3 className={`${count > 4 ? 'text-[12px]' : 'text-[15px]'} font-bold text-[#1a1a1a] capitalize tracking-wide truncate pr-2`} style={{ fontFamily: 'Tenor Sans, sans-serif' }}>{product.name || 'Flower Name'}</h3>
                <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} text-[#1a1a1a] font-black`} style={{ fontFamily: 'Tenor Sans, sans-serif' }}>{product.price ? `₹${product.price.replace('₹', '')}${product.unit || ''}` : 'Price'}</p>
              </div>
              {product.description && count <= 2 && (
                <p className="text-[10px] text-[#7a7a7a] font-light leading-relaxed">{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-2 relative z-10">
        <div className="inline-block bg-transparent text-[#1a1a1a] border border-[#1a1a1a] text-[11px] font-medium tracking-[0.15em] uppercase px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





