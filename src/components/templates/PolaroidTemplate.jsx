import React from 'react';

export default function PolaroidTemplate({ products, brandName, ctaText, brandLogo, vintageTexture, vintageOverlay }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#e8e4de] text-[#4a4a4a] p-6 text-center">
        <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xl opacity-20 font-light">Add products</p>
      </div>
    );
  }

  const gridClass = count === 1 ? 'grid-cols-1' : 
                    count === 2 ? 'grid-cols-1' : 
                    'grid-cols-2';

  const rotations = ['-rotate-2', 'rotate-3', 'rotate-1', '-rotate-3', 'rotate-2', '-rotate-1'];

  return (
    <div className="w-full h-full bg-[#dfdcd5] flex flex-col p-6 font-sans text-[#2c2c2c] relative overflow-hidden" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.08\'/%3E%3C/svg%3E")' }}>
      {vintageTexture && (<img src={vintageTexture} alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply z-0 pointer-events-none" />)}
      {vintageOverlay && (<img src={vintageOverlay} alt="Overlay" className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none" />)}
      
      {/* Scattered Pressed Flowers & Tape Accents */}
      <div className="absolute top-20 right-8 w-12 h-16 opacity-30 rotate-12 bg-[#a3907c] shadow-sm flex items-center justify-center rounded-full mix-blend-multiply blur-[1px]"></div>
      <div className="absolute bottom-32 left-4 w-10 h-10 opacity-20 -rotate-12 bg-[#9c7a6e] shadow-sm flex items-center justify-center rounded-full mix-blend-multiply blur-[1px]"></div>
      <div className="absolute top-40 left-12 w-16 h-4 bg-white/40 -rotate-6 backdrop-blur-sm shadow-sm z-20"></div>

      {/* Header */}
      <div className="text-center mb-2 pt-1 relative z-10">
        
        <div className={`flex items-center justify-center gap-3`}>
          {brandLogo && (<img src={brandLogo} alt="Logo" className="w-7 h-7 object-contain shrink-0" />)}
          <h1 className="text-[32px] text-[#2c2c2c] font-medium capitalize leading-tight" style={{ fontFamily: 'Nothing You Could Do, cursive' }}>
          {brandName}
        </h1>
        </div>
        <p className={`text-[10px] text-[#8b7e6b] tracking-[0.1em] uppercase font-bold ${count > 4 ? 'mt-0' : 'mt-1'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          today's pricing
        </p>
      </div>

      {/* Grid */}
      <div className={`flex-1 grid ${gridClass} ${count > 4 ? 'gap-2 grid-rows-3' : count >= 2 ? 'gap-3 grid-rows-2' : 'gap-3'} relative z-10 p-2`}>
        {products.map((product, i) => (
          <div key={product.id || i} className={`flex flex-col h-full bg-[#faf9f6] ${count > 4 ? 'p-1.5 pb-3' : 'p-2.5 pb-6'} shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${rotations[i % rotations.length]}`}>
            <div className={`w-full flex-1 min-h-0 relative w-full bg-[#e8e4de] flex items-center justify-center relative ${count > 4 ? 'mb-1' : 'mb-3'} shadow-inner`}>
              <img src={product.image || './placeholder.jpg'} alt={product.name || 'Flower'} className={`absolute inset-0 w-full h-full object-cover grayscale-[0.2] sepia-[0.1] contrast-[1.1] ${!product.image ? 'opacity-50' : ''}`} />
            </div>
            <div className="flex flex-col text-center px-2">
              <h3 className={`${count > 4 ? 'text-[14px]' : 'text-[20px]'} font-bold truncate text-[#2c2a27] capitalize`} style={{ fontFamily: 'Nothing You Could Do, cursive' }}>{product.name || 'Flower Name'}</h3>
              <p className={`${count > 4 ? 'text-[11px]' : 'text-[14px]'} text-[#524433] font-bold tracking-wide`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price ? `₹${product.price.replace('₹', '')}${product.unit ? ' ' + product.unit : ''}` : 'Price'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-2 text-center pb-2 relative z-10">
        <div className="inline-block text-[#2c2c2c] border-b-2 border-[#2c2c2c] text-[13px] font-bold tracking-[0.15em] uppercase px-4 py-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}




