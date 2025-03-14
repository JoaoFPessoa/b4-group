import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Portoflio() {
  return (
    <section
      id="portfolio"
      className="pb-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="h-6 w-full bg-[url('/services/border.png')] bg-cover bg-no-repeat bg-bottom"></div>

      <div className="container relative mt-24">
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
              Eventos gerais
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
              Outros
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
  );
}
