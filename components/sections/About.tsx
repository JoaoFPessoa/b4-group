import { PartyPopper, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
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
              A marca nasceu há sete anos da paixão por casamentos e da vontade
              de criar experiências inesquecíveis para as noivas. A fundadora
              percebeu que as despedidas de solteira eram, muitas vezes, eventos
              limitados a uma única noite e sem a devida atenção aos detalhes.
            </p>
            <p className="text-[#022069] mt-4">
              Seu desejo era proporcionar algo duradouro, uma viagem onde a
              noiva pudesse simplesmente chegar com suas amigas e encontrar tudo
              perfeitamente organizado. Um momento marcante, digno de ser
              lembrado tanto quanto o próprio casamento.
            </p>
            <h3 className="font-bold  text-[#022069] font-manrope mb-2 mt-12">
              <Quote className="transform rotate-180" fill="#022069" />
              Nosso objetivo é proporcionar aos nossos clientes uma experiência
              cheia de amor e atenção, cuidando de cada detalhe para tornar tudo
              mais leve e especial. Nosso trabalho vai além de simplesmente
              realizar um evento; é sobre criar um ambiente acolhedor, alegre e
              personalizado, garantindo que cada momento se torne uma memória
              inesquecível.”
            </h3>
            <p className=" text-[#DFB955] font-semibold">
              Tatiana Judice, fundadora da B4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
