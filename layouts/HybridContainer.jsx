import { Fragment, useContext, useEffect, useRef, useState } from "react"
import tw, { css } from "twin.macro"
import Link from "next/link"
import Image from "next/image"
import Router, { useRouter } from "next/router"
import {
  HiLightningBolt,
  HiCog,
  HiUser,
  HiOutlinePlusSm,
  HiOutlineCurrencyDollar,
} from "react-icons/hi"

import { Popover, Transition } from "@headlessui/react"
import { ThemeChanger, MarketingFooter, Logo } from "@componentshowNames"
import { Button } from "@components"
import { defaultImageBlur } from "@utils/imageBlur"
import { NextSeo } from "next-seo"

const options = [
  {
    name: "Tasks",
    href: "/#",
    icon: HiLightningBolt,
  },
  {
    name: "Profile",
    href: "/#",
    icon: HiUser,
  },
  {
    name: "Coins",
    href: "/#",
    icon: HiOutlineCurrencyDollar,
  },
  {
    name: "Settings",
    href: "/#",
    icon: HiCog,
  },
]

export default function UserUIContainer({ children, footer, footerNav, title }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [openTaskModal, setOpenTaskModal] = useState(false)
  const url = `https://quickPrep.co${router.route}`

  const notify = () =>
    toast.success("View task in your profile.", {
      duration: 5000,
      position: "top-center",
      style: {
        background: "green",
        fontWeight: "bolder",
        color: "white",
        zIndex: 60,
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    })

  return (
    <Fragment>
      <NextSeo
        title={title}
        canonical={url}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        openGraph={{
          url,
          title,
        }}
      />
      <header
        tw="top-0 z-30 w-full bg-base fixed border-b border-neutral-1
        [@supports (backdrop-filter: none)]:(backdrop-filter backdrop-blur-lg saturate-150 bg-[var(--background)])
        "
      >
        <nav tw="flex items-center w-full max-w-screen-lg px-2 mx-auto justify-between">
          <span>
            <Logo url="/home" showName />
          </span>
          <div tw="inline-flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpenTaskModal(true)}
              tw="inline-flex items-center py-1 px-2 font-semibold text-neutral-2 bg-neutral-9 rounded-xl w-max space-x-1"
            >
              <span tw="text-sm">Create Task</span>
              <HiOutlinePlusSm width={18} />
            </button>
            <Popover tw="relative min-width[40px]">
              {({ open }) => (
                <Fragment>
                  <Popover.Button
                    tw="inline-flex justify-center ml-2 mr-1 my-2 
                      rounded-full ease-in-out
                      hover:(ring-8 ring-white ring-opacity-10)
                      hocus:(outline-none)"
                  >
                    <Image
                      tw="inline-block rounded-full object-cover bg-gray-200"
                      width={40}
                      height={40}
                      src={"/static/default_avatar.png"}
                      placeholder="blur"
                      objectFit="cover"
                      blurDataURL={defaultImageBlur}
                      alt="..."
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel tw="absolute z-10 w-28 transform -translate-x-1/2">
                      <div
                        tw="relative bg-neutral-1 px-1 py-2 text-xs text-neutral-8
                            overflow-hidden rounded-brand shadow-2xl border ring-neutral-3 ring-opacity-5
                            sm:(text-sm py-3 font-medium tracking-wide)"
                      >
                        <div></div>
                        {options.map((option) => (
                          <div key={option.name}>
                            <Link href={option.href} passHref>
                              <a
                                tw="inline-flex items-center w-full p-2 transition duration-150
                                  ease-in-out rounded-brand 
                                  hocus:(bg-neutral-8 text-neutral-1 outline-none)"
                              >
                                <span tw="mr-2">
                                  <option.icon width={18} />
                                </span>
                                {option.name}
                              </a>
                            </Link>
                            <hr tw="opacity-80 my-1" />
                          </div>
                        ))}
                        <div
                          tw="inline-flex items-center w-full p-1 transition duration-150
                              ease-in-out rounded-brand hocus:(outline-none)"
                        >
                          <ThemeChanger />
                        </div>
                        {/*<hr tw="opacity-80 my-1" />*/}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Fragment>
              )}
            </Popover>
          </div>
        </nav>
      </header>
      {children}
      {footer && <MarketingFooter nav={footerNav} />}
    </Fragment>
  )
}
