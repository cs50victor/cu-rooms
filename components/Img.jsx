import Image from "next/image"
import { defaultImageBlur } from "@utils/imageBlur"

export default function Img(props) {
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
