export const dynamic = "force-dynamic";

import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}
