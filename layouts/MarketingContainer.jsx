import { Fragment, useEffect, useRef, useState } from "react"
import tw, { css } from "twin.macro"
import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"
import { useMinScreen } from "@utils/minScreen"
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi"
import { Dialog, Transition } from "@headlessui/react"
import { ThemeChanger, MarketingFooter, LoadingCircle, Logo } from "@components"
import { Button } from "@components"
import { NextSeo } from "next-seo"
import SEO from "next-seo.config"

export default function MarketingContainer({
  children,
  fixed,
  noHeaderNav,
  headerBorder,
  footer,
  footerNav,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const { min } = useMinScreen()
  const router = useRouter()
  const url = `https://cu-rooms.vercel.app${router.route}`

  const closeModal = () => setIsOpen(false)

  const openModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      <header
        css={[
          tw`top-0 z-30 w-full 
          `,
          fixed &&
            tw`fixed bg-neutral-yang
          [@supports (backdrop-filter: none)]:(backdrop-filter backdrop-blur-lg saturate-150 bg-[var(--background)])`,
          headerBorder && tw`border-b border-neutral-2`,
        ]}
      >
        <nav
          className="nav-link"
          css={[
            tw`flex items-center  w-full max-height[54px] overflow-y-hidden
            max-w-screen-lg py-2 px-3 mx-auto lg:(px-2)`,
            noHeaderNav ? tw`justify-center` : tw`justify-between`,
          ]}
        >
          <Logo showName />
          {!noHeaderNav && (
            <>
              <div tw="inline-flex items-center space-x-2.5 font-semibold sm:(hidden)">
                <button
                  tw="relative outline-none appearance-none ring-0"
                  onClick={(e) => openModal(e)}
                >
                  <HiOutlineMenuAlt4 tw="h-20" />
                </button>
              </div>
              <div tw="hidden sm:(inline-block space-x-2.5 font-semibold )">
                <Link href="/signin" passHref>
                  <Button as="a" tw="px-3 py-2">
                    Sign In
                  </Button>
                </Link>
              </div>
            </>
          )}
          <MenuModal isOpen={isOpen} closeModal={closeModal} />
        </nav>
      </header>
      {children}
      {footer && <MarketingFooter nav={footerNav} />}
    </>
  )
}

const MenuModal = ({ isOpen, closeModal }) => {
  const router = useRouter()
  const defaultFocus = useRef()
  const { min } = useMinScreen()

  useEffect(() => {
    min`sm` && closeModal()
  }, [min, closeModal])

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transform transition duration-[1400ms] "
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-[2000ms] transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <Dialog
        initialFocus={defaultFocus}
        onClose={closeModal}
        tw="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50"
      >
        <div tw="min-h-screen text-center bg-base">
          <div
            tw="inline-flex flex-col w-full min-width[320px] overflow-x-hidden text-left 
                transition-all transform bg-transparent shadow-xl min-h-screen"
          >
            <div tw="mb-6 flex items-center justify-between py-1 px-3 border-b border-neutral-2">
              <Logo showName />
              <div className="nav-link" tw="flex items-center">
                <button
                  ref={defaultFocus}
                  tw="hocus:(outline-none appearance-none)"
                  onClick={closeModal}
                >
                  <HiOutlineX width={25} />
                </button>
              </div>
            </div>
            <div tw="flex flex-col space-y-5 w-5/6 mx-auto">
              {/*other content here */}
              <Link href="/signin" passHref>
                <Button as="a" variant="primary" tw="px-3 py-2 w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
