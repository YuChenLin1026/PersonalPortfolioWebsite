import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      if (location.pathname !== "/") return;
      
      const sections = ["home", "about", "skills", "portfolio", "experience", "contact"];
      let currentSection = "";
      
      // Calculate scroll position with an offset for the fixed navbar
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
          }
        }
      }
      
      // If we are at the top, highlight home
      if (!currentSection && window.scrollY < 100) {
        currentSection = "home";
      } else if (!currentSection && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        // If we reached the bottom of the page, highlight contact
        currentSection = "contact";
      }
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, activeSection]);

  const navLinks = [
    { name: "首頁", href: "/", section: "home" },
    { name: "關於", href: "/#about", section: "about" },
    { name: "軟體專業", href: "/#skills", section: "skills" },
    { name: "作品集", href: "/#portfolio", section: "portfolio" },
    { name: "經歷", href: "/#experience", section: "experience" },
    { name: "聯絡方式", href: "/#contact", section: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-bold tracking-wider text-white hover:text-green-500 transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 text-sm">
            Y
          </span>
          個人履歷網站
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === "/" && activeSection === link.section;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                  isActive
                    ? "text-green-500"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[72px] bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === "/" && activeSection === link.section;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium border-b border-white/5 pb-4 last:border-0 last:pb-0 ${
                  isActive ? "text-green-500" : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
