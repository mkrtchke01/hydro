import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Промышленное гидравлическое оборудование",
    template: "%s",
  },
  description: "Производство промышленного гидравлического оборудования под задачи предприятия.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
