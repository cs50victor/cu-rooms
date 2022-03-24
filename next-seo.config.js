const title = "starter"
const defaultTitle = "starter."
const titleTemplate = "%s | starter."
const description = "starter."

const SEO = {
  defaultTitle,
  titleTemplate,
  description,
  canonical: "https://starter.co",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://starter.co",
    site_name: "starter",
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
