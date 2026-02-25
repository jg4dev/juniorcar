"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Manutenção Automotiva com Qualidade e Confiança
            </h1>

            <p className="text-base md:text-lg text-neutral-400 mb-8 max-w-xl">
              Especialistas em revisão, suspensão, freios e diagnóstico eletrônico.
              Cuidamos do seu veículo com profissionalismo e transparência.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/5579999904384"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md transition-all duration-300 text-sm md:text-base"
              >
                Fale pelo WhatsApp
              </a>

              <Link
                href="/servicos"
                className="border border-neutral-700 hover:border-red-600 px-5 py-2.5 rounded-md transition-all duration-300 text-sm md:text-base"
              >
                Ver Serviços
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <h2 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-[-0.02em]">
              <span className="text-white">Junior</span>
              <br />
              <span className="text-red-600">Car</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto col-span-2 mt-16">

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Nossos Serviços
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-neutral-800/70 backdrop-blur p-6 rounded-xl hover:bg-neutral-800 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Revisão Completa</h3>
                <p className="text-neutral-400 text-sm">
                  Inspeção detalhada para garantir o bom funcionamento e segurança
                  do seu veículo.
                </p>
              </div>

              <div className="bg-neutral-800/70 backdrop-blur p-6 rounded-xl hover:bg-neutral-800 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Suspensão e Freios</h3>
                <p className="text-neutral-400 text-sm">
                  Manutenção especializada para estabilidade e segurança.
                </p>
              </div>

              <div className="bg-neutral-800/70 backdrop-blur p-6 rounded-xl hover:bg-neutral-800 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">
                  Diagnóstico Eletrônico
                </h3>
                <p className="text-neutral-400 text-sm">
                  Tecnologia moderna para identificar falhas com precisão.
                </p>
              </div>

            </div>

            <div className="max-w-5xl mx-auto text-center mt-20">

              <h2 className="text-2xl md:text-3xl font-bold mb-12">
                Por que escolher a Junior Car?
              </h2>

              <div className="grid md:grid-cols-4 gap-8 text-neutral-400">

                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                    ✔ Profissionais Qualificados
                  </h4>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                    ✔ Atendimento Transparente
                  </h4>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                    ✔ Equipamentos Modernos
                  </h4>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                    ✔ Compromisso com Qualidade
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}