import React from 'react';

export default function WatercolorTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#fdfaf8] text-[#5c4033] p-6 text-center">
        <p style={{ fontFamily: 'Tenor Sans, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  return (
    <div className="w-full h-full bg-[#fdfaf8] flex flex-col p-6 font-sans relative overflow-hidden">
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      {/* Rich Watercolor Blobs Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[50%] bg-gradient-to-br from-[#ffd1b3]/40 to-[#ffb6c1]/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[60%] bg-gradient-to-tr from-[#e6ccff]/40 to-[#b3d9ff]/40 rounded-[60%_40%_30%_70%/50%_40%_50%_60%] blur-3xl pointer-events-none mix-blend-multiply"></div>

      {/* Header */}
      <div className="text-center mb-2 pt-1 relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className="text-[26px] text-[#4a3b32] font-medium capitalize italic leading-tight" style={{ fontFamily: 'Pinyon Script, cursive' }}>
          {brandName}
        </h1>
        </div>
        <p className="text-[10px] text-[#8a7266] tracking-[0.15em] uppercase mt-2" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>today's pricing</p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-2 grid-rows-3' : count >= 2 ? 'gap-4 grid-rows-2' : 'gap-4'} relative z-10`}>
        {products.map((product, i) => (
          <div key={product.id || i} className={`flex flex-col h-full bg-white/70 backdrop-blur-md ${count > 4 ? 'p-1' : 'p-3'} rounded-[20px] shadow-[0_10px_30px_rgba(92,64,51,0.08)] border border-white`}>
            <div className={`w-full flex-1 min-h-0 relative w-full bg-[#f5ede9] rounded-[14px] overflow-hidden flex items-center justify-center relative mb-1.5 ring-4 ring-white/50`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${!product.image ? 'opacity-40' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-1">
              <h3 className={`${count > 4 ? 'text-[13px]' : 'text-[17px]'} font-semibold text-[#4a3b32] capitalize leading-snug`} style={{ fontFamily: 'Cormorant, serif' }}>{product.name || 'Flower Name'}</h3>
              <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} text-[#8a6b57] font-bold ${count > 4 ? 'mt-0' : 'mt-1'} tracking-wide bg-white/50 inline-block self-center px-3 py-0.5 rounded-full ${count > 4 ? 'mt-0.5' : 'mt-1.5'} shadow-sm`} style={{ fontFamily: 'Tenor Sans, sans-serif' }}>{product.price ? `₹${product.price.replace('₹', '')}${product.unit ? ' ' + product.unit : ''}` : 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-2 relative z-10">
        <div className="inline-block bg-[#4a3b32] text-[#fdfaf8] text-[12px] font-semibold tracking-wider px-10 py-3.5 rounded-full shadow-[0_8px_20px_rgba(74,59,50,0.2)] capitalize" style={{ fontFamily: 'Tenor Sans, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}





