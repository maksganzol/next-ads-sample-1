import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@pulse.ru",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (495) 123-45-67",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Москва, ул. Инновационная, 1",
  },
]

export function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Свяжитесь с нами
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Напишите нам, и мы ответим в течение 24 часов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>
              <Button type="submit" className="rounded-full px-8">
                Отправить
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
