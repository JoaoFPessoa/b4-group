import { Quote } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="my-24 bg-accent h-full relative overflow-hidden"
    >
      <div className="relative h-full">
        <div className="grid md:grid-cols-[40%_60%] gap-12  items-stretch">
          <div className="h-full  order-2 md:order-1 flex">
            <Image
              src="/about-section.png"
              alt="Our fun team planning an event"
              width={400}
              height={400}
              className="shadow-xl w-full h-[700px] object-cover"
            />
          </div>

          <div className="h-full flex flex-col p-4 mr-12 justify-center order-1 md:order-2">
            <span className="text-[#022069]  text-3xl lg:text-7xl">Sobre</span>

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
            <h3 className=" text-[#022069]  mb-2 mt-12">
              <Quote className="transform rotate-180" fill="#022069" />
              Nosso objetivo é proporcionar aos nossos clientes uma experiência
              cheia de amor e atenção, cuidando de cada detalhe para tornar tudo
              mais leve e especial. Nosso trabalho vai além de simplesmente
              realizar um evento; é sobre criar um ambiente acolhedor, alegre e
              personalizado, garantindo que cada momento se torne uma memória
              inesquecível.”
            </h3>
            <p className="text-primary font-bold">
              Tatiana Judice, fundadora da B4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
