import React from 'react';
import { Plus, Trash2, Image as ImageIcon, ArrowUp, ArrowDown, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function CardForm({ products, setProducts, updateProduct, removeProduct, addProduct, moveProduct, brandName, setBrandName, ctaText, setCtaText, template, setTemplate, brandLogo, setBrandLogo, productsPerCard, setProductsPerCard }) {
  const handleImageUpload = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        updateProduct(id, 'image', upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setBrandLogo(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-1/3 bg-white/70 backdrop-blur-xl border-r border-white/50 md:h-screen md:overflow-y-auto flex flex-col shadow-2xl z-10 relative">
      <div className="p-5 border-b border-white/50 sticky top-0 bg-white/50 backdrop-blur-md z-20 flex items-center gap-3">
        <div className="relative group/logo">
          <img src={brandLogo} alt={brandName} className="w-10 h-10 rounded-full object-cover shadow-sm border border-brand-secondary bg-white" />
          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity cursor-pointer">
            <Upload size={14} className="text-white" />
          </div>
          <input type="file" accept="image/*" onChange={handleLogoUpload} className="absolute inset-0 opacity-0 cursor-pointer" title="Upload Brand Logo" />
        </div>
        <h1 className="text-2xl font-serif text-brand-primary font-semibold tracking-tight">Fresh Bloom Setup</h1>
      </div>
      
      <div className="p-6 flex-1 flex flex-col gap-8">
        
        {/* Settings */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
              <input 
                type="text" 
                placeholder="e.g. Flora Wholesale"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Call to Action (CTA)</label>
              <input 
                type="text" 
                placeholder="e.g. Order Now / Check Rates"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-shadow"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Products per Story Card</label>
            <div className="flex gap-2">
              {[2, 4, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setProductsPerCard(num)}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg interactive transition-all ${
                    productsPerCard === num 
                      ? 'bg-brand-primary text-white shadow-md' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Up to {num}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Template Style</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'classic', label: 'Classic', swatch: '#faf9f6' },
                { id: 'botanical', label: 'Botanical', swatch: '#2a4a20' },
                { id: 'modern', label: 'Modern', swatch: '#0f0f0f' },
                { id: 'minimal', label: 'Minimal', swatch: '#ffffff' },
                { id: 'watercolor', label: 'Watercolor', swatch: '#fdf2f0' },
                { id: 'editorial', label: 'Editorial', swatch: '#1a1a1a' },
                { id: 'luxe', label: 'Luxe', swatch: '#f5f0e8' },
                { id: 'polaroid', label: 'Polaroid', swatch: '#e8e4de' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={`flex items-center justify-center capitalize py-2.5 px-3 text-xs font-medium rounded-lg interactive transition-all ${
                    template === t.id 
                      ? 'ring-2 ring-brand-primary ring-offset-2 bg-white shadow-md text-brand-primary' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="w-3 h-3 rounded-full mr-2 shadow-sm border border-black/10 shrink-0" style={{ backgroundColor: t.swatch }}></span>
                  <span className="truncate">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Products */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                <path d="M12 22c-4-4-4-10 0-14 4 4 4 10 0 14z" />
                <path d="M12 8C8 4 2 4 2 8c0 4 6 10 10 14" />
                <path d="M12 8c4-4 10-4 10 0 0 4-6 10-10 14" />
                <path d="M12 8V2" />
              </svg>
              Products ({products.length})
            </h2>
            <button 
              onClick={addProduct}
              className="flex items-center text-sm text-brand-primary font-medium hover:text-brand-primary/80 interactive py-1 px-2 rounded-md hover:bg-brand-primary/10"
            >
              <Plus size={16} className="mr-1" /> Add Product
            </button>
          </div>

          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow relative group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gray-400">Product {index + 1}</span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => moveProduct(index, 'up')}
                        disabled={index === 0}
                        className="text-gray-400 hover:text-brand-primary interactive p-1 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move Up"
                      >
                        <ArrowUp size={16} />
                      </button>
                      <button 
                        onClick={() => moveProduct(index, 'down')}
                        disabled={index === products.length - 1}
                        className="text-gray-400 hover:text-brand-primary interactive p-1 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move Down"
                      >
                        <ArrowDown size={16} />
                      </button>
                      <div className="w-px h-4 bg-gray-200 mx-1"></div>
                      <button 
                        onClick={() => removeProduct(product.id)}
                        className="text-gray-400 hover:text-red-500 interactive p-1 rounded hover:bg-red-50"
                        title="Remove Product"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group/img cursor-pointer interactive hover:border-brand-primary/50">
                      {product.image ? (
                        <>
                          <img src={product.image} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <ImageIcon size={20} className="text-white" />
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center">
                          <img src="/placeholder.jpg" alt="placeholder" className="w-full h-full object-cover absolute inset-0 opacity-40 mix-blend-overlay" />
                          <div className="relative z-10 text-gray-500 flex flex-col items-center group-hover/img:text-brand-primary transition-colors bg-white/70 backdrop-blur-sm p-1 rounded-md">
                            <ImageIcon size={20} className="mb-0.5" />
                            <span className="text-[10px] font-medium">Upload</span>
                          </div>
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handleImageUpload(product.id, e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <input 
                        type="text" 
                        placeholder="Flower Name (e.g., Marigold)" 
                        value={product.name}
                        onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-shadow"
                      />
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
                        <input 
                          type="text" 
                          placeholder="Price" 
                          value={product.price ? product.price.replace(/^₹\s*/, '') : ''}
                          onChange={(e) => updateProduct(product.id, 'price', e.target.value.replace(/^₹\s*/, ''))}
                          className="w-full pl-6 p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <textarea 
                      placeholder="Quantity/Weight (e.g., per kg or string length)" 
                      value={product.description}
                      onChange={(e) => updateProduct(product.id, 'description', e.target.value)}
                      className="w-full p-2 border border-gray-200 rounded-md text-sm resize-none h-16 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-shadow"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {products.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-10 text-gray-500 border-2 border-dashed border-gray-200 rounded-xl"
              >
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                  <ImageIcon size={20} className="text-gray-400" />
                </div>
                <p className="text-sm font-medium">No products added</p>
                <p className="text-xs text-gray-400 mt-1">Add a product to generate a story card</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardForm;
