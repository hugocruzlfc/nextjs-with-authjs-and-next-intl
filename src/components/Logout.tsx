"use client";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Logout() {
  const t = useTranslations("Session");
  return (
    <button
      className="rounded-md bg-red-600 px-6 py-2"
      onClick={() => signOut()}
    >
      {t("logout")}
    </button>
  );
}
