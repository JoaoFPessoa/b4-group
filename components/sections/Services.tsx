import { PartyPopper } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20  relative">
      {/* Lemons Image */}
      <div className=" absolute bottom-12 -right-12 -z-10 xl:z-10 opacity-35">
        <Image
          src={"/services/lemons.png"}
          width={500}
          height={500}
          alt="Lemons"
        />
      </div>
      <div className="container  max-w-8xl relative">
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
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-bottom"></div>

            <CardContent className="p-6 pt-8 ">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon01.png"}
                  width={45}
                  height={45}
                />
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
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-top"></div>
            <CardContent className="p-6 pt-8">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon02.png"}
                  width={45}
                  height={45}
                />{" "}
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
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-center"></div>
            <CardContent className="p-6 pt-8">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon03.png"}
                  width={45}
                  height={45}
                />{" "}
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
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-top"></div>
            <CardContent className="p-6 pt-8">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon04.png"}
                  width={45}
                  height={45}
                />{" "}
              </div>
              <h3 className="text-xl font-bold text-[#022069] mb-2">
                Casa & Cheers
              </h3>
              <p className="text-[#93B1BD]">
                Celebre novas conquistas, como a casa nova ou momentos
                especiais, com um brinde e boa companhia. Um evento descontraído
                e cheio de boas vibrações.
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
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-bottom"></div>
            <CardContent className="p-6 pt-8">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon05.png"}
                  width={45}
                  height={45}
                />{" "}
              </div>
              <h3 className="text-xl font-bold text-[#022069] mb-2">
                Viagens de família ou amigos
              </h3>
              <p className="text-[#93B1BD]">
                Viaje e crie memórias duradouras com aqueles que você mais ama.
                Seja para um destino tranquilo ou uma grande aventura, esses
                momentos são perfeitos para fortalecer os laços.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white rounded-xl overflow-hidden">
            <div className="h-3 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-center"></div>
            <CardContent className="p-6 pt-8">
              <div className="h-16 w-16 rounded-full bg-[#022069]/10 flex items-center justify-center mb-4 group-hover:bg-[#022069]/20 transition-colors">
                <Image
                  alt=""
                  src={"/services/icons/icon06.png"}
                  width={45}
                  height={45}
                />{" "}
              </div>
              <h3 className="text-xl font-bold text-[#022069] mb-2">
                Coorporativos com B4 Company
              </h3>
              <p className="text-[#93B1BD]">
                Eventos corporativos organizados para criar conexões importantes
                e promover crescimento profissional, com a expertise e o cuidado
                da B4 Company.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
