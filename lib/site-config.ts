export const siteConfig = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || "Название компании",
  phone: process.env.NEXT_PUBLIC_PHONE || "+7 (___) ___-__-__",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "sales@example.ru",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Укажите адрес производства",
} as const;
