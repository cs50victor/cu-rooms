import Head from "next/head"
import { useEffect } from "react"
import { theme } from "twin.macro"
import GlobalStyles from "/baseCSS"
import { ThemeProvider } from "next-themes"
import { MinScreenProvider } from "@utils/minScreen"
import { DefaultSeo } from "next-seo"
import SEO from "next-seo.config"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      enableSystem={true}
      enableColorScheme={true}
      themes={["light", "dark"]}
      forcedTheme={Component.theme || null}
      disableTransitionOnChange
    >
      <MinScreenProvider screens={theme`screens`}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1.0, width=device-width, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Component {...pageProps} />
      </MinScreenProvider>
    </ThemeProvider>
  )
}
