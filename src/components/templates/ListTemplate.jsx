import React from 'react';

export default function ListTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f7f5f2] text-[#4a4a4a] p-6 text-center">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  // Use the first product's image as a blurred background to mimic the vibe
  const bgImage = products[0]?.image || './placeholder.jpg';

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full flex flex-col p-5 relative overflow-hidden font-sans bg-[#f7f5f2]">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-[40px] opacity-60 scale-110 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      {/* Gradient Overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f2]/80 via-[#f7f5f2]/60 to-[#f7f5f2]/90 z-0 pointer-events-none"></div>

      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none" />)}

      {/* Header */}
      <div className="text-center mb-4 pt-4 relative z-10 flex flex-col items-center">
        <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center justify-center gap-3 mb-2">
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-6 h-6 object-contain shrink-0" />)}
          <h1 className="text-[32px] text-[#2c2a27] font-bold leading-none tracking-tight" style={{ fontFamily: 'Nothing You Could Do, cursive' }}>
            {brandName}
          </h1>
        </div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-3 content-start relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="bg-white rounded-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white/50 p-1.5 flex items-center h-[95px]">
            {/* Image Left */}
            <div className="h-full aspect-square relative shrink-0 bg-[#f0ede8] rounded-lg overflow-hidden">
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover ${!product.image ? 'opacity-80' : ''}`} />
            </div>
            
            {/* Text Right */}
            <div className="flex-1 flex flex-col justify-center px-2.5 overflow-hidden">
              <h3 className="text-[12px] font-bold text-[#2c2a27] uppercase leading-tight line-clamp-2 tracking-wide mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {product.name || 'Flower Name'}
              </h3>
              <p className="text-[12px] text-[#5c5446] font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {product.price ? `₹${product.price.replace('₹', '')}` : 'Price'}
                {product.unit && product.unit !== 'none' ? ` / ${product.unit}` : ''}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {ctaText && (
        <div className="mt-3 text-center pb-2 relative z-10">
          <div className="inline-block bg-white/90 backdrop-blur-md text-[#2c2a27] text-[13px] font-bold tracking-[0.1em] px-8 py-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {ctaText}
          </div>
        </div>
      )}
    </div>
  );
}
