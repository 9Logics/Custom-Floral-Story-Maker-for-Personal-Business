import React from 'react';

export default function EditorialTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-white p-6 text-center">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  // Get first letter for watermark
  const watermarkLetter = brandName ? brandName.charAt(0).toUpperCase() : 'F';

  return (
    <div className="w-full h-full bg-[#121212] flex flex-col p-6 font-sans text-[#fafafa] relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Editorial Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-[#d4af37] opacity-[0.03] select-none pointer-events-none leading-none z-0" style={{ fontFamily: 'Cormorant, serif' }}>
        {watermarkLetter}
      </div>

      {/* Header */}
      <div className="mb-2 pt-1 flex flex-col items-center relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className="font-serif text-[20px] text-[#fafafa] font-normal capitalize tracking-wide leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
          {brandName}
        </h1>
        </div>
        <p className={`text-[9px] font-medium uppercase tracking-[0.25em] text-[#d4af37] ${count > 4 ? 'mt-0' : 'mt-1'}.5`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Today's Pricing
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-3 grid-rows-3' : count >= 2 ? 'gap-6 grid-rows-2' : 'gap-6'} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full group">
            <div className={`w-full aspect-square relative w-full shrink-0 bg-[#1a1a1a] overflow-hidden flex items-center justify-center relative mb-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${!product.image ? 'opacity-40' : ''}`} />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className={`font-serif ${count > 4 ? 'text-[12px]' : 'text-[15px]'} font-normal text-white capitalize tracking-wide`} style={{ fontFamily: 'Cormorant, serif' }}>{product.name || 'Flower Name'}</h3>
              <div className={`flex items-center gap-2 ${count > 4 ? 'mt-0' : 'mt-1'}.5`}>
                <div className="w-4 h-[1px] bg-[#d4af37]/50"></div>
                <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} text-[#e8c85c] font-bold tracking-wider`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
                <div className="w-4 h-[1px] bg-[#d4af37]/50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-2 relative z-10">
        <div className="inline-block bg-transparent text-[#d4af37] border border-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase px-12 py-3 hover:bg-[#d4af37] hover:text-[#121212] transition-colors duration-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





