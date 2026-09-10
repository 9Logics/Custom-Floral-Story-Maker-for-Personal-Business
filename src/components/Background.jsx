import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fdfdfc]">
      {/* Soft abstract blobs for a floral, fresh feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-brand-primary/5 blur-[120px]" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[40%] rounded-full bg-[#e28743]/5 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-brand-secondary/40 blur-[100px]" />

      {/* Decorative Floral SVG (Subtle Outline) */}
      <div className="absolute bottom-10 right-10 opacity-[0.03] transform rotate-12 scale-150">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
          <path d="M12 22c-4-4-4-10 0-14 4 4 4 10 0 14z" />
          <path d="M12 8C8 4 2 4 2 8c0 4 6 10 10 14" />
          <path d="M12 8c4-4 10-4 10 0 0 4-6 10-10 14" />
          <path d="M12 8V2" />
          <path d="M12 2C10 2 8 4 8 6" />
          <path d="M12 2c2 0 4 2 4 4" />
        </svg>
      </div>
      
      {/* Subtle Noise Texture for a premium feel */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
