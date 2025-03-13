import { PartyPopper } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur text-black">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="fancy-font text-3xl font-bold text-[#022069]">
              B4
            </span>
            <PartyPopper className="absolute -top-3 -right-6 h-5 w-5 text-[#DFB955]" />
          </div>
          <span className="text-xl font-semibold text-[#022069]">Eventos</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:text-[#DFB955] transition-colors group"
          >
            Serviços
            <span className="block h-0.5 max-w-0 bg-[#DFB955] transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-[#DFB955] transition-colors group"
          >
            Sobre a B4
            <span className="block h-0.5 max-w-0 bg-[#DFB955] transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:text-[#DFB955] transition-colors group"
          >
            Portfolio
            <span className="block h-0.5 max-w-0 bg-[#DFB955] transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-[#DFB955] transition-colors group"
          >
            Feedbacks
            <span className="block h-0.5 max-w-0 bg-[#DFB955] transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm  font-medium hover:text-[#DFB955] transition-colors group"
          >
            Contato
          </Link>
        </nav>
        <Button className="hidden md:inline-flex bg-gradient-to-r from-[#022069] to-[#093694] hover:from-[#093694] hover:to-[#022069] text-white rounded-full">
          Fale com a gente! 🎉
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
}

export default Header;
