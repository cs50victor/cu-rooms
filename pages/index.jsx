import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import MarketingContainer from "@layouts/MarketingContainer"

export default function Home() {
  return (
    <MarketingContainer headerBorder footer>
      <main tw="h-[38rem]">
        <section tw="max-w-screen-lg mx-auto px-10 text-center mt-10">
          <h1 tw="text-4xl sm:text-6xl mt-20 pb-5">Homepage</h1>
          <Link href="/docs" passHref>
            <StyledLink
              tw="block text-lg sm:text-xl font-medium w-max mx-auto"
              variant="blue"
              arrow
              underline
            >
              Docs
            </StyledLink>
          </Link>
          <Link href="/primitives" passHref>
            <StyledLink
              tw="block text-lg sm:text-xl font-medium w-max mx-auto"
              variant="blue"
              arrow
              underline
            >
              Primitives
            </StyledLink>
          </Link>
        </section>
      </main>
    </MarketingContainer>
  )
}
Home.theme = "light"
