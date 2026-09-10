import React from 'react';

export default function ModernTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] text-white p-6 text-center">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl opacity-20 font-light tracking-widest uppercase">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col p-6 font-sans text-white relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Dark Mandala Floral Background */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] text-white opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
          <path key={angle} d="M50 50 Q 50 10 90 10 Q 90 50 50 50" transform={`rotate(${angle} 50 50)`} />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8 pt-4 z-10 flex flex-col items-center">
        
        {brandLogo && (<img src={brandLogo} alt="Logo" className="w-12 h-12 object-contain mx-auto mb-2" />)}
        <h1 className="text-[36px] text-white font-light tracking-[0.1em] uppercase leading-tight text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {brandName}
        </h1>
        <div className="w-16 h-[2px] bg-white/20 mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} gap-4 ${count >= 2 ? 'grid-rows-2' : ''} z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-[#141414] p-2 rounded-xl relative overflow-hidden border border-white/[0.08] shadow-[0_0_20px_rgba(255,255,255,0.03)] group">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
            <div className={`w-full ${count === 1 ? 'flex-1' : count === 2 ? 'h-[140px]' : count <= 4 ? 'h-[95px]' : 'h-[60px]'} bg-[#0a0a0a] rounded-lg overflow-hidden flex items-center justify-center relative`}>
              <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Flower'} className={`w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 ${!product.image ? 'opacity-30' : ''}`} />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-3 right-3 flex justify-between items-end">
              <div className="flex flex-col w-[60%]">
                <h3 className="text-[13px] font-medium text-white capitalize tracking-wide truncate" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name || 'Flower Name'}</h3>
              </div>
              <p className="text-[11px] text-white/70 font-semibold font-mono bg-white/10 px-2 py-0.5 rounded backdrop-blur-md">{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center pb-4 z-10">
        <div className="inline-block bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}



