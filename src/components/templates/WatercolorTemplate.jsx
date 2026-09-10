import React from 'react';

export default function WatercolorTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#fdf2f0] text-[#5c4033] p-6 text-center">
        <p style={{ fontFamily: 'Lora, serif' }} className="italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  /* Decorative flower SVG */
  const FlowerSVG = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#c8a89b" strokeWidth="1" className={className} style={{ opacity: 0.6 }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2c-1 3-1 5 0 7" />
      <path d="M12 22c1-3 1-5 0-7" />
      <path d="M2 12c3-1 5-1 7 0" />
      <path d="M22 12c-3 1-5 1-7 0" />
      <path d="M5.6 5.6c1.8 1.8 3.2 3 4.5 3.5" />
      <path d="M18.4 18.4c-1.8-1.8-3.2-3-4.5-3.5" />
      <path d="M5.6 18.4c1.8-1.8 3.2-3 4.5-3.5" />
      <path d="M18.4 5.6c-1.8 1.8-3.2 3-4.5 3.5" />
    </svg>
  );

  return (
    <div className="w-full h-full bg-[#fdf2f0] flex flex-col p-6 font-sans text-[#5c4033] relative overflow-hidden">
      {/* Watercolor Washes */}
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full blur-[80px]" style={{ backgroundColor: 'rgba(232, 190, 172, 0.25)' }}></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[280px] h-[280px] rounded-full blur-[80px]" style={{ backgroundColor: 'rgba(200, 168, 155, 0.20)' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] rounded-full blur-[60px]" style={{ backgroundColor: 'rgba(220, 200, 188, 0.15)' }}></div>

      {/* Header */}
      <div className="text-center mb-5 pt-3 z-10">
        <FlowerSVG size={24} className="mx-auto mb-2" />
        <h1 className="text-[36px] text-[#5c4033] font-medium capitalize italic leading-tight" style={{ fontFamily: 'Lora, serif' }}>
          {brandName}
        </h1>
        <p className="text-[10px] text-[#9e8578] tracking-[0.1em] lowercase mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>fresh flowers delivered</p>
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-8 h-px bg-[#c8a89b]/40"></div>
          <FlowerSVG size={12} />
          <div className="w-8 h-px bg-[#c8a89b]/40"></div>
        </div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-3 ${count >= 2 ? 'grid-rows-2' : ''} z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full p-2.5 rounded-2xl border shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)', borderColor: 'rgba(200, 168, 155, 0.20)', backdropFilter: 'blur(4px)' }}>
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[125px]' : count <= 4 ? 'h-[90px]' : 'h-[50px]'} rounded-xl overflow-hidden bg-[#f5ebe7]`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-70' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1 pb-1 mt-2">
              <h3 className="text-[14px] font-semibold text-[#5c4033] capitalize" style={{ fontFamily: 'Lora, serif' }}>{product.name || 'Product Name'}</h3>
              <p className="text-[11px] text-[#b07a5b] font-medium mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 text-center z-10 pb-3">
        <div className="inline-block bg-[#5c4033] text-[#fdf2f0] text-[12px] font-medium px-8 py-2.5 rounded-full shadow-sm capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
