import {
  Heart,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DFB955] via-[#022069] to-[#93B1BD]"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#022069]/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#DFB955]/5 blur-3xl"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="fancy-font text-[#DFB955] text-3xl">Diga Oi!</span>
            <PartyPopper className="h-5 w-5 text-[#DFB955]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#022069] mt-2">
            Vamos conversar sobre sua festa!
          </h2>
          <p className="text-[#93B1BD] mt-4 max-w-2xl mx-auto">
            Tem dúvidas ou está pronto para começar a planejar seu próximo
            evento incrível? Envie uma mensagem e nós responderemos mais rápido
            do que você pode dizer &quot;HORA DA FESTA!&quot;
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
                Você sabia? A pessoa média passa mais de 2.000 horas de sua vida
                em festas e celebrações! Vamos fazer essas horas valerem a pena
                com experiências inesquecíveis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
