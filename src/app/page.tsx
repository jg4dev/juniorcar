"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
  className="min-h-screen w-full overflow-x-hidden text-white"
  style={{ background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)" }}
>

      <section className="px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          {/* HERO */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-5">
                Manutenção Automotiva com Qualidade e Confiança
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-400 mb-8">
                Especialistas em revisão, suspensão, freios e diagnóstico eletrônico.
                Cuidamos do seu veículo com profissionalismo e transparência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/5579999904384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-base text-center transition-all duration-300"
                >
                  Fale pelo WhatsApp
                </a>

                <Link
                  href="/servicos"
                  className="border border-neutral-700 hover:border-red-600 px-6 py-3 rounded-md text-base text-center transition-all duration-300"
                >
                  Ver Serviços
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-center">
                <span className="block text-white">Junior</span>
                <span className="block text-red-600">Car</span>
              </h2>
            </div>

          </div>

          {/* SERVIÇOS */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
              Nossos Serviços
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-neutral-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Revisão Completa</h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  Inspeção detalhada para garantir o bom funcionamento e segurança do seu veículo.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Suspensão e Freios</h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  Manutenção especializada para estabilidade e segurança.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">
                  Diagnóstico Eletrônico
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  Tecnologia moderna para identificar falhas com precisão.
                </p>
              </div>
            </div>
          </div>

          {/* DIFERENCIAIS */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
              Por que escolher a Junior Car?
            </h2>

            <div className="grid gap-6 md:grid-cols-4 text-neutral-400 text-center text-base">
              <div>✔ Profissionais Qualificados</div>
              <div>✔ Atendimento Transparente</div>
              <div>✔ Equipamentos Modernos</div>
              <div>✔ Compromisso com Qualidade</div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}