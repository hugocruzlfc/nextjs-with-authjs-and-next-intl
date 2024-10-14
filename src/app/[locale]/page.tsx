import { auth } from "@/auth";
import Logout from "@/components/Logout";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

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

  const session = await auth();

  console.log(session);

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <section className="p-10">
        <div className="flex w-full flex-col items-center">
          <div className="relative mb-4 h-44 w-44">
            <Image
              src={session.user?.image as string}
              fill
              alt="profile-pict"
              className="rounded-full object-cover"
            />
          </div>
          <p className="mb-2 text-2xl">
            {t("welcome")}{" "}
            <span className="font-bold">{session.user?.name}</span>.{" "}
            {t("welcomeMessage")}
          </p>
          <p className="mb-4 font-bold">{session.user?.email}</p>
          <Logout />
        </div>
      </section>
    );
  }

  return (
    <section className="p-10">
      <div className="flex w-full flex-col items-center space-y-5">
        <p className="mb-2 text-2xl">{t("notSigned")}</p>
        <p>{t("info")}</p>
      </div>
    </section>
  );
}
