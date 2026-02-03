import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lakshvarma.vercel.app", // Update URL after deploy
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}