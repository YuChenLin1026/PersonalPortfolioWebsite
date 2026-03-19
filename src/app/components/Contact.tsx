import React, { useState } from "react";
import { Globe, ChevronDown, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // 這裡使用了 Web3Forms 作為直接寄信到信箱的服務範例
      // 請前往 https://web3forms.com/ 取得免費的 Access Key，並將下方的 "YOUR_ACCESS_KEY_HERE" 替換掉
      // 這樣就能在背景直接把表單內容寄到你的 yuchen941026@gmail.com
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b6c417b9-7b19-4487-a26f-629ef97e608a",
          subject: `網站聯絡表單：來自 ${data.lastName}${data.firstName}`,
          from_name: `${data.lastName}${data.firstName}`,
          replyto: data.email,
          ...data
        }),
      });

      if (!response.ok) {
        throw new Error("傳送失敗");
      }
      
      toast.success("訊息已成功傳送！", {
        description: "感謝您的來信，我會盡快回覆您。",
        icon: <CheckCircle2 className="text-green-500" />,
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)"
        }
      });

      // 重設表單
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("傳送失敗", {
        description: "請稍後再試，或直接透過電子郵件與我聯絡。",
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)"
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#121212] pt-20 md:pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24">
          
          {/* Left Column: Contact Intro */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 md:mb-8 tracking-widest uppercase font-bold">期待您的邀請</h2>
            <p className="text-gray-300 text-base md:text-lg mb-10 md:mb-16 leading-relaxed max-w-md">如果您目前正在尋找實習生，歡迎與我聯絡。我很期待能有機會參與實際的專案，與團隊一起合作，並從業界前輩身上學習更多設計相關的知識與經驗。</p>
            
            <div className="space-y-4 text-white text-base md:text-lg font-light tracking-wide">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-green-500">
                  <Globe size={16} />
                </span>
                yuchen941026@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-green-500">
                  <span className="text-sm">Tel</span>
                </span>
                0928 499 061
              </p>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="order-2">
            <form className="space-y-5 md:space-y-6 bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-2xl border border-white/5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-gray-300 text-sm font-light">名字 *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required 
                    className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                    placeholder="請輸入名字"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-gray-300 text-sm font-light">姓氏 *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required 
                    className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                    placeholder="請輸入姓氏"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-light">電子郵件 *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder-gray-500" 
                  placeholder="請輸入電子郵件"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-gray-300 text-sm font-light">電話</label>
                <div className="flex bg-white/5 rounded-md overflow-hidden border border-white/10 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all">
                  {/* Phone prefix dropdown mock */}
                  
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 text-white focus:outline-none bg-transparent placeholder-gray-500" 
                    placeholder="請輸入電話號碼"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-light">訊息</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  className="bg-white/5 text-white border border-white/10 px-4 py-3 rounded-md focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-y placeholder-gray-500"
                  placeholder="歡迎留下您的訊息與聯絡內容"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black font-medium text-lg py-3.5 rounded-md hover:bg-green-400 transition-colors mt-4 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    傳送中...
                  </span>
                ) : "傳送訊息"}
              </button>
            </form>
          </div>
          
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-gray-500 text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">© 2026 Yu-Chen Lin. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-green-400 transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}