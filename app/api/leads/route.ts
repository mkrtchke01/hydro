import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "png"]);

export async function POST(request: Request) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Отправка еще не настроена. Укажите LEAD_WEBHOOK_URL в настройках проекта." },
      { status: 503 },
    );
  }

  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const consent = formData.get("consent");
  const attachment = formData.get("attachment");

  if (!name || !phone || !consent) {
    return NextResponse.json({ message: "Заполните обязательные поля." }, { status: 400 });
  }

  if (attachment instanceof File && attachment.size > 0) {
    const extension = attachment.name.split(".").pop()?.toLowerCase() || "";
    if (attachment.size > MAX_FILE_SIZE || !ALLOWED_EXTENSIONS.has(extension)) {
      return NextResponse.json({ message: "Проверьте формат файла и лимит 4 МБ." }, { status: 400 });
    }
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    body: formData,
    headers: { "User-Agent": "hydro-nextjs-lead-form/1.0" },
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ message: "CRM временно не приняла заявку. Попробуйте позже." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
