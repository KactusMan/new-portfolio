export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://rayanidrees.vercel.app/sitemap.xml",
  };
}
