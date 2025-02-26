'use client'

import React from 'react';

export default function BackgroundBase ({ background_img, children, background_size, isRepeat = false}) {
  return (
    <div className="w-full z-0">
      <div 
        
        style={{
          backgroundColor: '#000000',
          backgroundImage: "url(" + background_img + ")",
          backgroundSize: background_size,
          backgroundRepeat: isRepeat ? 'repeat' : 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
      <div className="relative py-32 flex items-center justify-center md:justify-center mx-auto">
          {children}
      </div>
    </div>
    </div>
  );
};
