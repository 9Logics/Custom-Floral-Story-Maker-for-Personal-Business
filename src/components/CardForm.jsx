import React from 'react';
import { Plus, Trash2, Image as ImageIcon, ArrowUp, ArrowDown, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function CardForm({ products, setProducts, updateProduct, removeProduct, addProduct, moveProduct, brandName, setBrandName, ctaText, setCtaText, template, setTemplate, brandLogo, setBrandLogo,  productsPerCard,
  setProductsPerCard,
  vintageTexture,
  setVintageTexture,
  vintageOverlay,
  setVintageOverlay
}) {
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
    <div className="w-full md:w-[400px] bg-white border-r border-[#e8e6e1] md:h-screen md:overflow-y-auto flex flex-col shadow-[4px_0_24px_rgba(45,74,34,0.03)] z-10 relative">
      <div className="p-6 border-b border-[#e8e6e1] sticky top-0 bg-white/80 backdrop-blur-xl z-20 flex items-center gap-4">
        <div className="relative group/logo flex-shrink-0 cursor-pointer active:scale-95 transition-transform duration-200 ease-out">
          <img src={brandLogo} alt={brandName} className="w-12 h-12 rounded-full object-cover shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-[#e8e6e1] bg-white" />
          <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200">
            <Upload size={16} className="text-white" />
          </div>
          <input type="file" accept="image/*" onChange={handleLogoUpload} className="absolute inset-0 opacity-0 cursor-pointer" title="Upload Brand Logo" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-serif text-[#2d4a22] font-semibold tracking-tight leading-none mb-1">Fresh Bloom</h1>
          <p className="text-[11px] text-[#8c887d] font-medium tracking-wide uppercase">Story Generator</p>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col gap-8">
        
        {/* Settings */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-[13px] font-medium text-[#4a4842] mb-1.5">Brand Name</label>
              <input 
                type="text" 
                placeholder="e.g. Flora Wholesale"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full p-3 bg-[#fcfbfa] border border-[#e8e6e1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d4a22]/20 focus:border-[#2d4a22] transition-all duration-200 ease-out text-sm text-[#2c2c2c] placeholder:text-[#a8a49c]"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#4a4842] mb-1.5">Call to Action</label>
              <input 
                type="text" 
                placeholder="e.g. Order Now / Check Rates"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className="w-full p-3 bg-[#fcfbfa] border border-[#e8e6e1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d4a22]/20 focus:border-[#2d4a22] transition-all duration-200 ease-out text-sm text-[#2c2c2c] placeholder:text-[#a8a49c]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#4a4842] mb-1.5">Products per Story Card</label>
            <div className="flex gap-2 p-1 bg-[#f5f3ef] rounded-xl border border-[#e8e6e1]/50">
              {[2, 4, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setProductsPerCard(num)}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg active:scale-[0.97] transition-all duration-200 ease-out ${
                    productsPerCard === num 
                      ? 'bg-white text-[#2d4a22] shadow-[0_2px_8px_rgba(45,74,34,0.08)] ring-1 ring-[#e8e6e1]' 
                      : 'text-[#8c887d] hover:text-[#4a4842] hover:bg-white/50'
                  }`}
                >
                  Up to {num}
                </button>
              ))}
            </div>
          </div>
          

          <div>
            <label className="block text-[13px] font-medium text-[#4a4842] mb-3">Template Style</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'classic', label: 'Classic', swatch: '#faf9f6', border: '#e8e6e1' },
                { id: 'botanical', label: 'Botanical', swatch: '#2a4a20', border: '#1e3816' },
                { id: 'modern', label: 'Modern', swatch: '#0f0f0f', border: '#2a2a2a' },
                { id: 'minimal', label: 'Minimal', swatch: '#ffffff', border: '#f0f0f0' },
                { id: 'watercolor', label: 'Watercolor', swatch: '#fdf2f0', border: '#f7dfda' },
                { id: 'editorial', label: 'Editorial', swatch: '#1a1a1a', border: '#333333' },
                { id: 'luxe', label: 'Luxe', swatch: '#f5f0e8', border: '#e3d6c1' },
                { id: 'polaroid', label: 'Polaroid', swatch: '#e8e4de', border: '#d4cfc7' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTemplate(t.id)}
                  className={`relative flex items-center gap-3 p-2.5 rounded-xl border active:scale-[0.98] transition-all duration-200 ease-out group ${
                    template === t.id 
                      ? 'bg-[#fcfbfa] border-[#2d4a22] shadow-[0_2px_12px_rgba(45,74,34,0.08)] ring-1 ring-[#2d4a22]' 
                      : 'bg-white border-[#e8e6e1] hover:border-[#dcd7cd] hover:bg-[#fcfbfa]'
                  }`}
                >
                  <div 
                    className="w-5 h-5 rounded-md shadow-inner flex-shrink-0" 
                    style={{ backgroundColor: t.swatch, border: `1px solid ${t.border}` }}
                  ></div>
                  <span className={`text-sm font-medium ${template === t.id ? 'text-[#2d4a22]' : 'text-[#5c5446] group-hover:text-[#2c2c2c]'}`}>
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-[13px] font-medium text-[#4a4842]">Products List</label>
            <span className="text-[11px] text-[#8c887d] font-medium bg-[#f5f3ef] px-2 py-0.5 rounded-full border border-[#e8e6e1]">
              {products.length} added
            </span>
          </div>
          
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-white border border-[#e8e6e1] rounded-2xl p-4 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:border-[#dcd7cd] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Image Upload Area */}
                    <div className="relative w-20 h-24 flex-shrink-0 bg-[#fcfbfa] border border-dashed border-[#dcd7cd] rounded-xl flex flex-col items-center justify-center overflow-hidden group/img hover:border-[#a3794f] transition-colors cursor-pointer active:scale-95 ease-out">
                      {product.image ? (
                        <>
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-200">
                            <ImageIcon size={16} className="text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <ImageIcon size={20} className="text-[#a8a49c] mb-1 group-hover/img:text-[#8a6541] transition-colors" />
                          <span className="text-[9px] text-[#a8a49c] group-hover/img:text-[#8a6541] font-medium transition-colors">Upload</span>
                        </>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handleImageUpload(product.id, e)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    
                    {/* Inputs */}
                    <div className="flex-1 space-y-3">
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <input 
                            type="text" 
                            placeholder="Flower Name"
                            value={product.name}
                            onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                            className="w-full p-2.5 bg-[#fcfbfa] border border-[#e8e6e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4a22]/20 focus:border-[#2d4a22] transition-all text-sm text-[#2c2c2c] placeholder:text-[#a8a49c]"
                          />
                        </div>
                        <div className="w-24 relative flex items-center">
                          <span className="absolute left-3 text-[#8c887d] text-sm pointer-events-none">₹</span>
                          <input 
                            type="text" 
                            placeholder="Rate"
                            value={product.price.replace('₹', '')}
                            onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
                            className="w-full p-2.5 pl-7 bg-[#fcfbfa] border border-[#e8e6e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4a22]/20 focus:border-[#2d4a22] transition-all text-sm text-[#2c2c2c] placeholder:text-[#a8a49c]"
                          />
                        </div>
                        <div className="w-24 relative flex items-center">
                          <select
                            value={product.unit || 'stem'}
                            onChange={(e) => updateProduct(product.id, 'unit', e.target.value)}
                            className="w-full p-2.5 bg-[#fcfbfa] border border-[#e8e6e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d4a22]/20 focus:border-[#2d4a22] transition-all text-[13px] text-[#2c2c2c] cursor-pointer"
                          >
                            <option value="stem">/ stem</option>
                            <option value="bunch">/ bunch</option>
                            <option value="piece">/ piece</option>
                            <option value="100g">/ 100g</option>
                            <option value="kg">/ kg</option>
                            <option value="box">/ box</option>
                            <option value="">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button 
                            onClick={() => moveProduct(index, -1)} 
                            disabled={index === 0}
                            className="p-1.5 text-[#a8a49c] hover:text-[#2d4a22] hover:bg-[#f5f3ef] rounded-md disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                          >
                            <ArrowUp size={16} />
                          </button>
                          <button 
                            onClick={() => moveProduct(index, 1)} 
                            disabled={index === products.length - 1}
                            className="p-1.5 text-[#a8a49c] hover:text-[#2d4a22] hover:bg-[#f5f3ef] rounded-md disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                          >
                            <ArrowDown size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeProduct(product.id)}
                          className="p-1.5 text-[#a8a49c] hover:text-red-500 hover:bg-red-50 rounded-md transition-colors active:scale-90"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <button 
            onClick={addProduct}
            className="w-full mt-4 py-3.5 border-2 border-dashed border-[#dcd7cd] rounded-xl text-[#7a7465] font-medium hover:border-[#2d4a22] hover:text-[#2d4a22] hover:bg-[#fcfbfa] active:scale-[0.98] flex items-center justify-center gap-2 transition-all duration-200 ease-out"
          >
            <Plus size={18} />
            <span>Add Another Product</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default CardForm;
