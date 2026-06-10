const reviews = [
  {
    name: "Иван К.",
    role: "ученик 11А класса",
    text: "Анна Сергеевна, спасибо вам огромное! Сдал ЕГЭ на 88 баллов, хотя в начале года был на уровне 60. Занятия были очень интересными!",
    result: "ЕГЭ — 88 баллов",
    initials: "ИК",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Мария С.",
    role: "ученица 9 класса",
    text: "Боялась математики, но после занятий с Анной сдала ОГЭ на 5. Объясняет просто и понятно, всегда терпелива.",
    result: "ОГЭ — отлично",
    initials: "МС",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Дмитрий Л.",
    role: "студент 1 курса",
    text: "Подтянул высшую математику за семестр. Анна помогла разобраться с пределами и интегралами — сдал сессию на отлично.",
    result: "Высшая математика — 5",
    initials: "ДЛ",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Елена В.",
    role: "мама ученика 10 класса",
    text: "Сын перестал бояться контрольных. За полгода оценка выросла с тройки до пятёрки. Рекомендую всем!",
    result: "Оценка: 3 → 5",
    initials: "ЕВ",
    color: "bg-rose-100 text-rose-700",
  },
];

const stats = [
  { value: "84", label: "средний балл ЕГЭ" },
  { value: "95%", label: "учеников сдают на 4+" },
  { value: "200+", label: "выпускников" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Что говорят мои ученики
        </h2>

        <div className="mt-8 flex flex-wrap gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-indigo-50 px-6 py-4 text-center"
            >
              <p className="text-3xl font-bold text-indigo-700">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${review.color}`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
                <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
                  {review.result}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
