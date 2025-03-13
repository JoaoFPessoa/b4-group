import { PartyPopper, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#022069] via-[#093694] to-[#022069] py-20 md:py-32">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#022069]/95 to-[#022069]/70"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#DFB955]/20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#93B1BD]/20 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#DACE8E]/20 animate-pulse"></div>

      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Colorful celebration with confetti and happy people"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
      </div>

      <div className="container relative z-20">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-[#DFB955] animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl  font-bold text-white leading-tight">
              Transformamos sonhos <br />
              <span className="fancy-font text-[#DFB955]">
                em experiências únicas!
              </span>
            </h1>
            <p className="text-[#93B1BD] text-lg md:text-xl max-w-md">
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
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                Veja nossos eventos
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -bottom-5 -right-5 p-3 bg-white rounded-full shadow-lg">
              <PartyPopper className="h-8 w-8 text-[#DFB955]" />
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
