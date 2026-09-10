import React from 'react';

export default function EditorialTemplate({ products, brandName, ctaText, brandLogo }) {
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
      {/* Editorial Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-[#d4af37] opacity-[0.03] select-none pointer-events-none leading-none z-0" style={{ fontFamily: 'Playfair Display, serif' }}>
        {watermarkLetter}
      </div>

      {/* Header */}
      <div className="mb-8 pt-4 flex flex-col items-center relative z-10">
        
        {brandLogo && (<img src={brandLogo} alt="Logo" className="w-12 h-12 object-contain mx-auto mb-2" />)}
        <h1 className="font-serif text-[42px] text-[#fafafa] font-normal capitalize tracking-wide leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          {brandName}
        </h1>
        <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#d4af37] mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Today's Pricing
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-6 ${count >= 2 ? 'grid-rows-2' : ''} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full group">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : count <= 4 ? 'h-[100px]' : 'h-[60px]'} bg-[#1a1a1a] overflow-hidden flex items-center justify-center relative mb-3 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Flower'} className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${!product.image ? 'opacity-40' : ''}`} />
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="font-serif text-[15px] font-normal text-white capitalize tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name || 'Flower Name'}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-4 h-[1px] bg-[#d4af37]/50"></div>
                <p className="text-[11px] text-[#d4af37] font-semibold tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
                <div className="w-4 h-[1px] bg-[#d4af37]/50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center pb-2 relative z-10">
        <div className="inline-block bg-transparent text-[#d4af37] border border-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase px-12 py-3 hover:bg-[#d4af37] hover:text-[#121212] transition-colors duration-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}

