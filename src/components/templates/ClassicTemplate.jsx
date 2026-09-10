import React from 'react';

export default function ClassicTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#faf9f6] text-[#2d4a22] p-6 text-center">
        <p className="font-serif italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#faf9f6] flex flex-col p-6 font-sans text-[#1f2937]">
      {/* Header */}
      <div className="text-center mb-6 pt-4">
        <h1 className="font-serif text-[40px] text-[#2d4a22] font-medium capitalize leading-tight">
          {brandName}
        </h1>
        <div className="w-12 h-px bg-[#2d4a22]/20 mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-4 ${count >= 2 ? 'grid-rows-2' : ''}`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] rounded-xl border border-[#f0ede8]">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : count <= 4 ? 'h-[100px]' : 'h-[60px]'} bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center relative mb-3`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-80' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1">
              <h3 className="font-serif text-[15px] font-semibold truncate text-[#2d4a22] capitalize">{product.name || 'Product Name'}</h3>
              <p className="text-[12px] text-[#8b7355] font-medium mt-1">{product.price || 'Price'}</p>
              {product.description && count <= 2 && (
                <p className="text-[10px] text-[#a89f91] mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2">
        <div className="inline-block bg-[#2d4a22] text-white text-[14px] font-medium px-8 py-2.5 rounded-full shadow-sm capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
