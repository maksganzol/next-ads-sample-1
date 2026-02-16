import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsGrid } from "@/components/NewsGrid";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NewsGrid />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
