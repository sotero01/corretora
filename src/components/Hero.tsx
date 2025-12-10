import logoAlfaPrime from "@/assets/logo-alfa-prime.png";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="container mx-auto text-center max-w-4xl animate-fade-in-up">
        <img 
          src={logoAlfaPrime} 
          alt="Alfa Prime Imobiliária" 
          className="h-32 md:h-40 mx-auto mb-8 filter brightness-110"
        />
        
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Especialistas em</span>{" "}
          <span className="text-gradient">Realizar Sonhos</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Há anos no mercado imobiliário, a <strong className="text-primary">Alfa Prime Imobiliária</strong> é 
          referência em seriedade, transparência e compromisso. Trabalhamos com dedicação para encontrar 
          o imóvel perfeito para você e sua família, garantindo segurança em cada negociação.
        </p>
        
        <p className="mt-6 text-muted-foreground/80 text-sm md:text-base">
          Conheça abaixo nossos empreendimentos exclusivos
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
