import Link from "next/link";

const directions = [
  {
    number: "01",
    title: "Испытательные стенды",
    text: "Разработка стендов для проверки, диагностики и приемо-сдаточных испытаний.",
    href: "/test-stands",
  },
  {
    number: "02",
    title: "Гидростанции",
    text: "Подбор и изготовление станций под рабочие параметры и схему оборудования.",
    href: "/hydraulic-stations",
  },
  {
    number: "03",
    title: "Гидроцилиндры",
    text: "Серийные и нестандартные изделия по параметрам, чертежу или образцу.",
    href: "/hydraulic-cylinders",
  },
] as const;

export default function HomePage() {
  return (
    <main className="hub-page">
      <div className="hub">
        <p className="eyebrow">Три направления производства</p>
        <h1>Инженерные решения для промышленной гидравлики</h1>
        <p className="hub__lead">Выберите направление, чтобы перейти к технической посадочной странице.</p>
        <div className="hub__grid">
          {directions.map((direction) => (
            <Link className="hub-card" href={direction.href} key={direction.href}>
              <span className="hub-card__number">{direction.number}</span>
              <h2>{direction.title}</h2><p>{direction.text}</p><span className="text-link">Открыть страницу →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
