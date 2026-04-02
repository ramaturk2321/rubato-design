"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          İsim *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="İsim ve Soyisim"
          className="w-full px-4 py-3 bg-white border-0 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Mail adresiniz *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Mail adresiniz"
          className="w-full px-4 py-3 bg-white border-0 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark/30"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1">
          Telefon Numaranız *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Telefon Numaranız"
          className="w-full px-4 py-3 bg-white border-0 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Mesajınız"
          className="w-full px-4 py-3 bg-white border-0 text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-dark/30 resize-vertical"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-dark text-brand-yellow font-bold px-8 py-3 hover:bg-brand-dark/80 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Gönderiliyor..." : "Gönder"}
      </button>

      {status === "success" && (
        <p className="text-green-800 font-semibold">Teşekkür ederiz! Mesajınız alındı.</p>
      )}
      {status === "error" && (
        <p className="text-red-800 font-semibold">Bir hata oluştu. Lütfen tekrar deneyin.</p>
      )}
    </form>
  );
}
