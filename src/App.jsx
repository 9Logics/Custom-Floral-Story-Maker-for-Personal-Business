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
  const [brandLogo, setBrandLogo] = useState(() => getStorage('fb_brandLogo_v2', '/logo.png'));
  const [productsPerCard, setProductsPerCard] = useState(() => getStorage('fb_productsPerCard_v2', 4));

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('fb_products_v2', JSON.stringify(products));
    localStorage.setItem('fb_brandName_v3', JSON.stringify(brandName));
    localStorage.setItem('fb_ctaText_v2', JSON.stringify(ctaText));
    localStorage.setItem('fb_template_v2', JSON.stringify(template));
    localStorage.setItem('fb_brandLogo_v2', JSON.stringify(brandLogo));
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
    <div className="min-h-screen flex flex-col md:flex-row relative z-0">
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
      />

      {/* Right Side - Previews */}
      <div id="preview-pane" className="w-full md:w-2/3 p-4 md:p-8 bg-transparent md:h-screen md:overflow-y-auto flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-8 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white/50 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800">Preview</h2>
            <p className="text-sm text-gray-500">{productPages.length} {productPages.length === 1 ? 'story card' : 'story cards'} generated</p>
          </div>
          <button 
            onClick={exportCards}
            disabled={products.length === 0 || isExporting}
            className="interactive flex items-center bg-brand-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm w-full sm:w-auto justify-center transition-all"
          >
            {isExporting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Exporting...
              </span>
            ) : (
              <span className="flex items-center"><Download size={18} className="mr-2" /> Export All Cards</span>
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {productPages.map((pageProducts, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="mb-2 text-[11px] text-gray-400 font-semibold tracking-[0.05em] uppercase">Story {index + 1}</div>
              <div className="shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5 hover:scale-[1.02] transition-transform duration-300 ease-out">
                <CardPreview 
                  products={pageProducts} 
                  brandName={brandName} 
                  ctaText={ctaText} 
                  brandLogo={brandLogo}
                  template={template} 
                />
              </div>
            </motion.div>
          ))}</div>
      </div>
    </div>
  );
}

export default App;
