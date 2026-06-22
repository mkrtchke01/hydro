import Link from "next/link";
import { Icon } from "@/components/Icon";

interface ButtonLinkProps {
  children: string;
  href?: string;
  secondary?: boolean;
}

export function ButtonLink({ children, href = "#contact", secondary = false }: ButtonLinkProps) {
  return (
    <Link className={`button${secondary ? " button--secondary" : ""}`} href={href}>
      {children}
      <Icon name="arrow" />
    </Link>
  );
}
