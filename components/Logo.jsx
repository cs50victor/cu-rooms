import Link from "next/link"
import tw from "twin.macro"
import { SvgLogo, Img } from "@components"
import SEO from "next-seo.config"

const Logo = ({ url, width, height, showName }) => {
  const currLink = url || "/"
  return (
    <Link href={currLink} passHref>
      <a className="nav-title" tw="font-hero text-neutral-9 inline-flex items-center ">
        <SvgLogo width={100}/>
        {showName && <span>{SEO.defaultTitle}</span>}
      </a>
    </Link>
  )
}
export default Logo
