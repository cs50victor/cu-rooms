import Image from "next/image"
import { defaultImageBlur } from "@utils/imageBlur"

export default function Img(props) {
  const notLocalSrc =
    props?.src.startsWith("https://") || props?.src.startsWith("http://")

  return (
    <Image
      src={props.src}
      alt={props.alt}
      placeholder="blur"
      {...(notLocalSrc && { blurDataURL: defaultImageBlur })}
      {...props}
    />
  )
}
