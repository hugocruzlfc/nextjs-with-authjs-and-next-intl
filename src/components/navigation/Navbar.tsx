import { useTranslations } from "next-intl";

import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navbar.links");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="home">{t("login")}</NavigationLink>
          <NavigationLink href="about">{t("about")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
