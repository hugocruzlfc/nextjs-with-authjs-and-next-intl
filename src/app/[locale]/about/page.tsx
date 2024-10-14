import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  return {
    title: t("metadata.title"),
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "AboutPage.tags",
  });

  return (
    <section className="p-10">
      <div className="flex w-full flex-col items-center space-y-5">
        <p>{t("1")}</p>
        <p>{t("2")}</p>
        <p>{t("3")}</p>
        <div className="flex flex-row gap-2">
          <a
            className="inline-block rounded-md border border-gray-700 p-4 transition-colors hover:border-gray-400"
            href="https://authjs.dev/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-xl font-semibold text-white">
              Auth.js <span className="ml-2 inline-block">→</span>
            </p>
          </a>
          <a
            className="inline-block rounded-md border border-gray-700 p-4 transition-colors hover:border-gray-400"
            href="https://next-intl-docs.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-xl font-semibold text-white">
              Next-Intl<span className="ml-2 inline-block">→</span>
            </p>
          </a>
        </div>
        <p>{t("4")}</p>
      </div>
    </section>
  );
}
