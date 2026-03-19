import React from "react";
import { Outlet, useLocation } from "react-router";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="font-sans min-h-screen bg-[#121212] text-white selection:bg-green-500/30 selection:text-green-200">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {isHomePage && <Contact />}
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}