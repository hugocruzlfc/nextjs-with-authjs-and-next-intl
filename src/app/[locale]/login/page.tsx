import Login from "@/components/Login";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "LoginPage",
  });

  return {
    title: t("metadata.title"),
  };
}

export default function LoginPage() {
  return <Login />;
}
