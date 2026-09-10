import React from 'react';

export default function PolaroidTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#e8e4de] text-[#3d3630] p-6 text-center relative overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <p style={{ fontFamily: 'Cormorant, serif' }} className="italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  // Rotation angles for a scattered look
  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];

  return (
    <div className="w-full h-full bg-[#e8e4de] flex flex-col p-5 font-sans text-[#3d3630] relative overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Header */}
      <div className="text-center mb-6 pt-3 relative z-10">
        <h1 className="text-[30px] text-[#3d3630] font-medium italic capitalize leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
          {brandName}
        </h1>
        <p className="text-[9px] text-[#8b7e6b] tracking-[0.08em] lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          curated with care
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-4 ${count >= 2 ? 'grid-rows-2' : ''} relative z-10 p-2`}>
        {products.map((product, i) => (
          <div key={product.id || i} className={`flex flex-col bg-white p-2 pb-6 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)] relative ${rotations[i % rotations.length]}`}>
            {/* Tape Accent */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#c9a87c]/25 -rotate-3 rounded-sm z-20"></div>

            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : 'h-[100px]'} rounded-none overflow-hidden bg-gray-100`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-80' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1 mt-2">
              <h3 className="text-[14px] font-semibold text-[#3d3630] capitalize truncate" style={{ fontFamily: 'Cormorant, serif' }}>{product.name || 'Product Name'}</h3>
              <p className="text-[10px] text-[#8b7e6b] font-medium mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center pb-2 relative z-10">
        <div className="inline-block bg-[#3d3630] text-[#f5f0e8] text-[12px] font-medium px-8 py-2.5 rounded-full capitalize shadow-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
