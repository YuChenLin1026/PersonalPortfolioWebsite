import React from "react";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Glassmorphism Card */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] relative overflow-hidden">
            
            {/* Background Decorative Gradient */}
            <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-green-500/20 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-green-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>

            {/* Logo: Green Circle with Y */}
            <div className="flex justify-center mb-8 md:mb-10 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] md:border-4 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-[#121212]/50 backdrop-blur-sm">
                <span className="text-3xl md:text-4xl font-bold text-green-500">Y</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                關於我 <span className="text-green-500 text-lg sm:text-3xl">About Me</span>
              </h3>
              
              <div className="space-y-5 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed text-left sm:text-center px-2 md:px-0">
                <p>
                  <strong className="block text-green-500 mb-1">就讀學校 :</strong>
                  <span className="text-white">長庚大學工業設計學系</span>
                </p>
                <p>
                  <strong className="block text-green-500 mb-1">個人簡介 :</strong>
                  <span>我是長庚大學工業設計學系二年級學生，熟悉平面設計、網頁前端設計與室內建築設計等多種軟體，並持續學習3D建模與程式開發，以培養跨領域整合能力。個性平易近人、積極進取，具備專案協作、時間管理與創意思考經驗。期望藉由本次人因設計課程，結合專業知識與技術應用，開發出兼具市場潛力與人體工學的創新設計，並在團隊合作中持續成長。</span>
                </p>
                
                
              </div>

              {/* Button */}
              <div className="mt-10 md:mt-12">
                <a 
                  href="/resume" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-green-500 text-black font-bold text-sm md:text-base rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Download size={18} />
                  詳細履歷
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
