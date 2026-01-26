import { Code2, Palette, Rocket, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Веб-разработка",
    description: "Создаем современные веб-приложения с использованием передовых технологий и лучших практик разработки",
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Проектируем интуитивные интерфейсы, которые пользователи полюбят с первого взгляда",
  },
  {
    icon: Rocket,
    title: "Запуск продуктов",
    description: "Помогаем вывести ваш продукт на рынок быстро и эффективно с полной поддержкой",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Анализируем данные и оптимизируем продукты для достижения максимальных результатов",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Наши услуги
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки цифровых продуктов от идеи до запуска
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
