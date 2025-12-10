import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  condoName?: string;
  floating?: boolean;
  className?: string;
}

const WHATSAPP_NUMBER = "5585999603325";

export const WhatsAppButton = ({ condoName, floating = false, className = "" }: WhatsAppButtonProps) => {
  const message = condoName 
    ? `Olá! Estou interessado(a) no empreendimento *${condoName}*. Gostaria de mais informações.`
    : "Olá! Gostaria de mais informações sobre os imóveis disponíveis.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-whatsapp-float ${className}`}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <MessageCircle className="w-5 h-5" fill="currentColor" />
      <span>Saiba Mais</span>
    </a>
  );
};
