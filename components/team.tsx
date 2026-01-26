const team = [
  {
    name: "Алексей Петров",
    role: "CEO и основатель",
    initials: "АП",
  },
  {
    name: "Мария Иванова",
    role: "Технический директор",
    initials: "МИ",
  },
  {
    name: "Дмитрий Козлов",
    role: "Ведущий дизайнер",
    initials: "ДК",
  },
  {
    name: "Елена Смирнова",
    role: "Менеджер проектов",
    initials: "ЕС",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Наша команда
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с многолетним опытом в создании цифровых продуктов
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <span className="text-xl font-semibold text-muted-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
