import React from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#121212]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-widest uppercase">
              作品集組合
            </h2>
            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              探索我在工業設計、視覺傳達與數位介面上的代表作。點擊各項專案了解從概念發想至最終落地的詳細設計歷程。
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-white hover:text-green-500 transition-colors font-medium border-b border-transparent hover:border-green-500 pb-1 mt-6 md:mt-0">
            查看更多作品 <ArrowUpRight size={20} />
          </button>
        </div>

        {/* CSS Grid (九宮格 3x3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <Link
              to={`/project/${item.id}?from=portfolio`}
              state={{ from: 'portfolio' }}
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden block bg-[#1a1a1a]"
            >
              <ImageWithFallback
                src={item.imgUrl}
                alt={item.title}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${item.id === "1" ? "object-contain bg-black" : "object-cover"}`}
                style={{ 
                  objectPosition: (item as any).coverPosition || "center",
                  transform: (item as any).coverScale ? `scale(${(item as any).coverScale})` : undefined
                }}
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Text content positioned at the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 whitespace-pre-line">{item.title}</h3>
                    <p className="text-green-400 font-medium tracking-wide">{item.brief}</p>
                  </div>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] px-0 -mt-[20px] -mb-[20px]">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-white hover:text-green-500 transition-colors font-medium border-b border-transparent hover:border-green-500 pb-1">
            查看更多作品 <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
