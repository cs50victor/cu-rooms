import Image from "next/image"
import { defaultImageBlur } from "@utils/imageBlur"

export default function Img(props) {
  const localSrc = props?.src.startsWith("/")

  if (localSrc) {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        placeholder="blur"
        blurDataURL={defaultImageBlur}
        {...props}
      />
    )
  }
  return <Image src={props.src} alt={props.alt} {...props} />
}