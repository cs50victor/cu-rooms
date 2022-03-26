import Link from "next/link"
import tw from "twin.macro"

const Logo = ({ url, width, height, showName }) => {
  const currLink = url || "/"
  const websiteName = "CU Rooms"
  return (
    <Link href={currLink} passHref>
      <a className="nav-title" tw="font-hero text-neutral-9 inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || 32}
          height={height || 32}
          viewBox="0 0 170 170"
          fill="var(--brand-base)"
        >
          <path
            d="M76 25.5c-5 3.2-6 3.5-13.1 3.5-6.9 0-8.1.3-10.8 2.6-1.7 1.4-3.9 4.4-4.9 6.7-2.2 4.9-4.4 7.1-9.4 9.1-1.9.9-4.7 2.9-6.2 4.6-2.3 2.8-2.6 4-2.6 10.9 0 7.1-.3 8.1-3.5 13.1-4.6 7.1-4.6 10.9 0 18 3.2 5 3.5 6
      3.4 12.6-.1 9 1.7 12.6 8.1 15.6 6.2 2.9 7.8 4.5 10.5 10.3 3.3 6.9 6.7 8.8 15.9 8.6 6.6-.1 7.5.1 12.6 3.4 7.1 4.6 10.9 4.6 18 0 5-3.2 6-3.5 13.1-3.5 6.9 0 8.1-.3 10.8-2.6 1.7-1.4 3.9-4.4 4.9-6.7 2.2-4.9 4.4-7.1 9.4-9.1 1.9-.9 4.7-2.9 6.2-4.6 2.3-2.8 2.6-4 2.6-10.9 0-7.1.3-8.1 3.5-13.1 2.3-3.6 3.5-6.6 3.5-9 0-2.4-1.2-5.4-3.5-9-3.2-5-3.5-6-3.5-13.1 0-6.9-.3-8.1-2.6-10.9-1.5-1.7-4.3-3.8-6.3-4.6-4.8-2-8.9-6-9.6-9.5-.4-1.5-2.2-4.2-4.1-5.9-3.2-2.8-4-3-11.2-3-7.2 0-8.2-.3-13.2-3.5-3.6-2.3-6.6-3.5-9-3.5-2.4 0-5.4 1.2-9 3.5z"
          />
        </svg>
        {showName && <span>{websiteName}</span>}
      </a>
    </Link>
  )
}
export default Logo
