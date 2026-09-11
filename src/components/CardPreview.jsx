import React from 'react';
import ClassicTemplate from './templates/ClassicTemplate';
import BotanicalTemplate from './templates/BotanicalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import WatercolorTemplate from './templates/WatercolorTemplate';
import ListTemplate from './templates/ListTemplate';
import EditorialTemplate from './templates/EditorialTemplate';
import LuxeTemplate from './templates/LuxeTemplate';
import PolaroidTemplate from './templates/PolaroidTemplate';

export default function CardPreview({ products, brandName, ctaText, template, brandLogo, vintageTexture, vintageOverlay }) {
  const TemplateComponent = {
    'classic': ClassicTemplate,
    'botanical': BotanicalTemplate,
    'modern': ModernTemplate,
    'minimal': MinimalTemplate,
    'watercolor': WatercolorTemplate,
    'editorial': EditorialTemplate,
    'luxe': LuxeTemplate,
    'polaroid': PolaroidTemplate,
  }[template] || ClassicTemplate;

  const formattedProducts = products.map(p => {
    let price = p.price || '';
    if (price && !price.startsWith('₹') && !price.toLowerCase().includes('rs')) {
      price = '₹' + price.trim();
    }
    return { ...p, price };
  });

  return (
    <div className="relative overflow-hidden shadow-2xl rounded-2xl bg-white isolate" style={{ width: '270px', height: '480px' }}>
      <div 
        className="story-card-export bg-white flex flex-col absolute top-0 left-0 origin-top-left"
        style={{
          width: '360px',
          height: '640px',
          transform: 'scale(0.75)',
        }}
      >
        <TemplateComponent 
          products={formattedProducts} 
          brandName={brandName} 
          ctaText={ctaText} 
          brandLogo={brandLogo} 
          vintageTexture={vintageTexture}
          vintageOverlay={vintageOverlay}
        />
      </div>
    </div>
  );
}
