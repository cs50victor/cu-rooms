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
            aria-label="cu-rooms Directory"
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
            <span>&copy; {new Date().getFullYear()} cu-rooms.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
