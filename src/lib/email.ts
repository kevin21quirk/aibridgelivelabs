import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import { Ticket } from './db';
import { formatAmount } from './ticket';

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT ?? '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
}

export async function sendTicketEmail(ticket: Ticket): Promise<void> {
  const baseUrl = process.env.APP_BASE_URL ?? 'https://ai-bridge-live-labs.vercel.app';
  const checkInUrl = `${baseUrl}/admin/checkin/${ticket.secure_token}`;

  const qrBuffer = await QRCode.toBuffer(checkInUrl, {
    width: 280,
    margin: 2,
    errorCorrectionLevel: 'M',
    color: { dark: '#000000', light: '#ffffff' },
  });

  const amountStr = formatAmount(ticket.amount_paid, ticket.currency);

  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"AI Bridge Solutions" <${process.env.SMTP_FROM ?? 'kevin@aibridgesolutions.co.uk'}>`,
    to: ticket.buyer_email,
    subject: 'Your AI Bridge Live Labs Ticket — 2 September 2026',
    html: buildEmailHtml(ticket, amountStr),
    attachments: [
      {
        filename: 'ticket-qr.png',
        content: qrBuffer,
        cid: 'qrcode@aibridge',
        contentType: 'image/png',
      },
    ],
  });
}

function buildEmailHtml(ticket: Ticket, amountStr: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Your AI Bridge Live Labs Ticket</title>
</head>
<body style="margin:0;padding:0;background:#0f1117;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;padding:40px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header gradient -->
      <tr>
        <td style="background:linear-gradient(135deg,#4f46e5,#06b6d4);padding:36px 40px 28px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#fff;font-size:26px;font-weight:800;margin:0 0 6px;letter-spacing:-0.5px;">AI Bridge Live Labs</h1>
          <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0;">Presented by AI Bridge Solutions &amp; Firstname Communications</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#1a1d2e;padding:36px 40px;">

          <p style="color:#e2e8f0;font-size:16px;margin:0 0 8px;">Hi ${escHtml(ticket.buyer_name)},</p>
          <p style="color:#94a3b8;font-size:15px;line-height:1.7;margin:0 0 28px;">
            Your ticket for <strong style="color:#e2e8f0;">AI Bridge Live Labs</strong> is confirmed.
            Please show the QR code below at the registration desk on the day.
          </p>

          <!-- Event details box -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;border:1px solid rgba(79,70,229,0.3);border-radius:10px;margin-bottom:24px;">
            <tr><td style="padding:20px 24px 0;">
              <p style="color:#22d3ee;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 14px;">Event Details</p>
            </td></tr>
            <tr><td style="padding:0 24px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#64748b;font-size:12px;display:block;">Event</span>
                  <span style="color:#e2e8f0;font-size:15px;font-weight:600;">AI Bridge Live Labs</span>
                </td></tr>
                <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#64748b;font-size:12px;display:block;">Date</span>
                  <span style="color:#e2e8f0;font-size:15px;font-weight:600;">Tuesday, 2 September 2026</span>
                </td></tr>
                <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <span style="color:#64748b;font-size:12px;display:block;">Registration</span>
                  <span style="color:#e2e8f0;font-size:15px;font-weight:600;">Doors open 8:30am</span>
                </td></tr>
                <tr><td style="padding:8px 0;">
                  <span style="color:#64748b;font-size:12px;display:block;">Sessions</span>
                  <span style="color:#e2e8f0;font-size:14px;">Introduction to AI &nbsp;·&nbsp; PR in the Age of AI &nbsp;·&nbsp; Live App Build</span>
                </td></tr>
              </table>
            </td></tr>
          </table>

          <!-- Ticket reference -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(79,70,229,0.15),rgba(6,182,212,0.1));border:1px solid rgba(79,70,229,0.3);border-radius:10px;margin-bottom:28px;">
            <tr><td style="padding:20px 24px;">
              <p style="color:#22d3ee;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 6px;">Ticket Reference</p>
              <p style="color:#fff;font-size:22px;font-weight:800;margin:0 0 4px;letter-spacing:0.05em;font-family:monospace,monospace;">${escHtml(ticket.ticket_code)}</p>
              <p style="color:#64748b;font-size:13px;margin:0;">${amountStr} &nbsp;·&nbsp; General Admission</p>
            </td></tr>
          </table>

          <!-- QR code -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr><td align="center">
              <p style="color:#94a3b8;font-size:14px;margin:0 0 14px;">&#128241; Please show this QR code at registration</p>
              <div style="background:#fff;display:inline-block;padding:14px;border-radius:10px;line-height:0;">
                <img src="cid:qrcode@aibridge" alt="Ticket QR Code" width="220" height="220" style="display:block;">
              </div>
            </td></tr>
          </table>

          <p style="color:#64748b;font-size:13px;line-height:1.6;margin:0;border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;">
            This ticket is non-transferable and valid for one entry only.
            Please keep this email safe — it is your proof of purchase.
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#0f1117;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);border-radius:0 0 12px 12px;text-align:center;">
          <p style="color:#475569;font-size:13px;margin:0 0 6px;">
            Questions? <a href="mailto:support@aibridgesolutions.co.uk" style="color:#22d3ee;text-decoration:none;">support@aibridgesolutions.co.uk</a>
          </p>
          <p style="color:#334155;font-size:11px;margin:0;">AI Bridge Solutions &nbsp;·&nbsp; Firstname Communications</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
