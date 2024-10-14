import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "HomePage",
  });

  return {
    title: `${t("metadata.title")} | ${t("metadata.siteName")}`,
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "HomePage",
  });

  return (
    <>
      <main>hi</main>
    </>
  );
}
