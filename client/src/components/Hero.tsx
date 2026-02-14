import { Button } from "@/components/ui/button";

/**
 * Hero Component
 * Design: Minimalisme Industriel Moderne
 * - Bannière avec image générée (circuit électrique)
 * - Texte blanc sur fond sombre pour contraste
 * - CTA prominent avec accent orange
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/mimfcLv8DY6bMbUSipActj/sandbox/WyfJK2Kysy7crx0PG4gGPW-img-1_1771071318000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbWltZmNMdjhEWTZiTWJVU2lwQWN0ai9zYW5kYm94L1d5ZkpLMkt5c3k3Y3J4MFBHNGdHUFctaW1nLTFfMTc3MTA3MTMxODAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rVheLWS0qEt2v6R2PRnFAw~VH6cbx3oWpUtVlt3mcjUyXwrn9LBs8GTiMF5JBYPssfB7HsMDH6uosHuzpcEFzVDDNGb4bg~IgXi3hxHNCgZe~rBCu6KQKDOASI-UbqjMTqsmb7Qf-Jy229bGiqbfqYdQbrd4wfv5H2QvCkxX-aUUKWlCaYfwr3a2YlOToFcZkUtFTbVnimo2oab5QpF-IcwUcD-VniB75o9pPVJ38Sz6Gd7hn56c-FAMmcNtyfF~bTfbXAnARmWzPZfgc6-t19LYVmAxEJ-zVN6xgYfdGsKz3dwqxKPGmcWbM1c~oaSQZeBsFXCzs7Q4j3cJucGhfg__')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
          Votre Partenaire en Électricité et Domotique
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto font-inter">
          Solutions complètes pour l'électricité générale, industrielle, domotique,
          vidéosurveillance et climatisation. Expertise reconnue depuis des années.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-accent hover:bg-[#FF5A1F] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Demander un devis
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300"
            onClick={() => {
              const servicesSection = document.getElementById("services");
              servicesSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Découvrir nos services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
