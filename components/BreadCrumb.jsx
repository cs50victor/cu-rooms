import tw, { css } from "twin.macro"
import Link from "next/link"
import { slugToName } from "@utils/buildings"

export default function BreadCrumb({ routesArr }) {
  return (
    <nav
      tw="flex py-3 px-5 text-neutral-7 rounded-lg border border-neutral-2"
      aria-label="Breadcrumb"
    >
      <ol tw="inline-flex items-center space-x-1 md:(space-x-3)">
        {routesArr?.map((route, i) => (
          <li key={i} tw="flex items-center">
            <Link href={`/${routesArr.slice(0, i + 1).join("/")}`} passHref>
              <a
                css={[
                  tw`inline-flex items-center text-base font-semibold capitalize`,
                  i === routesArr.length - 1
                    ? tw`text-neutral-5 pointer-events-none`
                    : tw`text-neutral-7 hover:(text-neutral-8)`,
                ]}
              >
                {i === 0 ? (
                  <svg
                    tw="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 
                011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    tw="mr-1 w-5 h-5 text-neutral-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
                {slugToName(route)}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
