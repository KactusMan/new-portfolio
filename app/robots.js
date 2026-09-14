export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://rayan-idrees.vercel.app/sitemap.xml",
    host: "https://rayan-idrees.vercel.app",
  };
}
