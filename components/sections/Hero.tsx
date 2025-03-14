import { Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden py-20 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={"/banner/horizontal.png"}
          alt="Colorful celebration with confetti and happy people"
          fill
          className="object-cover hidden md:block"
          priority
        />
        <Image
          src={"/banner/vertical.png"}
          alt="Colorful celebration with confetti and happy people"
          fill
          className="object-cover block md:hidden"
          priority
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#DFB955]/20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#93B1BD]/20 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#DACE8E]/20 animate-pulse"></div>

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
              Mais do que organizar eventos, criamos experiências únicas, cheias
              de significado e leveza. Com sensibilidade e dedicação, garantimos
              momentos autênticos e especiais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-gradient-to-r from-[#DFB955] to-[#C19636] hover:from-[#C19636] hover:to-[#DFB955] text-[#022069] font-semibold rounded-full group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Vamos planejar?
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
