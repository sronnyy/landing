import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Scroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Arte C",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative bg-gradient-to-br from-[#ffece0] via-[#fff5ed] to-[#fef0e8]`}>
        {/* Overlay com textura e gradiente sutil */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Camada de noise com opacidade muito sutil */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/images/grain.png')",
              backgroundSize: "200px 200px",
              backgroundRepeat: "repeat"
            }}
          />
          
          {/* Gradiente adicional para suavizar */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#fff9f5]/30 via-[#fff5ed]/20 to-[#fef0e8]/10" />
          
          {/* Efeitos de luz sutil */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#fef0e8]/10 blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#fff5ed]/10 blur-[80px]" />
        </div>

        <Scroll>
          {children}
        </Scroll>
      </body>
    </html>
  );
}