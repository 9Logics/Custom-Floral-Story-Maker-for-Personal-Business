import React from 'react';

export default function LuxeTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f5f0e8] text-[#3d2e1f] p-6 text-center">
        <p style={{ fontFamily: 'DM Serif Display, serif' }} className="italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col p-[32px] font-sans text-[#3d2e1f] relative">
      {/* Gold Hairline Frame */}
      <div className="absolute inset-[12px] border border-[#c9a87c]/30 rounded-lg pointer-events-none"></div>

      {/* Decorative Dots */}
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-1 h-1 bg-[#c9a87c] rounded-full"></div>
        <div className="w-1 h-1 bg-[#c9a87c] rounded-full"></div>
        <div className="w-1 h-1 bg-[#c9a87c] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-6 pt-6 relative z-10">
        <h1 className="text-[34px] text-[#3d2e1f] font-normal capitalize leading-tight" style={{ fontFamily: 'DM Serif Display, serif' }}>
          {brandName}
        </h1>
        <p className="text-[9px] text-[#8b7355] tracking-[0.15em] uppercase mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Fine Botanical Selection
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-3 ${count >= 2 ? 'grid-rows-2' : ''} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white p-2.5 border border-[#e8dfd3] rounded-xl shadow-none">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : count <= 4 ? 'h-[100px]' : 'h-[60px]'} rounded-lg overflow-hidden bg-gray-50 mb-3`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-80' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1">
              <h3 className="text-[14px] font-normal text-[#3d2e1f] capitalize truncate" style={{ fontFamily: 'DM Serif Display, serif' }}>{product.name || 'Product Name'}</h3>
              <p className="text-[11px] text-[#3d2e1f] font-medium mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
              {product.description && count <= 2 && (
                <p className="text-[10px] text-[#8b7355] mt-2 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2 relative z-10">
        <div className="inline-block bg-transparent text-[#3d2e1f] border border-[#3d2e1f] text-[11px] font-medium px-8 py-2.5 rounded-full capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
