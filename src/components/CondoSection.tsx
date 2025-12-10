import { CondoCard } from "./CondoCard";
import condoPopArt from "@/assets/condo-popart.png";
import condoBella from "@/assets/condo-bella.png";
import condoOcean from "@/assets/condo-ocean.png";
import condoMood from "@/assets/condo-mood.png";

const condominiums = [
  {
    name: "Pop Art Eusébio",
    location: "Eusébio, CE",
    description: "Aqui sua vida ganha mais expressão. Um empreendimento moderno e vibrante, projetado para famílias que buscam qualidade de vida com design contemporâneo e infraestrutura completa.",
    features: ["2 e 3 Quartos", "Área de Lazer", "Segurança 24h", "Varanda Gourmet"],
    image: condoPopArt,
  },
  {
    name: "Bella Aldeota",
    location: "Aldeota, Fortaleza - CE",
    description: "Mundo Urban, Mundo Parque, Mundo Praia. Três conceitos em um único endereço privilegiado na Aldeota, oferecendo o melhor da vida urbana com sofisticação e conforto.",
    features: ["Localização Nobre", "Alto Padrão", "Lazer Completo", "Acabamento Premium"],
    image: condoBella,
  },
  {
    name: "Ocean Club Residence",
    location: "Porto das Dunas, Aquiraz - CE",
    description: "A beira-mar que você sempre sonhou. Residencial exclusivo em uma das praias mais desejadas do Ceará, com vista privilegiada para o mar e acesso direto à praia.",
    features: ["Beira-Mar", "Vista para o Mar", "Piscina Infinita", "Espaço Gourmet"],
    image: condoOcean,
  },
  {
    name: "Mood Praia",
    location: "Região Praiana, CE",
    description: "Seu mood é praia. Um empreendimento contemporâneo que captura a essência do lifestyle praiano, perfeito para quem busca tranquilidade sem abrir mão da modernidade.",
    features: ["Próximo à Praia", "Design Moderno", "Área Verde", "Academia"],
    image: condoMood,
  },
];

export const CondoSection = () => {
  return (
    <section id="empreendimentos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Portfólio Exclusivo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Nossos Empreendimentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os melhores lançamentos imobiliários do Ceará. Clique em "Ver Mais" para conhecer os detalhes de cada empreendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {condominiums.map((condo, index) => (
            <CondoCard
              key={condo.name}
              {...condo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
