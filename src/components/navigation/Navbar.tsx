import { useTranslations } from "next-intl";

import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navbar.links");

  return (
    <div className="bg-slate-850">
      <nav className="container flex flex-row justify-between p-2 text-white">
        <p className="text-3xl">{t("brand")}</p>
        <div className="flex flex-row gap-2">
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/login">{t("login")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
