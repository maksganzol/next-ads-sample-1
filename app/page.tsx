import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NewsGrid } from "@/components/NewsGrid";
//
//
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewsGrid />
      </main>
    </div>
  );
}
