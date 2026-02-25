"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">

      {/* HERO */}
      <section className="px-5 pt-20 pb-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
              Manutenção Automotiva com Qualidade e Confiança
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-6">
              Especialistas em revisão, suspensão, freios e diagnóstico eletrônico.
              Cuidamos do seu veículo com profissionalismo e transparência.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5579999904384"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-5 py-2.5 rounded-md text-sm sm:text-base text-center transition-all"
              >
                Fale pelo WhatsApp
              </a>

              <Link
                href="/servicos"
                className="border border-neutral-700 hover:border-red-600 px-5 py-2.5 rounded-md text-sm sm:text-base text-center transition-all"
              >
                Ver Serviços
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mt-6 md:mt-0">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight text-center">
              <span className="text-white block">Junior</span>
              <span className="text-red-600 block">Car</span>
            </h2>
          </div>

          {/* Serviços */}
          <div className="col-span-1 md:col-span-2 mt-16">

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10">
              Nossos Serviços
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="bg-neutral-800 p-5 rounded-lg">
                <h3 className="text-base font-semibold mb-2">Revisão Completa</h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Inspeção detalhada para garantir o bom funcionamento e segurança do seu veículo.
                </p>
              </div>

              <div className="bg-neutral-800 p-5 rounded-lg">
                <h3 className="text-base font-semibold mb-2">Suspensão e Freios</h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Manutenção especializada para estabilidade e segurança.
                </p>
              </div>

              <div className="bg-neutral-800 p-5 rounded-lg">
                <h3 className="text-base font-semibold mb-2">
                  Diagnóstico Eletrônico
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Tecnologia moderna para identificar falhas com precisão.
                </p>
              </div>

            </div>

            {/* Diferenciais */}
            <div className="mt-16 text-center">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
                Por que escolher a Junior Car?
              </h2>

              <div className="grid gap-6 md:grid-cols-4 text-neutral-400">

                <div className="text-sm sm:text-base">
                  ✔ Profissionais Qualificados
                </div>

                <div className="text-sm sm:text-base">
                  ✔ Atendimento Transparente
                </div>

                <div className="text-sm sm:text-base">
                  ✔ Equipamentos Modernos
                </div>

                <div className="text-sm sm:text-base">
                  ✔ Compromisso com Qualidade
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}