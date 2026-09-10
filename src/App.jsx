import { useState, useEffect } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import { Download, LayoutTemplate } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import Background from './components/Background';

// Helper to safely parse local storage
const getStorage = (key, defaultValue) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

function App() {
  const [products, setProducts] = useState(() => getStorage('fb_products_v2', [
    { id: '1', name: '', price: '', description: '', image: '' }
  ]));
  const [brandName, setBrandName] = useState(() => getStorage('fb_brandName_v3', 'Fresh Bloom'));
  const [ctaText, setCtaText] = useState(() => getStorage('fb_ctaText_v2', 'Order Now'));
  const [template, setTemplate] = useState(() => getStorage('fb_template_v2', 'classic'));
  const [brandLogo, setBrandLogo] = useState(() => getStorage('fb_brandLogo_v3', '/brand_logo.png'));
  const [productsPerCard, setProductsPerCard] = useState(() => getStorage('fb_productsPerCard_v2', 4));
  const [vintageTexture, setVintageTexture] = useState('');
  const [vintageOverlay, setVintageOverlay] = useState('');

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('fb_products_v2', JSON.stringify(products));
    localStorage.setItem('fb_brandName_v3', JSON.stringify(brandName));
    localStorage.setItem('fb_ctaText_v2', JSON.stringify(ctaText));
    localStorage.setItem('fb_template_v2', JSON.stringify(template));
    localStorage.setItem('fb_brandLogo_v3', JSON.stringify(brandLogo));
    localStorage.setItem('fb_productsPerCard_v2', JSON.stringify(productsPerCard));
  }, [products, brandName, ctaText, template, brandLogo, productsPerCard]);

  const addProduct = () => {
    setProducts([...products, { id: uuidv4(), name: '', price: '', description: '', image: '' }]);
  };

  const updateProduct = (id, field, value) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const moveProduct = (index, direction) => {
    if (direction === 'up' && index > 0) {
      const newProducts = [...products];
      [newProducts[index - 1], newProducts[index]] = [newProducts[index], newProducts[index - 1]];
      setProducts(newProducts);
    } else if (direction === 'down' && index < products.length - 1) {
      const newProducts = [...products];
      [newProducts[index + 1], newProducts[index]] = [newProducts[index], newProducts[index + 1]];
      setProducts(newProducts);
    }
  };

  const [isExporting, setIsExporting] = useState(false);

  const exportCards = async () => {
    try {
      setIsExporting(true);
      window.scrollTo(0, 0);
      const rightPane = document.getElementById('preview-pane');
      if (rightPane) rightPane.scrollTo(0, 0);
      
      // Select all story cards
      const cards = document.querySelectorAll('.story-card-export');
      
      // Small delay to ensure scroll has finished
      await new Promise(resolve => setTimeout(resolve, 100));

      for (let i = 0; i < cards.length; i++) {
        // html-to-image naturally supports all CSS including oklch() because it uses SVG foreignObject
        const blob = await htmlToImage.toBlob(cards[i], {
          pixelRatio: 3, // 360 * 3 = 1080px
          style: {
            transform: 'none' // Remove the preview scale so it exports at full size
          }
        });
        
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `fresh-bloom-story-${i + 1}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        } else {
          console.error("Export generated an empty blob for card", i);
        }
      }
    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export cards. See console for details.");
    } finally {
      setIsExporting(false);
    }
  };

  // Chunk products into groups of max size
  const chunkProducts = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const productPages = chunkProducts(products, productsPerCard);

  return (
    <div className="h-screen flex flex-col md:flex-row relative z-0 bg-[#fdfdfc] text-[#2c2c2c] overflow-hidden">
      <Background />
      <CardForm 
        products={products} 
        setProducts={setProducts}
        addProduct={addProduct} 
        updateProduct={updateProduct} 
        removeProduct={removeProduct} 
        moveProduct={moveProduct}
        brandName={brandName}
        setBrandName={setBrandName}
        ctaText={ctaText}
        setCtaText={setCtaText}
        template={template}
        setTemplate={setTemplate}
        brandLogo={brandLogo}
        setBrandLogo={setBrandLogo}
        productsPerCard={productsPerCard}
        setProductsPerCard={setProductsPerCard}
        vintageTexture={vintageTexture}
        setVintageTexture={setVintageTexture}
        vintageOverlay={vintageOverlay}
        setVintageOverlay={setVintageOverlay}
      />

      {/* Right Side - Previews */}
      <div id="preview-pane" className="flex-1 overflow-y-auto p-8 md:p-12 relative flex flex-col items-center custom-scrollbar scroll-smooth">
        
        {/* Floating Export Button */}
        <div className="sticky top-6 z-50 mb-10 self-end">
          <button 
            onClick={exportCards}
            disabled={isExporting}
            className="group relative inline-flex items-center gap-2 bg-[#2d4a22] text-white px-6 py-3 rounded-full font-medium shadow-[0_8px_30px_rgba(45,74,34,0.25)] hover:shadow-[0_12px_40px_rgba(45,74,34,0.35)] active:scale-95 transition-all duration-300 ease-out overflow-hidden disabled:opacity-70 disabled:active:scale-100"
          >
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
            
            {isExporting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                <span>Export {productPages.length} Story Card{productPages.length !== 1 ? 's' : ''}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col gap-16 pb-32 max-w-4xl w-full items-center">
          {productPages.map((pageProducts, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="mb-4 text-[12px] text-[#8c887d] font-semibold tracking-widest uppercase flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#dcd7cd]"></div>
                Story {index + 1}
                <div className="w-12 h-[1px] bg-[#dcd7cd]"></div>
              </div>
              <div className="shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500 ease-out ring-1 ring-[#e8e6e1]/50">
                <CardPreview 
                  products={pageProducts} 
                  brandName={brandName} 
                  ctaText={ctaText} 
                  brandLogo={brandLogo}
                  template={template} 
                  vintageTexture={vintageTexture}
                  vintageOverlay={vintageOverlay}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
