import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Component
 * Design: Minimalisme Industriel Moderne
 * - Formulaire de contact épuré
 * - Informations de contact avec icônes
 * - CTA prominent
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Votre demande a été envoyée avec succès ! Nous vous recontacterons rapidement."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            Nous Contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Vous avez un projet ? Demandez votre devis gratuit dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
              Téléphone
            </h3>
            <p className="text-muted-foreground font-inter">
              +33 (0) 1 23 45 67 89
            </p>
            <p className="text-sm text-muted-foreground font-inter mt-1">
              Lun-Ven: 8h-18h
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
              Email
            </h3>
            <p className="text-muted-foreground font-inter">
              contact@electro-bs.fr
            </p>
            <p className="text-sm text-muted-foreground font-inter mt-1">
              Réponse sous 24h
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
              Adresse
            </h3>
            <p className="text-muted-foreground font-inter">
              123 Rue de l'Électricité
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              75000 Paris, France
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-secondary rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 font-poppins">
                  Nom complet
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="w-full bg-white border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 font-poppins">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@example.com"
                  className="w-full bg-white border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 font-poppins">
                  Téléphone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 (0) 1 23 45 67 89"
                  className="w-full bg-white border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 font-poppins">
                  Service demandé
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="electricite-generale">Électricité générale</option>
                  <option value="electricite-industrielle">
                    Électricité industrielle
                  </option>
                  <option value="domotique">Domotique</option>
                  <option value="surveillance">Vidéosurveillance</option>
                  <option value="climatisation">Climatisation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 font-poppins">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet en détail..."
                rows={5}
                className="w-full bg-white border-border text-foreground placeholder:text-muted-foreground focus:ring-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-[#0052CC] text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>

            <p className="text-center text-sm text-muted-foreground font-inter">
              Nous respectons votre vie privée. Vos données ne seront jamais partagées.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
