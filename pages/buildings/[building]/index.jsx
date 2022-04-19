import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { useRouter } from "next/router"
import { BreadCrumb, StyledLink } from "@components"
import { UserUIContainer } from "@layouts/UserUIContainer"
import { buildings, nameToSlug } from "@utils/buildings"

export default function Building({ buildingData }) {
  const { asPath } = useRouter()
  const { heading, rooms, name } = buildingData
  const pageHeading = heading || `${name} Rooms`

  return (
    <UserUIContainer title={pageHeading} headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-sm mx-auto text-center my-28 px-4">
          <BreadCrumb routesArr={asPath.split("/").filter(String)} />
          <h1 className="h2-headline" tw="mt-20 pb-5 capitalize">
            {pageHeading}
          </h1>
          <ul tw="list-inside text-left text-lg font-hero grid gap-2 sm:(grid-cols-2)">
            {rooms?.map((room) => (
              <li key={room}>
                <Link href={`${asPath}/${nameToSlug(room)}`} passHref>
                  <StyledLink
                    underline
                    tw="inline-flex items-center w-full [::before]:(content['🚪'] text-3xl mr-2)
                    bg-neutral-1 px-2 py-2 rounded-lg capitalize"
                  >
                    {room}
                  </StyledLink>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </UserUIContainer>
  )
}

Building.theme = "light"

export async function getStaticPaths() {
  return {
    // get an array of all possible building links/slugs
    paths: buildings.map((b) => ({ params: { building: nameToSlug(b.name) } })),
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  // get data from the requested building
  const buildingData = buildings.find((b) => nameToSlug(b.name) === params.building)
  return { props: { buildingData } }
}
