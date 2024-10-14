import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const dynamic = "force-dynamic";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const routesMap: Route[] = [
//     { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
//     { url: `${baseUrl}/booking`, lastModified: new Date().toISOString() },
//   ];

//   const carsFromDb = await prisma.car.findMany({
//     select: { slug: true, updatedAt: true },
//   });

//   const coverageCollection = carsFromDb.map((car) => ({
//     url: `${baseUrl}/booking/${car.slug}`,
//     lastModified: car.updatedAt.toISOString(),
//   }));

//   const carsCollection = carsFromDb.map((car) => ({
//     url: `${baseUrl}/cars/${car.slug}`,
//     lastModified: car.updatedAt.toISOString(),
//   }));

//   const carsCategories = Object.values(CarCategory).map((category) => ({
//     url: `${baseUrl}/cars/category/${category}`,
//     lastModified: new Date().toISOString(),
//   }));

//   const fetchedRoutes: Route[] = [
//     ...coverageCollection,
//     ...carsCollection,
//     ...carsCategories,
//   ];

//   return [...routesMap, ...fetchedRoutes];
// }
