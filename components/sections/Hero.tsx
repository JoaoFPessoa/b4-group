import { Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const banners = [
  { type: "image", src: "/banner/horizontal.png", duration: 7000 },
  {
    type: "video",
    src: "/banner/banner-video/banner-video.mp4",
    duration: 7000,
  },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-switch banners with dynamic duration
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, banners[currentBanner].duration);

    return () => clearInterval(interval);
  }, [currentBanner]);

  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background with carousel effect */}
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            {banner.type === "image" ? (
              <Image
                src={banner.src}
                alt="Banner"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <video
                src={banner.src}
                loop
                muted
                autoPlay
                className="w-full h-full object-contain border-0"
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA (Hidden when video is playing) */}
      {banners[currentBanner].type !== "video" && (
        <div className="container relative z-20">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-4 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-[#DFB955] animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Transformamos sonhos <br />
                <span className="fancy-font text-white">
                  em experiências únicas!
                </span>
              </h1>
              <p className="text-white text-lg md:text-xl max-w-md">
                Mais do que organizar eventos, criamos experiências únicas,
                cheias de significado e leveza. Com sensibilidade e dedicação,
                garantimos momentos autênticos e especiais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button className="bg-gradient-to-r from-[#DFB955] to-[#C19636] hover:from-[#C19636] hover:to-[#DFB955] text-[#022069] font-semibold rounded-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Chame a gente!
                    <Sparkles className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100"></span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-primary bg-white hover:bg-white/60 rounded-full"
                >
                  Veja nossos eventos
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
