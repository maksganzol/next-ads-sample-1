export interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const mainNews: NewsItem = {
  id: 1,
  title: "Прорыв в области искусственного интеллекта: новая модель превзошла человеческие способности",
  description: "Исследователи представили революционную систему ИИ, которая демонстрирует способности к решению сложных задач на уровне, превосходящем человеческий.",
  category: "Технологии",
  date: "16 февраля 2026",
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
};

export const newsList: NewsItem[] = [
  {
    id: 2,
    title: "Новый закон о цифровых правах вступает в силу",
    description: "Парламент утвердил законопроект, защищающий права граждан в цифровом пространстве.",
    category: "Политика",
    date: "16 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Российская команда выиграла золото на чемпионате мира",
    description: "Сборная России одержала уверенную победу в финале международного турнира.",
    category: "Спорт",
    date: "15 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Открылась выставка современного искусства в Третьяковской галерее",
    description: "Экспозиция представляет работы более 50 современных художников из разных стран.",
    category: "Культура",
    date: "15 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1577083553085-39b8c76b2c98?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Новая вакцина показала 95% эффективность в клинических испытаниях",
    description: "Разработчики объявили о успешном завершении третьей фазы испытаний.",
    category: "Наука",
    date: "14 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Рубль укрепился к доллару на фоне роста цен на нефть",
    description: "Национальная валюта показывает стабильный рост третий день подряд.",
    category: "Экономика",
    date: "14 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "Запущен первый квантовый компьютер для коммерческого использования",
    description: "Технологический гигант представил систему, доступную для бизнес-клиентов.",
    category: "Технологии",
    date: "13 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "Экологи предупреждают о критическом состоянии Байкала",
    description: "Ученые призывают к срочным мерам по сохранению уникальной экосистемы озера.",
    category: "Экология",
    date: "13 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Премьера долгожданного фильма собрала рекордную кассу",
    description: "Кинолента заработала более 2 миллиардов рублей за первые выходные проката.",
    category: "Культура",
    date: "12 февраля 2026",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop"
  }
];

export const categories = [
  { id: 1, name: "Политика", icon: "Users" },
  { id: 2, name: "Технологии", icon: "Cpu" },
  { id: 3, name: "Спорт", icon: "Trophy" },
  { id: 4, name: "Культура", icon: "Palette" },
  { id: 5, name: "Экономика", icon: "TrendingUp" },
  { id: 6, name: "Наука", icon: "Microscope" },
];
