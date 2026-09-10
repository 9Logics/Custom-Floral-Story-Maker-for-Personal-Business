import React from 'react';

export default function LuxeTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f5f0e8] text-[#2c2c2c] p-6 text-center">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#f8f5f0] flex flex-col p-6 font-sans text-[#2c2c2c] border-[6px] border-[#e8dcc4] relative overflow-hidden">
      {/* Victorian Flourish Accents */}
      <svg className="absolute top-2 left-2 w-16 h-16 text-[#cfa86e] opacity-40" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 10 10 Q 30 10 30 30 Q 30 50 50 50 Q 30 50 30 70 Q 30 90 10 90 Q 30 90 50 90 Q 70 90 70 70 Q 70 50 90 50 Q 70 50 70 30 Q 70 10 90 10 Q 70 10 50 10 Q 30 10 10 10 Z" />
      </svg>
      <svg className="absolute bottom-2 right-2 w-16 h-16 text-[#cfa86e] opacity-40 rotate-180" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 10 10 Q 30 10 30 30 Q 30 50 50 50 Q 30 50 30 70 Q 30 90 10 90 Q 30 90 50 90 Q 70 90 70 70 Q 70 50 90 50 Q 70 50 70 30 Q 70 10 90 10 Q 70 10 50 10 Q 30 10 10 10 Z" />
      </svg>

      {/* Header */}
      <div className="text-center mb-6 pt-4 relative z-10">
        <h1 className="font-serif text-[42px] text-[#2c2c2c] font-medium capitalize" style={{ fontFamily: 'DM Serif Display, serif' }}>
          {brandName}
        </h1>
        <p className="text-[9px] text-[#9b8566] tracking-[0.2em] uppercase mt-2 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Today's Pricing
        </p>
        <div className="w-16 h-[1px] bg-[#cfa86e] mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-4 ${count >= 2 ? 'grid-rows-2' : ''} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-[#e8dcc4]">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : count <= 4 ? 'h-[100px]' : 'h-[60px]'} bg-[#f5f0e8] overflow-hidden flex items-center justify-center relative mb-3 ring-1 ring-[#cfa86e]/30`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Flower'} className={`w-full h-full object-cover ${!product.image ? 'opacity-50' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1">
              <h3 className="font-serif text-[15px] font-normal text-[#2c2c2c] capitalize" style={{ fontFamily: 'DM Serif Display, serif' }}>{product.name || 'Flower Name'}</h3>
              <p className="text-[12px] text-[#cfa86e] font-semibold mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2 relative z-10">
        <div className="inline-block bg-[#2c2c2c] text-[#f8f5f0] text-[11px] font-bold tracking-[0.15em] uppercase px-10 py-3 shadow-[0_4px_15px_rgba(44,44,44,0.3)]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
