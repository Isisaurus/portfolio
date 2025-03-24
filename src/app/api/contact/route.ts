import * as sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

export async function POST(req: Request) {
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
    const body = await req.json();
    const { email, subject, message } = body;

    const msg = {
      to: 'dianavitanyi@gmail.com',
      from: 'dianavitanyi@gmail.com',
      subject: 'Portfolio Website -' + subject + '-' + email,
      text: message,
      html: '<strong>and some html</strong>',
    };
    const [res] = await sgMail.send(msg);
    if (res.statusCode.toString().startsWith('2')) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      throw new Error('Sendgrid error', res.body);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ success: true }, { status: 200 });
}
