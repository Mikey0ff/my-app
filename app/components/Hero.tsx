import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            Репетитор по математике
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Подготовка к ЕГЭ по математике на 80+ баллов
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Выпускник МГУ с 10-летним опытом. Помогу разобраться в сложных темах
            и полюбить предмет. Готовлю к экзаменам и повышаю успеваемость.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl"
            >
              Записаться на первое занятие
            </a>
            <a
              href="#prices"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-indigo-300 hover:text-indigo-700"
            >
              Узнать расписание
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-indigo-700">200+</p>
              <p className="text-sm text-slate-500">учеников</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-700">84</p>
              <p className="text-sm text-slate-500">средний балл ЕГЭ</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-700">10 лет</p>
              <p className="text-sm text-slate-500">опыта</p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/repetitor.jpg"
              alt="Анна Петрова — репетитор по математике"
              width={600}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
