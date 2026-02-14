import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Minimalisme Industriel Moderne
 * 
 * Structure:
 * - Header: Navigation épurée
 * - Hero: Bannière électrique avec CTA
 * - Services: Cards avec images générées
 * - About: Statistiques et avantages
 * - Contact: Formulaire et informations
 * - Footer: Liens et contact
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
