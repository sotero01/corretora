import logoAlfaPrime from "@/assets/logo-alfa-prime.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <img 
          src={logoAlfaPrime} 
          alt="Alfa Prime Imobiliária" 
          className="h-16 md:h-20 object-contain filter brightness-110"
        />
      </div>
    </header>
  );
};
