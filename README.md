# Промышленные посадочные страницы на Next.js

Проект использует Next.js App Router, React и TypeScript. Три адаптивные страницы собраны на общей компонентной системе:

- `/test-stands/` — испытательные стенды;
- `/hydraulic-stations/` — гидростанции;
- `/hydraulic-cylinders/` — гидроцилиндры.

## Запуск

```powershell
rtk npm install
rtk npm run dev
```

Открыть `http://localhost:3000`.

## Настройка перед публикацией

Скопируйте `.env.example` в `.env.local` и задайте:

- `NEXT_PUBLIC_COMPANY_NAME`;
- `NEXT_PUBLIC_PHONE`;
- `NEXT_PUBLIC_PHONE_HREF`;
- `NEXT_PUBLIC_EMAIL`;
- `NEXT_PUBLIC_ADDRESS`;
- `LEAD_WEBHOOK_URL` — серверный webhook CRM или почтового обработчика.

Форма отправляет `multipart/form-data` через серверный маршрут `/api/leads`. Максимальный размер вложения — 4 МБ.

В карточках производства и кейсов предусмотрены места для реальных фотографий и подтвержденных материалов. Их необходимо заменить перед публикацией.

## Проверка

```powershell
rtk npm run check
rtk npm run build
```
