// pages/api/send-to-telegram.js

const BOT_TOKEN = '8791954241:AAEuZwwdr7f6DoT0DxVKfI7JStUAfodfRGE';
const CHAT_ID = '1078133574';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // ... (код формирования formattedMessage остается без изменений)

    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: formattedMessage,
        parse_mode: 'MarkdownV2',
      }),
    });

    // --- ИЗМЕНЕННЫЙ БЛОК ДЛЯ ЛУЧШЕЙ ОТЛАДКИ ---
    if (response.ok) {
      // Если Telegram успешно принял сообщение
      return res.status(200).json({ message: 'Успех' });
    } else {
      // Если Telegram вернул ошибку (например, неверный CHAT_ID)
      const errorData = await response.json(); // Получаем текст ошибки от Telegram API
      console.error('Telegram API Error:', errorData); // Выводим его в консоль сервера (и видим во вкладке Network)
      
      // Отправляем эту ошибку и на фронтенд тоже
      return res.status(response.status).json({ 
        message: 'Ошибка при отправке сообщения', 
        details: errorData.description 
      });
    }
    
  } catch (error) {
    // Эта часть сработает, если вообще не удалось достучаться до Telegram (проблемы с сетью)
    console.error('Server Error:', error);
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
}