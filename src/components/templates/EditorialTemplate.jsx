import React from 'react';

export default function EditorialTemplate({ products, brandName, ctaText }) {
  const count = products.length;
  
  if (count === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] text-[#f5f0e8] p-6 text-center">
        <p style={{ fontFamily: 'Playfair Display, serif' }} className="italic text-xl opacity-40">Add products to see preview</p>
      </div>
    );
  }

  const hero = products[0];
  const rest = products.slice(1);

  return (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col p-5 font-sans text-[#f5f0e8] relative">
      {/* Gold Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a87c]"></div>

      {/* Header */}
      <div className="mt-4 mb-4">
        <h1 className="text-[14px] font-medium uppercase tracking-[0.2em] text-[#f5f0e8]" style={{ fontFamily: 'Playfair Display, serif' }}>
          {brandName}
        </h1>
        <p className="text-[9px] font-normal uppercase tracking-[0.15em] text-[#c9a87c]/60 mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Curated Collection
        </p>
      </div>

      {/* Hero Product */}
      <div className="mb-3">
        <div className={`w-full ${count === 1 ? 'h-[320px]' : count === 2 ? 'h-[240px]' : 'h-[200px]'} rounded-lg overflow-hidden bg-[#2a2a2a]`}>
          <img src={hero.image || '/placeholder.jpg'} alt={hero.name || 'Product'} className={`w-full h-full object-cover ${!hero.image ? 'opacity-60' : ''}`} />
        </div>
        <div className="flex justify-between items-baseline mt-3">
          <h3 className="text-[26px] font-medium capitalize italic text-[#f5f0e8] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{hero.name || 'Product Name'}</h3>
          <p className="text-[10px] text-[#c9a87c] font-medium ml-3 shrink-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>{hero.price || 'Price'}</p>
        </div>
        {hero.description && count <= 2 && (
          <p className="text-[10px] text-[#f5f0e8]/60 mt-1.5 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{hero.description}</p>
        )}
      </div>

      {/* Remaining Products */}
      {rest.length > 0 && (
        <>
          <div className="border-b border-[#c9a87c]/15 my-3"></div>
          {rest.length === 1 ? (
            /* Single remaining product: thumbnail + text side-by-side */
            <div className="flex items-center gap-3">
              <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-[#2a2a2a] shrink-0">
                <img src={rest[0].image || '/placeholder.jpg'} alt={rest[0].name || 'Product'} className={`w-full h-full object-cover ${!rest[0].image ? 'opacity-60' : ''}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] font-medium capitalize text-[#f5f0e8]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{rest[0].name || 'Product Name'}</h3>
                <p className="text-[10px] text-[#c9a87c] font-medium mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{rest[0].price || 'Price'}</p>
              </div>
            </div>
          ) : (
            /* Multiple remaining: horizontal strip of small thumbnails */
            <div className={`grid gap-3 ${rest.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
              {rest.map((product, i) => (
                <div key={product.id || i} className="flex flex-col items-center">
                  <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-[#2a2a2a]">
                    <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} className={`w-full h-full object-cover ${!product.image ? 'opacity-60' : ''}`} />
                  </div>
                  <h3 className="text-[11px] font-medium capitalize text-[#f5f0e8] mt-2 text-center truncate w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name || 'Product'}</h3>
                  <p className="text-[10px] text-[#c9a87c] font-medium mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.price || 'Price'}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Footer */}
      <div className="mt-4 text-center pb-2">
        <div className="w-full bg-[#c9a87c] text-[#1a1a1a] text-[11px] font-semibold py-3 capitalize rounded-md" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {ctaText || 'Order Now'}
        </div>
      </div>
    </div>
  );
}
