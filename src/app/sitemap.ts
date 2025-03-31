import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mintsy.ai";

  const routes = [
    "",
    "/create-ai-art",
    "/how-it-works",
    "/ai-art-pricing",
    "/about",
    "/ai-art-faqs",
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
    "/help-support",
    "/affiliate-program",
    "/art",
    "/gallery",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : ("weekly" as "daily" | "weekly"),
    priority: route === "" ? 1 : 0.8,
  }));

  // In a real implementation, you would fetch artwork IDs from your database
  // and add them to the sitemap dynamically
  // Example:
  // const artworkPages = await fetchAllPublicArtworkIds();
  // const artworkRoutes = artworkPages.map((id) => ({
  //   url: `${baseUrl}/art/${id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as 'weekly',
  //   priority: 0.7,
  // }));
  //
  // return [...routes, ...artworkRoutes];

  return routes;
}
