const title = "cu-rooms"
const defaultTitle = "cu-rooms."
const titleTemplate = "%s | cu-rooms."
const description = "cu-rooms."

const SEO = {
  defaultTitle,
  titleTemplate,
  description,
  canonical: "https://cu-rooms.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://cu-rooms.vercel.app",
    site_name: "cu-rooms",
    description,
    images: [
      {
        url: "/static/og.jpg",
        alt: defaultTitle,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@vic8or",
    site: "@vic8or",
    cardType: "summary_large_image",
  },
}

export default SEO
