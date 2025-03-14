import { Card, CardContent } from "../ui/card";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to right, white 50%, var(--primary) 50%)",
        backgroundSize: "120px 100%", // Define a largura das listras
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#DFB955]/10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#93B1BD]/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#DACE8E]/10 animate-pulse"></div>
      </div>

      <div className="container flex flex-col items-center relative z-10">
        <div className="text-center bg-white w-fit p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Feedback de clientes
          </h2>
          <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra! Veja o que nossos clientes têm
            a dizer sobre a experiência de festejar conosco!
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
              className="backdrop-blur-sm bg-white border-none rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-2 w-full bg-gradient-to-r from-[#DFB955] to-[#C19636]"></div>
              <CardContent className="p-6 text-primary">
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
                  <p className="italic flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-[#DFB955]/20 flex items-center justify-center mr-4">
                      <span className="text-[#DFB955] font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold ">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
