import React from 'react';

export default function ModernTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0f0f0f] text-white p-6 text-center">
        <p className="font-serif font-light text-xl opacity-40 capitalize">Awaiting Products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#0f0f0f] flex flex-col p-5 font-sans text-white">
      {/* Header */}
      <div className="mb-6 pt-6 flex justify-between items-end border-b border-white/[0.08] pb-4">
        <h1 className="font-serif text-[28px] text-white capitalize font-light leading-tight">
          {brandName}
        </h1>
        <div className="w-2 h-2 bg-[#e8a85c] rounded-full mb-2"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-3 ${count >= 2 ? 'grid-rows-2' : ''}`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white/[0.04] p-2 rounded-lg relative overflow-hidden border border-white/[0.06]">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : 'h-[95px]'} bg-[#1a1a1a] rounded overflow-hidden flex items-center justify-center relative`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.1] ${!product.image ? 'opacity-50' : ''}`} />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/85 to-transparent p-3 pt-8">
                <div className="flex justify-between items-end">
                  <h3 className="text-[13px] font-medium text-[#fafafa] truncate pr-2 capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name || 'Product'}</h3>
                  <p className="text-[11px] text-[#e8a85c] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
                </div>
              </div>
            </div>
            
            {product.description && count <= 2 && (
              <div className="mt-2 px-1">
                <p className="text-[10px] text-[#737373] font-light leading-relaxed line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <div className="w-full bg-[#fafafa] text-[#0f0f0f] text-[14px] font-medium py-3 capitalize rounded-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Shop Collection'}
        </div>
      </div>
    </div>
  );
}
