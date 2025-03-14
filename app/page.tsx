"use client";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portoflio from "@/components/sections/Portfolio";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen bg-white  flex-col overflow-hidden">
      {/* Custom fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

        :root {
          --primary: #022069;
          --primary-light: #93b1bd;
          --accent-light: #dace8e;
          --accent: #dfb955;
          --accent-dark: #c19636;
        }

        body {
          font-family: "Manrope", sans-serif;
        }

        .fancy-font {
          font-family: "Alex Brush", cursive;
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        .floating-delay-1 {
          animation-delay: 0.5s;
        }

        .floating-delay-2 {
          animation-delay: 1s;
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .bounce {
          animation: bounce 2s ease infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <Header />
      <Hero />
      <Services />
      <About />
      <Portoflio />
      <TestimonialsSection />
      <CTA />
      <Contact />
      <Footer />

      {/* Add animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
