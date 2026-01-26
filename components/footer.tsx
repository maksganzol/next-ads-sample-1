import Link from "next/link"

const footerLinks = [
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Команда", href: "#team" },
      { label: "Карьера", href: "#" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { label: "Разработка", href: "#services" },
      { label: "Дизайн", href: "#services" },
      { label: "Консалтинг", href: "#" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Написать нам", href: "#contacts" },
      { label: "Telegram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              Pulse
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Создаем цифровые продукты, которые помогают бизнесу расти и развиваться
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2026 Pulse. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
