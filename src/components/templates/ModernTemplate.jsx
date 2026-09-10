import React from 'react';

export default function ModernTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] text-white p-6 text-center">
        <p style={{ fontFamily: 'Outfit, sans-serif' }} className="text-xl opacity-20 font-light tracking-widest uppercase">Add products</p>
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
      <div className="mb-4 pt-2 z-10 flex flex-col items-center">
        
        <div className={`flex items-center justify-center ga${count > 4 ? 'p-1' : 'p-3'}`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-9 h-9 object-contain shrink-0" />)}
          <h1 className="text-[22px] text-white font-light tracking-[0.1em] uppercase leading-tight text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {brandName}
        </h1>
        </div>
        <div className="w-16 h-[2px] bg-white/20 mt-2 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-2 grid-rows-3' : count >= 2 ? 'gap-4 grid-rows-2' : 'gap-4'} z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className="flex flex-col h-full bg-[#141414] p-2 rounded-xl relative overflow-hidden border border-white/[0.08] shadow-[0_0_20px_rgba(255,255,255,0.03)] group">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
            <div className={`w-full flex-1 min-h-0 relative bg-[#0a0a0a] rounded-lg overflow-hidden flex items-center justify-center relative`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 ${!product.image ? 'opacity-30' : ''}`} />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-3 right-3 flex justify-between items-end">
              <div className="flex flex-col w-[55%]">
                <h3 className={`${count > 4 ? 'text-[13px]' : 'text-[17px]'} font-bold truncate text-white capitalize tracking-tight`} style={{ fontFamily: 'Outfit, sans-serif' }}>{product.name || 'Flower Name'}</h3>
              </div>
              <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} font-bold font-mono bg-[#e8c85c] text-[#141414] px-2.5 py-0.5 rounded shadow-sm`}>{product.price || 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-4 z-10">
        <div className="inline-block bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





