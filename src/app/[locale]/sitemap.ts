import { locales, pathnames } from "@/i18n/routing";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap: Route[] = [];

  (Object.keys(pathnames) as Array<keyof typeof pathnames>).forEach(
    (pathname) => {
      locales.forEach((locale) => {
        const localizedPath = pathnames[pathname];

        const localizedUrl =
          typeof localizedPath === "string"
            ? localizedPath
            : localizedPath[locale];

        routesMap.push({
          url: `${baseUrl}/${locale}${localizedUrl}`,
          lastModified: new Date().toISOString(),
        });
      });
    },
  );

  return routesMap;
}
