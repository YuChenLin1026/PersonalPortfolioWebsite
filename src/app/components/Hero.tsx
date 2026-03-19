import React from "react";
import { Link } from "react-router";
import heroImage from "figma:asset/395245a217bc54b50e42e8bca3220eafef0718a5.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Yu Chen Lin Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay: bg-black/20 儀表遮罩疊加層 */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content Container: 左側文字（因主體在右，利用左方留白） */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 flex justify-start pt-16">
        
        {/* 儀表遮罩面板 */}
        <div className="max-w-2xl">
          <h1 className="font-bold text-white mb-4 leading-tight p-[0px] font-[Azeret_Mono] text-[48px]">
            I<span className="text-green-500">'</span>m<br />
            Yu Chen<br />
            Lin<span className="text-green-500">.</span>
          </h1>
          <h2 className="text-white tracking-[0.2em] md:tracking-[0.3em] font-light mb-10 leading-relaxed font-bold text-[13px]">
            INDUSTRIAL & GRAPHIC & WEB DESIGNER
          </h2>
          
          {/* 按鈕區塊 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/#portfolio" 
              className="flex items-center justify-center px-6 py-2.5 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all text-base"
            >檢視作品</Link>
            <Link 
              to="/#contact" 
              className="flex items-center justify-center px-6 py-2.5 bg-black/30 border border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all text-base"
            >聯絡我</Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}