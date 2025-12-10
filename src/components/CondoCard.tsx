import { useState } from "react";
import { MapPin, Home, MessageCircle, User, Send, X } from "lucide-react";

interface CondoCardProps {
  name: string;
  location: string;
  description: string;
  features: string[];
  image: string;
  index: number;
}

const WHATSAPP_NUMBER = "5585999603325";

export const CondoCard = ({ name, location, description, features, image, index }: CondoCardProps) => {
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  const handleSaibaMaisClick = () => {
    setShowNameInput(true);
  };

  const handleSendWhatsApp = () => {
    const trimmedName = userName.trim();
    const message = trimmedName 
      ? `Olá! Meu nome é *${trimmedName}* e estou interessado(a) no empreendimento *${name}*. Gostaria de mais informações.`
      : `Olá! Estou interessado(a) no empreendimento *${name}*. Gostaria de mais informações.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowNameInput(false);
    setUserName("");
  };

  const handleCancel = () => {
    setShowNameInput(false);
    setUserName("");
  };

  return (
    <article 
      className="card-condo animate-fade-in-up"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden group">
        <img
          src={image}
          alt={`${name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          {name}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-xs rounded-full border border-border/50"
            >
              <Home className="w-3 h-3 text-primary" />
              {feature}
            </span>
          ))}
        </div>
        
        {/* Name Input (appears on click) */}
        {showNameInput ? (
          <div className="space-y-3 animate-fade-in">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Digite seu nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                maxLength={100}
                autoFocus
                className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex-1 py-3 px-4 bg-secondary/50 border border-border/50 rounded-lg text-muted-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancelar
              </button>
              <button
                onClick={handleSendWhatsApp}
                className="flex-1 btn-whatsapp justify-center"
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSaibaMaisClick}
            className="btn-whatsapp w-full justify-center"
          >
            <MessageCircle className="w-5 h-5" fill="currentColor" />
            <span>Fale com um especialista</span>
          </button>
        )}
      </div>
    </article>
  );
};
