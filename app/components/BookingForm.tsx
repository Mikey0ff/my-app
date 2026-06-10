"use client";

import { FormEvent, useMemo, useState } from "react";

const subjects = ["Математика", "Русский язык", "Английский язык", "Физика", "Информатика"];
const goals = ["Подготовка к ЕГЭ", "Подготовка к ОГЭ", "Повышение успеваемости", "Высшая математика"];
const contactTimes = ["Утро (9:00–12:00)", "День (12:00–17:00)", "Вечер (17:00–21:00)"];
const TIME_SLOTS = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:30"];

function getAvailableDates(): { value: string; label: string }[] {
  const dates: { value: string; label: string }[] = [];
  const today = new Date();

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() === 0) continue;

    const value = date.toISOString().split("T")[0];
    const label = date.toLocaleDateString("ru-RU", {
      weekday: "short",
      day: "numeric",
      month: "long",
    });
    dates.push({ value, label });
  }

  return dates;
}

export default function BookingForm() {
  const availableDates = useMemo(() => getAvailableDates(), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [contactTime, setContactTime] = useState(contactTimes[0]);
  const [date, setDate] = useState(availableDates[0]?.value ?? "");
  const [timeSlot, setTimeSlot] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="booking" className="bg-indigo-600 py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center text-white">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Запишитесь на первое занятие
          </h2>
          <p className="mt-4 text-indigo-100">
            Это бесплатно. На занятии мы познакомимся, определим ваш текущий уровень
            и составим план подготовки.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Ваше имя *
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Ваш e-mail *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                placeholder="mail@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
              Ваш телефон *
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700">
                Предмет *
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="goal" className="mb-1.5 block text-sm font-medium text-slate-700">
                Класс / Цель *
              </label>
              <select
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              >
                {goals.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contactTime" className="mb-1.5 block text-sm font-medium text-slate-700">
              Удобное время для связи *
            </label>
            <select
              id="contactTime"
              value={contactTime}
              onChange={(e) => setContactTime(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              {contactTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-slate-700">
              Выберите дату занятия *
            </label>
            <select
              id="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setTimeSlot("");
              }}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              {availableDates.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">
              Свободные слоты на выбранную дату *
            </p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTimeSlot(slot)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                    timeSlot === slot
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Ваше сообщение
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              placeholder="Скажите пару слов о вашей цели..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-indigo-600 py-3.5 text-base font-semibold text-white transition-all hover:bg-indigo-700"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
