"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("Session");
  return (
    <button
      className="mb-2 rounded-md border border-gray-300 bg-none px-6 py-2"
      onClick={() => signIn("github")}
    >
      {t("login")}
    </button>
  );
}
