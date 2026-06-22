"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/Icon";

interface LeadFormProps {
  fileLabel: string;
}

const MAX_FILE_SIZE = 4 * 1024 * 1024;

export function LeadForm({ fileLabel }: LeadFormProps) {
  const [fileName, setFileName] = useState("PDF, DOCX, XLSX, JPG, PNG — до 4 МБ");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setSubmitting(true);
    setStatus("Отправляем…");
    try {
      const response = await fetch("/api/leads", { method: "POST", body: new FormData(form) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Не удалось отправить заявку.");
      form.reset();
      setFileName("PDF, DOCX, XLSX, JPG, PNG — до 4 МБ");
      setStatus("Заявка отправлена. Мы свяжемся с вами.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Не удалось отправить заявку.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="lead-form" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Имя<input name="name" autoComplete="name" placeholder="Как к вам обращаться" required /></label>
        <label>Телефон<input name="phone" type="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" required /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="name@company.ru" /></label>
      <label>Опишите задачу<textarea name="message" rows={4} placeholder="Назначение, параметры, сроки и другие исходные данные" /></label>
      <label className="file-field">
        <Icon name="upload" />
        <span><strong>{fileLabel}</strong><small>{fileName}</small></span>
        <input
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            if (file.size > MAX_FILE_SIZE) {
              event.target.value = "";
              setFileName("Файл превышает лимит 4 МБ");
              return;
            }
            setFileName(file.name);
          }}
        />
      </label>
      <label className="consent"><input name="consent" type="checkbox" required /><span>Согласен на обработку персональных данных</span></label>
      <button className="button button--submit" type="submit" disabled={submitting}>Отправить заявку <Icon name="arrow" /></button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
