import Image from "next/image";

const principles = [
  {
    title: "Индивидуальный план",
    description: "Составляю программу под ваш уровень и цели, а не по шаблону.",
    icon: "📋",
  },
  {
    title: "Разбор ошибок",
    description: "Анализируем каждую ошибку, чтобы она больше не повторялась.",
    icon: "🔍",
  },
  {
    title: "Работа на результат",
    description: "Отслеживаем прогресс и корректируем план по ходу подготовки.",
    icon: "🎯",
  },
  {
    title: "Комфортная атмосфера",
    description: "Можно задавать любые вопросы — неловких тем не бывает.",
    icon: "💬",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          Обо мне и мой подход
        </h2>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/student.webp"
              alt="Анна на занятии с учеником"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-slate-600">
              Меня зовут Анна, я преподаю математику уже 12 лет. За это время я помогла
              более 200 ученикам сдать экзамены на высокие баллы. Я верю, что зубрёжка
              формул не работает — поэтому мы разбираем логику, учимся думать и
              применять знания на практике.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Окончила механико-математический факультет МГУ, прошла курсы повышения
              квалификации по методике подготовки к ЕГЭ. Работаю как онлайн, так и очно.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-5 transition-shadow hover:shadow-md"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
