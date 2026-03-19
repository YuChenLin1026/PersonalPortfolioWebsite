import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useSearchParams } from "react-router";
import { ArrowLeft, Calendar, Tag, Wrench, ChevronRight, X, ZoomIn } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const project = portfolioData.find((p) => p.id === Number(id));
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Check URL search params first (most robust), then fallback to location.state
  const fromExperienceParam = searchParams.get('from') === 'experience';
  const fromExperienceState = location.state && (location.state as { from?: string }).from === 'experience';
  const isFromExperience = fromExperienceParam || fromExperienceState;
  
  const backLink = isFromExperience ? '/#experience' : '/#portfolio';
  const backText = isFromExperience ? '返回經歷' : '返回作品集';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">專案不存在</h1>
        <Link to="/" className="text-green-500 hover:text-green-400 flex items-center gap-2">
          <ArrowLeft size={20} /> 返回首頁
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-32 min-h-screen relative">
      {/* Lightbox for zooming images */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImg} 
            alt="Enlarged view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-green-500/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Header Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
        <ImageWithFallback
          src={project.bannerUrl || (project.gallery && project.gallery.length > 0 ? project.gallery[0] : (Array.isArray(project.posterUrl) ? project.posterUrl[0] : project.posterUrl))}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-[#121212]/20"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 container mx-auto">
          <Link to={backLink} className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors mb-6 font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft size={18} /> {backText}
          </Link>
          <h1 className="font-bold text-white mb-4 leading-tight whitespace-pre-line text-[48px]">{project.title}</h1>
          <p className="text-xl md:text-2xl text-green-400 font-light tracking-wide">{project.brief}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12 md:mt-20 max-w-5xl">
        <div className="space-y-20">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 專案概述
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-wrap">
                {project.id === 1 
                  ? project.description
                      .replace(/與「.*?來科技感」/g, '與「未來科技感」')
                      .replace(/僅提供單.*?電.*?能/g, '僅提供單一充電功能')
                  : project.description}
              </p>
            </section>

            {/* Design Concept & Aesthetics */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 設計美學與概念
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic whitespace-pre-wrap">
                {project.id === 1 
                  ? project.designConcept
                      .replace(/與「.*?來科技感」/g, '與「未來科技感」')
                      .replace(/僅提供單.*?電.*?能/g, '僅提供單一充電功能')
                  : project.designConcept}
              </p>
            </section>



            {/* Photo Gallery */}
            

            {/* Challenge & Solution */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 實踐與突破
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl border border-red-500/30 shadow-lg bg-[#ce74741a]">
                  <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]"></div> 挑戰 Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-green-950/20 p-8 rounded-3xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div> 突破 Breakthrough
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light whitespace-pre-wrap">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* Photo Gallery / Works Showcase */}
            {project.gallery && project.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 作品展示
                </h2>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {project.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-full aspect-video rounded-2xl overflow-hidden cursor-zoom-in group border border-white/5 bg-[#1a1a1a] shadow-lg relative"
                      onClick={() => setLightboxImg(img)}
                    >
                      <ImageWithFallback 
                        src={project.id === 8 && idx === 2 ? "https://i.meee.com.tw/mZADBFU.png" : project.id === 8 && idx === 3 ? "https://i.meee.com.tw/WMnTpKh.png" : img} 
                        alt={`${project.title} Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        style={{ 
                          objectPosition: 
                            project.id === 1 && idx === 1 ? "center 25%" : 
                            project.id === 6 && idx === 0 ? "center 100%" : 
                            project.id === 6 && idx === 1 ? "center 35%" : 
                            "center" 
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Video Showcase */}
            {'videoUrl' in project && typeof project.videoUrl === 'string' && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 影片展示
                </h2>
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/5 bg-[#1a1a1a]">
                  {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                    <iframe 
                      src={project.videoUrl.includes('watch?v=') ? project.videoUrl.replace('watch?v=', 'embed/') : project.videoUrl.includes('youtu.be/') ? project.videoUrl.replace('youtu.be/', 'youtube.com/embed/') : project.videoUrl.includes('youtube.com/shorts/') ? project.videoUrl.replace('youtube.com/shorts/', 'youtube.com/embed/') : project.videoUrl} 
                      title={`${project.title} Video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  ) : project.videoUrl.endsWith('.mp4') || project.videoUrl.includes('.mp4?') ? (
                    <video 
                      src={project.videoUrl} 
                      className="w-full h-full object-cover" 
                      controls 
                      controlsList="nodownload"
                      preload="metadata"
                    />
                  ) : (
                    <iframe 
                      src={project.videoUrl} 
                      title={`${project.title} Video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </section>
            )}

            {/* Process Timeline */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 設計歷程
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-green-500 before:via-green-500/20 before:to-transparent">
                {project.process.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* Timeline Node */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#121212] bg-green-500 text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.5)] absolute left-0 md:left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    {/* Content Card */}
                    <details className="group w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#1a1a1a] border border-white/5 rounded-2xl shadow-lg hover:border-green-500/50 transition-all duration-300 ml-16 md:ml-0 hover:-translate-y-1">
                      <summary className="text-xl font-bold text-white tracking-wide list-none flex justify-between items-center outline-none cursor-pointer [&::-webkit-details-marker]:hidden">
                        {step.phase}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 transition-transform duration-300 group-open:rotate-180">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </summary>
                      <p className="text-gray-400 leading-relaxed font-light whitespace-pre-line mt-4">
                        {project.id === 1 
                          ? step.details.replace(/訊.*?互不干涉/g, '訊號互不干涉') 
                          : step.details}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            {/* PDF Embed Section */}
            {(project as any).pdfEmbed && (
              <section className="mt-8 mb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {project.id === 8 ? "影像與歷史的對話——《流麻溝十五號》電影特映活動設計歷程" : "相關歷程文件"}
                </h2>
                <div className="w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-[#1a1a1a]">
                  <iframe 
                    src={(project as any).pdfEmbed.replace('/view?usp=sharing', '/preview')} 
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title={`${project.title} PDF Document`}
                  />
                </div>
              </section>
            )}

            {/* Project Reflection */}
            {(project as any).reflection && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 設計心得與反思
                </h2>
                <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="flex-1">
                      <p className="text-gray-300 leading-loose font-light whitespace-pre-line text-[15px]">
                        {(project as any).reflection}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Exhibition Poster / Mockup */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> {project.id === 7 ? "展板與成果海報 - 嘉義老戲院翻頁小書" : "展版與成果海報"}
              </h2>
              <div className={`grid ${project.id === 8 ? "grid-cols-2" : "grid-cols-1"} gap-8`}>
                {(Array.isArray(project.posterUrl) ? project.posterUrl : [project.posterUrl]).map((url, idx) => {
                  const isEmbed = url.toLowerCase().endsWith('.pdf') || url.includes('drive.google.com/file/d/') || url.includes('online.visual-paradigm.com');
                  
                  if (isEmbed) {
                    // Google Drive viewer needs a specific format for embedding
                    let embedUrl = url;
                    if (url.includes('drive.google.com/file/d/')) {
                      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
                      if (match && match[1]) {
                        embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
                      }
                    } else if (url.includes('online.visual-paradigm.com')) {
                      embedUrl = url;
                    } else {
                      embedUrl = `${url}#view=FitH`;
                    }

                    return (
                      <div key={idx} className="w-full h-[70vh] min-h-[500px] max-h-[800px] rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl relative">
                        <iframe 
                          src={embedUrl} 
                          title={`${project.title} Exhibition Poster ${idx + 1}`}
                          className="absolute inset-0 w-full h-full border-0"
                          allowFullScreen
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <div 
                      key={idx}
                      className={`w-full ${project.id === 4 ? "aspect-[1.414/1]" : "aspect-[1/1.414]"} rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 cursor-zoom-in group relative shadow-2xl`}
                      onClick={() => setLightboxImg(url)}
                    >
                      <ImageWithFallback 
                        src={url} 
                        alt={`${project.title} Exhibition Poster ${idx + 1}`}
                        className="w-full h-full object-cover scale-[1.01] transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Hover overlay indicator for zoom */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Project Info */}
            <section>
              <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-6 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-green-500 rounded-full inline-block"></span> 專案資訊
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Tag size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">領域 Category</span>
                    </div>
                    <p className="text-xl text-white font-medium pl-8 md:pl-0">{project.category}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Calendar size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">完成時間 Date</span>
                    </div>
                    <p className="text-xl text-white font-medium pl-8 md:pl-0">{project.date}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <span className="font-medium text-sm uppercase tracking-widest">設計團隊 Team</span>
                    </div>
                    <div className="flex flex-col gap-4 pl-8 md:pl-0">
                      {!(project as any).team ? (
                        <>
                          <p className="text-xl text-white font-medium leading-relaxed">個人獨立專案</p>
                        </>
                      ) : typeof (project as any).team === 'string' ? (
                        <p className="text-xl text-white font-medium">{(project as any).team}</p>
                      ) : (
                        <>
                          <p className="text-xl text-white font-medium leading-relaxed">團隊合作專案</p>
                          {(project as any).team.members && (
                            <p className="text-[15px] text-white font-medium leading-relaxed">團隊人員：{(project as any).team.members.replace(/\s*\/\s*/g, ' / ')} 同學</p>
                          )}
                          {(project as any).team.advisors && (
                            <p className="text-[15px] text-white font-medium leading-relaxed mt-2">指導老師：{(project as any).team.advisors.replace(/\s*\/\s*/g, ' / ')} 老師</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 mb-3">
                      <Wrench size={20} className="text-green-500" />
                      <span className="font-medium text-sm uppercase tracking-widest">使用工具 Tools</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-8 md:pl-0">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1.5 bg-[#222] border border-white/10 rounded-lg text-sm text-gray-300 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-center">
                  <Link to="/#portfolio" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 text-green-500 border border-green-500/30 rounded-xl hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all font-bold group w-full md:w-auto min-w-[200px]">
                    <span>查看其他作品</span>
                    <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </section>
            
        </div>
      </div>
    </article>
  );
}