import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Новое: Запуск версии 2.0
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto text-balance leading-tight">
          Инновационные решения для вашего бизнеса
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Мы помогаем компаниям создавать цифровые продукты, которые меняют рынок и впечатляют пользователей
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button size="lg" className="rounded-full px-8 gap-2">
            Начать проект
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
            Узнать больше
          </Button>
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">
            Нам доверяют более 200 компаний
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Yandex", "VK", "Tinkoff", "Ozon", "Sber"].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground/60">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
