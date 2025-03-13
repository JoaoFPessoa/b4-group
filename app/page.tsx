/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  PartyPopper,
  Sparkles,
  SnowflakeIcon as Confetti,
  Gift,
  Heart,
  Star,
  MapPin,
  Mail,
  Phone,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
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

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-8 h-8 text-[#DFB955] opacity-20 floating z-0">
        <Star className="w-full h-full" />
      </div>
      <div className="fixed top-40 right-20 w-6 h-6 text-[#022069] opacity-20 floating floating-delay-1 z-0">
        <Star className="w-full h-full" />
      </div>
      <div className="fixed bottom-20 left-1/4 w-10 h-10 text-[#93B1BD] opacity-20 floating floating-delay-2 z-0">
        <Star className="w-full h-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur text-black">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="fancy-font text-3xl font-bold text-[#022069]">
                B4
              </span>
              <PartyPopper className="absolute -top-3 -right-6 h-5 w-5 text-[#DFB955]" />
            </div>
            <span className="text-xl font-semibold text-[#022069]">
              Eventos
            </span>
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
              className="text-sm font-medium hover:text-[#DFB955] transition-colors group"
            >
              Contato
              <span className="block h-0.5 max-w-0 bg-[#DFB955] transition-all duration-500 group-hover:max-w-full"></span>
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

      {/* Hero Banner */}
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
                Mais do que organizar eventos, criamos experiências únicas,
                cheias de significado e leveza. Com sensibilidade e dedicação,
                garantimos momentos autênticos e especiais.
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

      {/* Fun Facts Counter */}
      {/* <section className="bg-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#022069] via-[#DFB955] to-[#93B1BD]"></div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center group">
              <div className="mb-3 p-3 bg-[#022069]/10 rounded-full group-hover:bg-[#022069]/20 transition-colors">
                <Confetti className="h-8 w-8 text-[#022069]" />
              </div>
              <span className="text-4xl font-bold text-[#022069]">500+</span>
              <span className="text-[#93B1BD]">Eventos</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="mb-3 p-3 bg-[#022069]/10 rounded-full group-hover:bg-[#022069]/20 transition-colors">
                <Music className="h-8 w-8 text-[#022069]" />
              </div>
              <span className="text-4xl font-bold text-[#022069]">50+</span>
              <span className="text-[#93B1BD]">Viagens</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="mb-3 p-3 bg-[#022069]/10 rounded-full group-hover:bg-[#022069]/20 transition-colors">
                <Cake className="h-8 w-8 text-[#022069]" />
              </div>
              <span className="text-4xl font-bold text-[#022069]">7+</span>
              <span className="text-[#93B1BD]">Anos no mercado</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="mb-3 p-3 bg-[#022069]/10 rounded-full group-hover:bg-[#022069]/20 transition-colors">
                <Heart className="h-8 w-8 text-[#022069]" />
              </div>
              <span className="text-4xl font-bold text-[#022069]">98%</span>
              <span className="text-[#93B1BD]">Happy Dancers</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative"
      >
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="fancy-font text-[#DFB955] text-3xl">
                Nosso menu de festas
              </span>
              <PartyPopper className="h-5 w-5 text-[#DFB955]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#022069] mt-2">
              Fazemos <span className="fancy-font">toda</span> ocasião especial!
            </h2>
            <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
              De encontros íntimos a grandes celebrações, trazemos criatividade,
              diversão e um toque especial para cada evento!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-[#93B1BD]">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#022069] to-[#093694]"></div>
              <CardContent className="p-6 pt-8 ">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Confetti className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Eventos Gerais
                </h3>
                <p className="">
                  Celebre momentos especiais com aqueles que você ama.
                  Aniversários, bodas e encontros de amigos são oportunidades
                  perfeitas para criar memórias e fortalecer laços de forma
                  divertida e única.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Aniversário</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Bodas</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Encontro de amigos(as)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Festa temática (halloween, junina, etc...)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Chá da tarde / Brunch</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>E outros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#DFB955] to-[#C19636]"></div>
              <CardContent className="p-6 pt-8">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Heart className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Pré Wedding
                </h3>
                <p className="text-[#93B1BD]">
                  Comemore a união antes do grande dia! De Chá de Lingerie a
                  Despedida de Solteiro, esses eventos ajudam a criar momentos
                  inesquecíveis e a compartilhar a felicidade com amigos e
                  familiares.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Noivado</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Chá de Lingerie</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Despedida de Solteiro</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Jantar de Padrinhos</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>E outros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#93B1BD] to-[#DACE8E]"></div>
              <CardContent className="p-6 pt-8">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Gift className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Pré Mamãe
                </h3>
                <p className="text-[#93B1BD]">
                  Comemore a chegada do bebê com muito amor e carinho! Chá de
                  Bebê, Chá de Revelação e outros eventos criam uma atmosfera de
                  alegria e expectativa para o novo membro da família.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Chá de bebê</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Chá revelação</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>E outros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#93B1BD] to-[#DACE8E]"></div>
              <CardContent className="p-6 pt-8">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Gift className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Casa & Cheers
                </h3>
                <p className="text-[#93B1BD]">
                  Celebre novas conquistas, como a casa nova ou momentos
                  especiais, com um brinde e boa companhia. Um evento
                  descontraído e cheio de boas vibrações.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Open house</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>Chá bar</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-5 w-5 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-2">
                      <span className="text-[#DFB955] text-xs">✓</span>
                    </div>
                    <span>E outros</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#93B1BD] to-[#DACE8E]"></div>
              <CardContent className="p-6 pt-8">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Gift className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Viagens de família ou amigos
                </h3>
                <p className="text-[#93B1BD]">
                  Viaje e crie memórias duradouras com aqueles que você mais
                  ama. Seja para um destino tranquilo ou uma grande aventura,
                  esses momentos são perfeitos para fortalecer os laços.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
              <div className="h-3 w-full bg-gradient-to-r from-[#93B1BD] to-[#DACE8E]"></div>
              <CardContent className="p-6 pt-8">
                <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                  <Gift className="h-8 w-8 text-[#022069]" />
                </div>
                <h3 className="text-xl font-bold text-[#022069] mb-2">
                  Coorporativos com B4 Company
                </h3>
                <p className="text-[#93B1BD]">
                  Eventos corporativos organizados para criar conexões
                  importantes e promover crescimento profissional, com a
                  expertise e o cuidado da B4 Company.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#93B1BD] via-[#022069] to-[#DFB955]"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#DFB955]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#022069]/10 blur-3xl"></div>

        <div className=" container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative  h-full w-full">
                <Image
                  src="/party.jpg"
                  alt="Our fun team planning an event"
                  width={800}
                  height={800}
                  className="shadow-xl"
                />
                <div className="absolute -top-5 -right-5 p-3 bg-white rounded-full shadow-lg">
                  <Sparkles className="h-8 w-8 text-[#DFB955]" />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#022069] text-3xl">Sobre</span>
                <PartyPopper className="h-5 w-5 " />
              </div>

              <p className="text-[#022069] mt-6">
                A marca nasceu há sete anos da paixão por casamentos e da
                vontade de criar experiências inesquecíveis para as noivas. A
                fundadora percebeu que as despedidas de solteira eram, muitas
                vezes, eventos limitados a uma única noite e sem a devida
                atenção aos detalhes.
              </p>
              <p className="text-[#022069] mt-4">
                Seu desejo era proporcionar algo duradouro, uma viagem onde a
                noiva pudesse simplesmente chegar com suas amigas e encontrar
                tudo perfeitamente organizado. Um momento marcante, digno de ser
                lembrado tanto quanto o próprio casamento.
              </p>
              <h3 className="font-bold  text-[#022069] font-manrope mb-2 mt-12">
                <Quote className="transform rotate-180" fill="#022069" />
                Nosso objetivo é proporcionar aos nossos clientes uma
                experiência cheia de amor e atenção, cuidando de cada detalhe
                para tornar tudo mais leve e especial. Nosso trabalho vai além
                de simplesmente realizar um evento; é sobre criar um ambiente
                acolhedor, alegre e personalizado, garantindo que cada momento
                se torne uma memória inesquecível.”
              </h3>
              <p className=" text-[#DFB955] font-semibold">
                Tatiana Judice, fundadora da B4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DFB955] via-[#93B1BD] to-[#022069]"></div>
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#022069]/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#DFB955]/5 blur-3xl"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#022069] mt-2">
              Nossos eventos favoritos!
            </h2>
            <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
              Confira alguns das nossos eventos favoritos que mostram nossa
              criatividade, atenção aos detalhes e paixão por diversão!
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 rounded-full overflow-hidden p-1 bg-gray-100">
              <TabsTrigger
                value="all"
                className="rounded-full data-[state=active]:bg-[#022069] data-[state=active]:text-white data-[state=inactive]:text-[#93B1BD]"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                className="rounded-full data-[state=active]:bg-[#022069] data-[state=active]:text-white data-[state=inactive]:text-[#93B1BD]"
              >
                Corporativos
              </TabsTrigger>
              <TabsTrigger
                value="weddings"
                className="rounded-full data-[state=active]:bg-[#022069] data-[state=active]:text-white data-[state=inactive]:text-[#93B1BD]"
              >
                Weddings
              </TabsTrigger>
              <TabsTrigger
                value="special"
                className="rounded-full data-[state=active]:bg-[#022069] data-[state=active]:text-white data-[state=inactive]:text-[#93B1BD]"
              >
                Eventos especiais
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <Image
                      src={"/party.jpg"}
                      alt={`Event portfolio item ${item}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022069]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl">
                        Epic Corporate Party
                      </h3>
                      <p className="text-[#DFB955]">New York, 2023</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="h-5 w-5 text-[#DFB955]" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="corporate" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`/party.jpg`}
                      alt={`Corporate event portfolio item ${item}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022069]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl">
                        Tech Launch Party
                      </h3>
                      <p className="text-[#DFB955]">London, 2023</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="h-5 w-5 text-[#DFB955]" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="weddings" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`/party.jpg`}
                      alt={`Wedding portfolio item ${item}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022069]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl">
                        Fairytale Wedding
                      </h3>
                      <p className="text-[#DFB955]">Paris, 2023</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="h-5 w-5 text-[#DFB955]" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="special" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <Image
                      src={`/party.jpg`}
                      alt={`Special event portfolio item ${item}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022069]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl">
                        Charity Gala Extravaganza
                      </h3>
                      <p className="text-[#DFB955]">Miami, 2023</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="h-5 w-5 text-[#DFB955]" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-[#022069] via-[#093694] to-[#022069] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#DFB955]/10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#93B1BD]/10 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#DACE8E]/10 animate-pulse"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="fancy-font text-[#DFB955] text-3xl">
                Gente feliz!
              </span>
              <PartyPopper className="h-5 w-5 text-[#DFB955]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              O que Nosso Pessoal de Festa Diz
            </h2>
            <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
              Não acredite apenas na nossa palavra! Veja o que nossos clientes
              têm a dizer sobre a experiência de festejar conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gabriela",
                role: "Produtora",
                quote:
                  "Foi a primeira vez que contratei a B4 para um encontro de amigas. Desde o início, percebi a preocupação em me atender, a agilidade e a transparência nos nossos contatos. O encontro foi maravilhoso! Local perfeito, comida excelente, atendimento das meninas nota 10, tudo dentro do combinado. Inclusive, já marquei nosso próximo evento!",
              },
              {
                name: "Ana",
                role: "Diretora de Marketing",
                quote:
                  "Quero agradecer INFINITAMENTE a todas vocês! Eu sabia que seria incrível, mas não imaginei que seria TÃO PERFEITO! Reuni 19 pessoas que se conectaram de forma única, e foram os melhores dias da minha vida. B4, obrigada por cuidarem de nós com tanto carinho! O serviço, a simpatia e a organização de vocês fizeram tudo ser simplesmente perfeito!",
              },
              {
                name: "Renata",
                role: "Gestora de RH",
                quote:
                  "Foi surreal!! Vocês entregam TUDO! A dedicação no trabalho é surpreendente. Obrigada por tudo! Foi incrível, muito mais do que eu esperava.",
              },
              {
                name: "Paula",
                role: "Empresaria",
                quote:
                  "Aproveitando, gostaria de agradecer à B4 por ter proporcionado um fim de semana muito gostoso! Vocês embarcaram em toda a minha loucura de decoração, a papelaria ficou linda, os cantos, a programação, o jogo americano dentro do tema... Babei muito! A limpeza da casa, as comidas impecáveis, DJ, fotógrafo, barman... Tudo perfeito! Muito obrigada!",
              },
              {
                name: "Angélica",
                role: "Dentista",
                quote:
                  "Não tenho palavras para agradecer pelo carinho conosco durante o Carnaval. A B4 e as meninas foram incríveis! Muitíssimo obrigada! Com certeza, teremos outras oportunidades.",
              },
              {
                name: "Yara",
                role: "Médica",
                quote:
                  "Meninas da B4, foi tudo perfeito, um sonho! Estou muito feliz e realizada. Muito obrigada! Eu tinha experiências péssimas com outras empresas em despedidas de solteiro, mas vocês mudaram completamente minha opinião. Obrigada por tudo, vocês arrasaram!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-none rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-2 w-full bg-gradient-to-r from-[#DFB955] to-[#C19636]"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#DFB955"
                          className="inline-block mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/90 italic  flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-4">
                        <span className="text-[#DFB955] font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#93B1BD]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white  relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#022069] via-[#DFB955] to-[#93B1BD]"></div>

        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="fancy-font text-[#DFB955] text-3xl">
                  Vamos festejar juntos!
                </span>
                <PartyPopper className="h-5 w-5 text-[#DFB955]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#022069] mt-2">
                Pronto para o Seu Melhor Evento de Todos?
              </h2>
              <p className="text-[#93B1BD] mt-4">
                Seja para um evento corporativo, casamento ou uma celebração
                especial, nossa equipe está pronta para trazer diversão, magia e
                o fator UAU!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#022069] to-[#093694] hover:from-[#093694] hover:to-[#022069] text-white rounded-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Vamos planejar!
                    <Sparkles className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100"></span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/party.jpg"
                alt="Fun event planning consultation"
                width={600}
                height={400}
                className=" shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 p-3 bg-white rounded-full shadow-lg">
                <Confetti className="h-8 w-8 text-[#DFB955]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DFB955] via-[#022069] to-[#93B1BD]"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#022069]/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#DFB955]/5 blur-3xl"></div>

        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="fancy-font text-[#DFB955] text-3xl">
                Diga Oi!
              </span>
              <PartyPopper className="h-5 w-5 text-[#DFB955]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#022069] mt-2">
              Vamos conversar sobre sua festa!
            </h2>
            <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
              Tem dúvidas ou está pronto para começar a planejar seu próximo
              evento incrível? Envie uma mensagem e nós responderemos mais
              rápido do que você pode dizer "HORA DA FESTA!"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6 text-[#93B1BD]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium text-[#022069] flex items-center gap-1"
                    >
                      Nome
                      <span className="text-[#DFB955]">*</span>
                    </label>
                    <input
                      id="first-name"
                      className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB955] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium text-[#022069] flex items-center gap-1"
                    >
                      Sobrenome
                      <span className="text-[#DFB955]">*</span>
                    </label>
                    <input
                      id="last-name"
                      className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB955] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#022069] flex items-center gap-1"
                  >
                    Email
                    <span className="text-[#DFB955]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB955] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="event-type"
                    className="text-sm font-medium text-[#022069] flex items-center gap-1"
                  >
                    Qual tipo de festa?
                    <span className="text-[#DFB955]">*</span>
                  </label>
                  <select
                    id="event-type"
                    className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB955] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Selecione seu tipo de festa
                    </option>
                    <option value="corporate">Corporate Celebration</option>
                    <option value="wedding">Wedding Extravaganza</option>
                    <option value="birthday">Birthday Bash</option>
                    <option value="other">Other Fun Event</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#022069] flex items-center gap-1"
                  >
                    Conte-nos sobre sua festa dos sonhos!
                    <span className="text-[#DFB955]">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFB955] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="I'm planning a..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#022069] to-[#093694] hover:from-[#093694] hover:to-[#022069] rounded-full group relative overflow-hidden h-12">
                  <span className="relative z-10 flex items-center">
                    Bora começar essa festa!
                    <PartyPopper className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100"></span>
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#022069] mb-4 flex items-center gap-2">
                  Nosso endereço
                  <PartyPopper className="h-5 w-5 text-[#DFB955]" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-full bg-[#022069]/10 flex items-center justify-center mr-3 mt-1 group-hover:bg-[#022069]/20 transition-colors">
                      <MapPin className="h-5 w-5 text-[#022069]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#022069]">New York</h4>
                      <p className="text-sm text-[#93B1BD]">
                        123 Party Avenue, New York, NY 10160
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="h-10 w-10 rounded-full bg-[#022069]/10 flex items-center justify-center mr-3 mt-1 group-hover:bg-[#022069]/20 transition-colors">
                      <MapPin className="h-5 w-5 text-[#022069]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#022069]">London</h4>
                      <p className="text-sm text-[#93B1BD]">
                        456 Celebration Street, London, W1C 1AP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#022069] mb-4 flex items-center gap-2">
                  Vamos nos conectar!
                  <Heart className="h-5 w-5 text-[#DFB955]" />
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-[#022069]/10 flex items-center justify-center mr-3 group-hover:bg-[#022069]/20 transition-colors">
                      <Mail className="h-5 w-5 text-[#022069]" />
                    </div>
                    <a
                      href="mailto:hello@stellarevents.com"
                      className="text-[#93B1BD] hover:text-[#022069] transition-colors"
                    >
                      hello@stellarevents.com
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <div className="h-10 w-10 rounded-full bg-[#022069]/10 flex items-center justify-center mr-3 group-hover:bg-[#022069]/20 transition-colors">
                      <Phone className="h-5 w-5 text-[#022069]" />
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-[#93B1BD] hover:text-[#022069] transition-colors"
                    >
                      +1 (234) PARTY-TIME
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#022069] mb-4 flex items-center gap-2">
                  Siga a diversão!
                  <Sparkles className="h-5 w-5 text-[#DFB955]" />
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#022069]/10 flex items-center justify-center hover:bg-[#022069] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#022069]/10 flex items-center justify-center hover:bg-[#022069] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#022069]/10 flex items-center justify-center hover:bg-[#022069] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-[#022069]/10 flex items-center justify-center hover:bg-[#022069] hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative mt-8 p-6 bg-gradient-to-r from-[#022069]/5 to-[#DFB955]/5 rounded-2xl">
                <div className="absolute -top-4 -right-4 p-3 bg-white rounded-full shadow-lg">
                  <PartyPopper className="h-6 w-6 text-[#DFB955]" />
                </div>
                <h4 className="font-bold text-[#022069] mb-2">Fun Fact!</h4>
                <p className="text-sm text-[#93B1BD]">
                  Você sabia? A pessoa média passa mais de 2.000 horas de sua
                  vida em festas e celebrações! Vamos fazer essas horas valerem
                  a pena com experiências inesquecíveis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="relative">
                  <span className="fancy-font text-3xl font-bold text-white">
                    Stellar
                  </span>
                  <PartyPopper className="absolute -top-3 -right-6 h-5 w-5 text-[#DFB955]" />
                </div>
                <span className="text-xl font-semibold text-[#DFB955]">
                  Eventos
                </span>
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
                    <span className="text-[#DFB955]">✦</span> Festas
                    Corporativas
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
                <Confetti className="h-4 w-4 text-[#DFB955]" />
              </h3>
              <p className="text-sm text-[#93B1BD] mb-4">
                Inscreva-se para dicas de planejamento de festas, inspiração
                para eventos e ofertas exclusivas!
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
              &copy; {new Date().getFullYear()} Stellar Events. Todos os
              direitos reservados. Vamos festejar! 🎉
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
