import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Server configuration issue. Missing API key." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message, company } = body;

    // Honeypot — bots fill the hidden company field
    if (company) {
      return Response.json({ ok: true }); // silently discard
    }

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.CONTACT_TO],
      replyTo: email,
      subject: `New message from ${name} — kactusman.dev`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;background:#020202;color:#F1FEC8;padding:32px;border-radius:8px;">
          <p style="font-size:11px;letter-spacing:0.2em;color:#C6FF34;text-transform:uppercase;margin:0 0 24px">// kactusman/contact.exe — new signal received</p>
          <h2 style="margin:0 0 20px;font-size:22px;color:#F1FEC8;">${name}</h2>
          <p style="margin:0 0 6px;font-size:12px;color:#D2C3F6;">Reply-to: <a href="mailto:${email}" style="color:#82D5E5;">${email}</a></p>
          <hr style="border:none;border-top:1px solid #23212C;margin:20px 0;" />
          <p style="font-size:14px;line-height:1.7;color:#F1FEC8;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #23212C;margin:24px 0;" />
          <p style="font-size:10px;color:#D2C3F6;letter-spacing:0.15em;">SENT VIA kactusman.dev CONTACT FORM</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { error: "Transmission failed. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json(
      { error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
