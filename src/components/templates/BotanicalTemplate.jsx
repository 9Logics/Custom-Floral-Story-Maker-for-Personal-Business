import React from 'react';

export default function BotanicalTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#2a4a20] text-[#f4eae1] p-6 text-center">
        <p className="font-serif italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#2a4a20] flex flex-col p-6 font-sans text-[#f4eae1] relative overflow-hidden">
      {/* Organic Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3d6a30] rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3618] rounded-full blur-[80px] opacity-50 translate-y-1/4 -translate-x-1/4"></div>

      {/* Header */}
      <div className="text-center mb-6 pt-2 z-10">
        <h1 className="font-serif text-[44px] text-[#f4eae1] font-normal drop-shadow-sm capitalize italic leading-tight">
          {brandName}
        </h1>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-3 ${count >= 2 ? 'grid-rows-2' : ''} z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-white/[0.08] backdrop-blur-lg p-2.5 rounded-2xl border border-white/[0.12] shadow-lg">
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[130px]' : 'h-[95px]'} bg-white/10 rounded-xl overflow-hidden flex items-center justify-center relative mb-2`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover brightness-90 ${!product.image ? 'opacity-70' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1 pb-1">
              <h3 className="font-serif text-[16px] font-medium text-white capitalize">{product.name || 'Product Name'}</h3>
              <p className="text-[11px] text-[#e8a85c] font-medium mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center z-10 pb-4">
        <div className="inline-block bg-[#e8a85c] text-[#1e3618] text-[13px] font-semibold px-8 py-3 rounded-full shadow-lg capitalize border border-[#e8a85c]/30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
