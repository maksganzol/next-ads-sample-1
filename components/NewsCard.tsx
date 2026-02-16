import { NewsItem } from "@/lib/mockNews";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
            {news.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{news.date}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {news.description}
        </p>
      </div>
    </article>
  );
}
