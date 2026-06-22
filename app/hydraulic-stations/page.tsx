import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Гидростанции под параметры заказчика — производство",
  description: "Производство гидростанций под давление, расход, схему и условия эксплуатации. Типовые, нестандартные и импортозамещающие решения.",
};

export default function HydraulicStationsPage() {
  return <LandingPage pageKey="stations" />;
}
