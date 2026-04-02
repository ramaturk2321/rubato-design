import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 });
    }

    // Resend ile mail gönderimi
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Mail servisi yapılandırılmamış" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "Rubato Design <info@rubatodesign.com.tr>",
        to: ["info@eymenreklam.com"],
        subject: `Rubato Design İletişim Formu - ${name}`,
        html: `
          <h2>Rubato Design - Yeni İletişim Formu Mesajı</h2>
          <p><strong>İsim:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Mail gönderilemedi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
