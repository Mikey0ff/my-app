import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      subject,
      goal,
      contactTime,
      date,
      timeSlot,
      message,
    } = await req.json();

    const formattedMessage = `
📚 Новая заявка

👤 Имя: ${name}
📧 Email: ${email}
📱 Телефон: ${phone}

📖 Предмет: ${subject}
🎯 Цель: ${goal}

🕒 Время связи: ${contactTime}

📅 Дата: ${date}
⏰ Слот: ${timeSlot}

💬 Сообщение:
${message || 'Не указано'}
`;

    const test = await fetch(
  `https://api.telegram.org/bot${BOT_TOKEN}/getMe`
);

const text = await test.text();

console.log('TELEGRAM RESPONSE:');
console.log(text);

return NextResponse.json({
  response: text,
});

console.log('TELEGRAM RESPONSE:', data);

return NextResponse.json(data);

    const data = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error(data);

      return NextResponse.json(
        {
          success: false,
          error: data.description,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } 
  catch (error) {
  console.error('SERVER ERROR:', error);

  return NextResponse.json(
    {
      success: false,
      error: error?.message || String(error),
    },
    { status: 500 }
  );
  }
}