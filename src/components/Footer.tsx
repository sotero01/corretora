import { MapPin, Phone, Mail } from "lucide-react";
import logoAlfaPrime from "@/assets/logo-alfa-prime.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logoAlfaPrime} 
            alt="Alfa Prime Imobiliária" 
            className="h-16 mb-6 filter brightness-110"
          />
          
          <p className="text-muted-foreground max-w-md mb-6">
            Sua parceira de confiança na realização do sonho da casa própria. 
            Atendimento personalizado e negociações transparentes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="tel:+5585999603325" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (85) 99960-3325
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/30 w-full text-center">
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} Alfa Prime Imobiliária. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
