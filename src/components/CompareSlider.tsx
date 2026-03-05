"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function CompareSlider({
  beforeImage,
  afterImage,
  className = ""
}: {
  beforeImage: string;
  afterImage: string;
  className?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX - rect.left : event.nativeEvent.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div 
      className={`relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none ${className}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Clean Image (Background - Actual Photo showing on the Right) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white">
        <img 
          src={afterImage} 
          alt="Clean Result" 
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>
      
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm z-10 pointer-events-none">
        Before
      </div>

      {/* Dirty Image (Foreground, clipped - Actual Photo showing on the Left) */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-slate-900"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Dirty Original" 
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>
      
      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm z-10 pointer-events-none">
        After
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary text-primary">
          <ArrowLeftRight size={20} />
        </div>
      </div>
    </div>
  );
}
