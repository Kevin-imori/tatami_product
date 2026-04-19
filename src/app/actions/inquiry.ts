"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject || null,
        message: data.message,
      },
    });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Resendのテスト用送信元
        to: process.env.ADMIN_EMAIL || "admin@example.com",
        subject: `【お問い合わせ】${data.subject || "件名なし"}`,
        text: `お名前: ${data.name}\nメールアドレス: ${data.email}\n\nお問い合わせ内容:\n${data.message}`,
        reply_to: data.email,
      });
    }

    return { success: true, inquiry };
  } catch (error) {
    console.error("Failed to submit inquiry:", error);
    return { success: false, error: "お問い合わせの送信に失敗しました。" };
  }
}
