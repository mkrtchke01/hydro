"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";

interface SiteHeaderProps {
  companyName: string;
  phone: string;
  phoneHref: string;
  navigation: readonly (readonly [string, string])[];
}

export function SiteHeader({ companyName, phone, phoneHref, navigation }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="На главную">
          <span className="brand__mark">H</span>
          <span><strong>{companyName}</strong><small>Инженерные гидросистемы</small></span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span /><span /><span className="sr-only">Открыть меню</span>
        </button>
        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-nav" aria-label="Основная навигация">
          {navigation.map(([href, label]) => (
            <Link href={`#${href}`} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link className="site-nav__phone" href={phoneHref || "#contact"} onClick={() => setMenuOpen(false)}>
            <Icon name="phone" />{phone}
          </Link>
          <ButtonLink>Обсудить проект</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
