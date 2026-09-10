import ClassicTemplate from './templates/ClassicTemplate';
import BotanicalTemplate from './templates/BotanicalTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import WatercolorTemplate from './templates/WatercolorTemplate';
import EditorialTemplate from './templates/EditorialTemplate';
import LuxeTemplate from './templates/LuxeTemplate';
import PolaroidTemplate from './templates/PolaroidTemplate';

export default function CardPreview({ products, brandName, ctaText, template }) {
  // A wrapper that maintains the exact 9:16 aspect ratio (1080x1920 scaled down)
  // 1080/1920 = 9/16 = 0.5625
  // We'll set a fixed width for preview, e.g., 360px by 640px
  
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
    // Format price if it doesn't already start with ₹ or Rs
    if (price && !price.startsWith('₹') && !price.toLowerCase().includes('rs')) {
      price = '₹' + price.trim();
    }
    return { ...p, price };
  });

  return (
    <div className="relative" style={{ width: '270px', height: '480px' }}>
      <div 
        className="story-card-export bg-white flex flex-col absolute top-0 left-0 origin-top-left"
        style={{
          width: '360px',
          height: '640px',
          transform: 'scale(0.75)',
        }}
      >
        <TemplateComponent products={formattedProducts} brandName={brandName} ctaText={ctaText} brandLogo={brandLogo} />
      </div>
    </div>
  );
}
