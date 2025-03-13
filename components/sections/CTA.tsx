import { PartyPopper, Snowflake, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function CTA() {
  return (
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
              especial, nossa equipe está pronta para trazer diversão, magia e o
              fator UAU!
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
              <Snowflake className="h-8 w-8 text-[#DFB955]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
