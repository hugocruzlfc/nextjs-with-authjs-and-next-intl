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
  return (
    <section className="p-10">
      <div className="flex w-full flex-col items-center space-y-5">
        <Login />
      </div>
    </section>
  );
}
