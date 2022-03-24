import { Fragment, useState, useEffect } from "react"
import tw, { css } from "twin.macro"
import Link from "next/link"
import { useMinScreen } from "@utils/minScreen"
import { ExternalLink, ThemeChanger, Logo } from "@components"
import SEO from "next-seo.config"

const NavGroup = ({ heading, children }) => {
  const { min } = useMinScreen()
  const [expanded, setExpanded] = useState(false)
  const [userClicked, setUserClicked] = useState(false)

  const toggleDropdown = () => {
    !min`md` && (setExpanded(!expanded), setUserClicked(!userClicked))
  }
  useEffect(() => {
    // default md: breakpoint
    if (min`md` && expanded === false) {
      setExpanded(true)
      userClicked && setUserClicked(false)
    } else if (!min`md`) {
      if (userClicked === false && expanded) {
        setExpanded(false)
      }
    }
  }, [min])

  return (
    <div tw="border-b border-neutral-5 md:(border-none mb-0)">
      <label onClick={toggleDropdown} tw="w-full inline-block mt-3">
        <h3
          css={[
            tw`font-sans font-semibold text-neutral-6 pb-3 after:(content['+'] float-right)
            md:after:(hidden)`,
            expanded &&
              tw`after:(transform-gpu rotate-45 
              transition-transform duration-300 ease-in-out)`,
          ]}
        >
          {heading}
        </h3>
      </label>
      {expanded && (
        <ul tw="flex flex-col space-y-4 pb-5 pl-3 md:(pb-0 pl-0)">{children}</ul>
      )}
    </div>
  )
}

export default function MarketingFooter({ nav = false }) {
  return (
    <footer tw="relative w-full text-sm bottom-0 bg-neutral-2  text-neutral-5 transition px-4 py-8 border-t border-neutral-2">
      <div tw="w-full max-w-screen-lg mx-auto">
        {nav && (
          <nav
            tw="mx-auto flex flex-nowrap flex-col md:flex-row
            justify-between w-full mb-10"
            role="navigation"
            aria-label="starter Directory"
          >
            <NavGroup heading="Resources">
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Company">
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Legal">
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
            <NavGroup heading="Services">
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Uses</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Guestbook</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Snippets</a>
                </Link>
              </li>
              <li>
                <Link href="/#" prefetch={false}>
                  <a>Tweets</a>
                </Link>
              </li>
            </NavGroup>
          </nav>
        )}

        <div
          css={[
            tw`w-full flex flex-col-reverse items-center pt-5
            space-y-2 md:(flex-row justify-between)`,
            nav && tw`md:(border-t border-neutral-4)`,
          ]}
        >
          <div tw="flex items-center space-x-2.5 mt-5 md:(mt-0)">
            <Logo width="55" height="55" />
            <span>&copy; {new Date().getFullYear()} starter.</span>
          </div>
          <ExternalLink href={`https://twitter.com/${SEO.twitter.handle}`}>
            <div tw="flex items-center space-x-1 rounded-brand bg-[#1d9bf0] text-white font-semibold px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                />
              </svg>
              <span>Share feedback</span>
            </div>
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
