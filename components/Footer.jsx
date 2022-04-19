import { Fragment, useState, useEffect } from "react"
import tw, { screen, css } from "twin.macro"
import Link from "next/link"
import { ExternalLink, ThemeChanger, Logo } from "@components"
import { Disclosure } from "@primitives"
import SEO from "next-seo.config"

export default function Footer({ nav = false }) {
  return (
    <footer tw="relative w-full text-sm bottom-0 bg-neutral-1 text-neutral-5 px-4 py-8">
      <div tw="w-full max-w-screen-lg mx-auto">
        <div
          css={[
            tw`w-full flex flex-col-reverse items-center pt-5
            space-y-2 md:(flex-row justify-between)`,
            nav && tw`md:(border-t border-neutral-4)`,
          ]}
        >
          <div tw="flex items-center space-x-2.5 mt-5 md:(mt-0)">
            <Logo width="55" height="55" />
            <span>
              &copy; {new Date().getFullYear()} {SEO.defaultTitle}.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
