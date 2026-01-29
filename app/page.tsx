import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import NextAdsScript from "@/components/NextAdsScript";
import TestAdZone from "@/components/TestAdZone";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main style={{ position: "relative" }}>
        <TestAdZone />
        <Hero />
        <Services />
        <Team />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
