import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
    try {
        // Validate required env vars (fail fast with clear server log)
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error(
                'Contact API: Missing Telegram config. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local'
            );
            return NextResponse.json(
                { error: 'Failed to send message' },
                { status: 500 }
            );
        }

        const body = await req.json();
        const { name, email, subject, message } = body;

        // Format message for Telegram (plain text; no parse_mode to avoid issues with < & in user content)
        const telegramMessage = `
🔔 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message}

📅 Date: ${new Date().toLocaleString()}
    `.trim();

        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramMessage,
                }),
            }
        );

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            console.error('Telegram API error:', response.status, data);
            return NextResponse.json(
                { error: 'Failed to send message' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
} 