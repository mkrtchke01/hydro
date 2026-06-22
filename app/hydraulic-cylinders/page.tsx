import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Гидроцилиндры по чертежу и параметрам — производство",
  description: "Производство стандартных и нестандартных гидроцилиндров по параметрам, чертежу или образцу, включая замену импортных изделий.",
};

export default function HydraulicCylindersPage() {
  return <LandingPage pageKey="cylinders" />;
}
