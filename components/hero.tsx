import { mainNews } from "@/lib/mockNews";
import { AdZone } from "./AdZone";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main News */}
          <div className="flex-1">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
              <img
                src={mainNews.imageUrl}
                alt={mainNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Главная новость
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {mainNews.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{mainNews.date}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {mainNews.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mainNews.description}
              </p>
            </div>
          </div>

          {/* Ad Zone */}
          <div className="lg:w-[320px] flex flex-col gap-4">
            <AdZone width={300} height={250} className="mx-auto" zoneClass="next-ads-zone-1" id="ad-zone-hero-1" />
            <AdZone width={300} height={250} className="mx-auto" zoneClass="next-ads-zone-2" id="ad-zone-hero-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
