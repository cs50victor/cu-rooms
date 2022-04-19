import Link from "next/link"
import tw from "twin.macro"
import { Img } from "@components"
import SEO from "next-seo.config"

const Logo = ({ url, width, height, showName }) => {
  const currLink = url || "/"
  return (
    <Link href={currLink} passHref>
      <a className="nav-title" tw="font-hero text-neutral-9 inline-flex items-center ">
        <Img src="/logo.svg" width={100} height={80} priority />
        {showName && <span>{SEO.defaultTitle}</span>}
      </a>
    </Link>
  )
}
export default Logo
