const plans = [
  {
    name: "Экспресс-подготовка",
    description: "Для тех, кому нужно быстро подтянуть конкретную тему",
    duration: "60 минут",
    price: "2 500 ₽",
    audience: "Ученики 9–11 классов",
    features: ["Разбор одной темы", "Домашнее задание", "Консультация в чате"],
    highlighted: false,
  },
  {
    name: "Комплексный курс",
    description: "Стандартный вариант для системной подготовки",
    duration: "90 минут",
    price: "3 500 ₽",
    audience: "Ученики 7–11 классов, ОГЭ/ЕГЭ",
    features: ["Индивидуальный план", "Пробники каждый месяц", "Проверка ДЗ", "Поддержка в Telegram"],
    highlighted: true,
  },
  {
    name: "Интенсив",
    description: "Для самых целеустремлённых абитуриентов",
    duration: "90 минут + проверка ДЗ",
    price: "5 000 ₽",
    audience: "Абитуриенты, цель 90+ баллов",
    features: ["Ежедневная проверка ДЗ", "2 занятия в неделю", "Разбор вариантов ФИПИ", "Приоритетная запись"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="prices" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Как проходят занятия и сколько это стоит
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Первое занятие-знакомство — бесплатно
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? "border-indigo-300 bg-white shadow-xl shadow-indigo-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Популярный
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
              <p className="mt-6 text-4xl font-bold text-indigo-700">{plan.price}</p>
              <p className="text-sm text-slate-500">за занятие</p>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Формат:</span> {plan.duration}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Для кого:</span> {plan.audience}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-indigo-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
