import React from 'react';

export default function MinimalTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white text-[#1a1a1a] p-6 text-center">
        <p className="font-serif italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const imageHeight = count === 1 ? 'h-[220px]' : count === 2 ? 'h-[130px]' : 'h-[90px]';

  // For 3-4 products, use a 2-column grid
  if (count > 2) {
    return (
      <div className="w-full h-full bg-white flex flex-col px-7 py-7 font-sans text-[#1a1a1a]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {brandName}
          </h1>
          <div className="w-8 h-[2px] bg-[#2d4a22] mt-3"></div>
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {products.map((product, i) => (
            <div key={product.id || i} className="flex flex-col">
              <div className={`w-full ${imageHeight} rounded-md overflow-hidden bg-gray-50`}>
                <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-70' : ''}`} />
              </div>
              <h3 className="font-serif text-[18px] font-medium text-[#1a1a1a] capitalize mt-3 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>{product.name || 'Product Name'}</h3>
              <p className="text-[11px] text-[#999] font-medium mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center pb-2">
          <div className="inline-block border border-[#1a1a1a] text-[#1a1a1a] text-[11px] font-medium uppercase tracking-[0.15em] px-8 py-3 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {ctaText || 'Order Now'}
          </div>
        </div>
      </div>
    );
  }

  // For 1-2 products, vertical stack with dividers
  return (
    <div className="w-full h-full bg-white flex flex-col px-7 py-7 font-sans text-[#1a1a1a]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {brandName}
        </h1>
        <div className="w-8 h-[2px] bg-[#2d4a22] mt-3"></div>
      </div>

      {/* Products */}
      <div className="flex-1 flex flex-col justify-center">
        {products.map((product, i) => (
          <div key={product.id || i}>
            <div className={`w-full ${imageHeight} rounded-md overflow-hidden bg-gray-50`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-70' : ''}`} />
            </div>
            <h3 className="font-serif text-[18px] font-medium text-[#1a1a1a] capitalize mt-3 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>{product.name || 'Product Name'}</h3>
            <p className="text-[11px] text-[#999] font-medium mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            {product.description && count <= 2 && (
              <p className="text-[10px] text-[#999] mt-1.5 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.description}</p>
            )}
            {i < products.length - 1 && (
              <div className="border-b border-[#e5e5e5] my-4"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2">
        <div className="inline-block border border-[#1a1a1a] text-[#1a1a1a] text-[11px] font-medium uppercase tracking-[0.15em] px-8 py-3 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
