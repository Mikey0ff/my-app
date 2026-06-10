import Image from "next/image";

const footerLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#prices", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#booking", label: "Записаться" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-bold text-white">Анна Петрова</p>
            <p className="mt-2 text-sm">Репетитор по математике</p>
            <p className="mt-4 text-sm leading-relaxed">
              Подготовка к ЕГЭ, ОГЭ и повышение успеваемости. Онлайн и очно в Москве.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Контакты</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+79991234567" className="transition-colors hover:text-white">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/repetitor_name"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Telegram: @repetitor_name
                </a>
              </li>
              <li>
                <a href="mailto:mail@site.ru" className="transition-colors hover:text-white">
                  mail@site.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Разделы</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-6 border-t border-slate-800 pt-8">
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Image
              src="/icons/tg.svg"
              alt="Telegram"
              width={40}
              height={40}
              className="brightness-0 invert opacity-70 hover:opacity-100"
            />
          </a>
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
          >
            <Image
              src="/icons/vk.svg"
              alt="ВКонтакте"
              width={40}
              height={40}
              className="brightness-0 invert opacity-70 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
