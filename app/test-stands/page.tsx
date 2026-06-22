import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Испытательные стенды под ТЗ — разработка и производство",
  description: "Разработка и производство испытательных стендов под ТЗ: диагностика, настройка, контроль параметров и приемо-сдаточные испытания.",
};

export default function TestStandsPage() {
  return <LandingPage pageKey="stands" />;
}
