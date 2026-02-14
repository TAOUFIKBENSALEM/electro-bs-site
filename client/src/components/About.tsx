import { CheckCircle2 } from "lucide-react";

/**
 * About Component
 * Design: Minimalisme Industriel Moderne
 * - Texte et statistiques
 * - Avantages avec icônes
 * - Mise en page asymétrique
 */

const advantages = [
  "Équipe d'experts certifiés et expérimentés",
  "Interventions rapides et fiables 24h/24",
  "Solutions sur mesure adaptées à vos besoins",
  "Respect des normes de sécurité et d'environnement",
  "Garantie sur tous nos travaux",
  "Devis gratuit et sans engagement",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
              À Propos d'Électro BS
            </h2>

            <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
              Depuis plusieurs années, Électro BS s'impose comme un acteur incontournable
              dans le domaine de l'électricité générale, industrielle et des solutions
              domotiques. Notre engagement envers l'excellence et l'innovation nous permet
              de fournir des services de qualité supérieure à nos clients.
            </p>

            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Nous combinons expertise technique, équipements modernes et une approche
              client-centrée pour transformer vos projets en réalité. Chaque intervention
              est menée avec professionnalisme et rigueur.
            </p>

            {/* Advantages List */}
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-inter">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-primary">
              <div className="text-5xl font-bold text-primary font-poppins mb-2">
                15+
              </div>
              <p className="text-lg text-foreground font-semibold font-poppins">
                Années d'expérience
              </p>
              <p className="text-muted-foreground font-inter">
                Un savoir-faire reconnu dans le secteur
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-accent">
              <div className="text-5xl font-bold text-accent font-poppins mb-2">
                500+
              </div>
              <p className="text-lg text-foreground font-semibold font-poppins">
                Clients satisfaits
              </p>
              <p className="text-muted-foreground font-inter">
                Résidentiels, commerciaux et industriels
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-primary">
              <div className="text-5xl font-bold text-primary font-poppins mb-2">
                1000+
              </div>
              <p className="text-lg text-foreground font-semibold font-poppins">
                Projets réalisés
              </p>
              <p className="text-muted-foreground font-inter">
                De l'installation à la maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
