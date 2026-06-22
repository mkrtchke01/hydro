import type { PageKey } from "@/lib/content";

interface MachineVisualProps {
  pageKey: PageKey;
}

export function MachineVisual({ pageKey }: MachineVisualProps) {
  if (pageKey === "cylinders") {
    return (
      <svg className="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация гидроцилиндра">
        <g className="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370" /></g>
        <g className="machine-svg__body"><rect x="115" y="132" width="330" height="108" rx="13" /><rect x="445" y="163" width="165" height="46" rx="7" /><path d="M610 186h45M96 154v64M70 145h26v82H70z" /><path d="M160 146v80M420 146v80" /></g>
        <g className="machine-svg__accent"><circle cx="160" cy="186" r="25" /><path d="M160 161v50M470 186h130" /><circle cx="610" cy="186" r="10" /></g>
      </svg>
    );
  }
  if (pageKey === "stations") {
    return (
      <svg className="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация гидростанции">
        <g className="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370" /></g>
        <g className="machine-svg__body"><path d="M98 270h485l-22-90H120z" /><rect x="150" y="95" width="105" height="85" rx="8" /><circle cx="202" cy="137" r="29" /><rect x="300" y="105" width="165" height="75" rx="7" /><path d="M326 105V78h113v27M498 180v-70h55v70M150 270v25M540 270v25" /></g>
        <g className="machine-svg__accent"><path d="M202 108v58M173 137h58M255 137h45M465 142h33" /><circle cx="525" cy="135" r="12" /></g>
      </svg>
    );
  }
  return (
    <svg className="machine-svg" viewBox="0 0 680 370" role="img" aria-label="Схематичная иллюстрация испытательного стенда">
      <g className="machine-svg__grid"><path d="M0 60h680M0 130h680M0 200h680M0 270h680M80 0v370M170 0v370M260 0v370M350 0v370M440 0v370M530 0v370M620 0v370" /></g>
      <g className="machine-svg__body"><rect x="85" y="62" width="510" height="245" rx="10" /><path d="M255 62v245M85 235h510" /><rect x="115" y="92" width="110" height="113" rx="5" /><circle cx="170" cy="132" r="24" /><path d="M170 156v32M145 188h50M300 105h245M300 145h165M300 185h210M115 270h440" /></g>
      <g className="machine-svg__accent"><path d="M170 132l12-14M280 270h95M328 225v-40M328 225h110v-40" /><circle cx="328" cy="180" r="8" /><circle cx="438" cy="180" r="8" /></g>
    </svg>
  );
}
