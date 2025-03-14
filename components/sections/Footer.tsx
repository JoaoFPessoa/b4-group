import { PartyPopper, Snowflake, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#022069] via-[#093694] to-[#022069] text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#DFB955]/5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#93B1BD]/5 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#DACE8E]/5 animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="B4 Logo"
                width={150}
                height={150}
                className="object-contain mb-2 max-h-[95%]"
              />
            </div>
            <p className="text-sm text-[#93B1BD] max-w-xs">
              Não planejamos apenas eventos, criamos memórias! Seu parceiro
              ideal para festas que brilham!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Links Rápidos
              <Sparkles className="h-4 w-4 text-[#DFB955]" />
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Nosso Menu de Festas
              <PartyPopper className="h-4 w-4 text-[#DFB955]" />
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Festas Corporativas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Casamentos dos
                  Sonhos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Festas de
                  Aniversário
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Galas Beneficentes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#93B1BD] hover:text-[#DFB955] transition-colors flex items-center gap-1"
                >
                  <span className="text-[#DFB955]">✦</span> Extravagâncias
                  Temáticas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Atualizações de Festa
              <Snowflake className="h-4 w-4 text-[#DFB955]" />
            </h3>
            <p className="text-sm text-[#93B1BD] mb-4">
              Inscreva-se para dicas de planejamento de festas, inspiração para
              eventos e ofertas exclusivas!
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Seu endereço de e-mail"
                  className="flex h-12 w-full rounded-full border border-[#93B1BD]/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-[#93B1BD]/50 focus:outline-none focus:ring-2 focus:ring-[#DFB955]"
                />
                <div className="absolute right-1 top-1">
                  <Button className="h-10 rounded-full bg-gradient-to-r from-[#DFB955] to-[#C19636] hover:from-[#C19636] hover:to-[#DFB955] text-[#022069] font-semibold">
                    Junte-se à Diversão!
                  </Button>
                </div>
              </div>
              <p className="text-xs text-[#93B1BD]">
                Prometemos não enviar spam! Apenas atualizações de festas!
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-[#93B1BD]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#93B1BD]">
            &copy; {new Date().getFullYear()} Stellar Events. Todos os direitos
            reservados. Vamos festejar! 🎉
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-xs text-[#93B1BD] hover:text-[#DFB955]"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-[#93B1BD] hover:text-[#DFB955]"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-xs text-[#93B1BD] hover:text-[#DFB955]"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
