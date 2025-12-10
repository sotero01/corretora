import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CondoSection } from "@/components/CondoSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CondoSection />
      </main>
      <Footer />
      <WhatsAppButton floating />
    </div>
  );
};

export default Index;
