import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { useRouter } from "next/router"
import { BreadCrumb, StyledLink } from "@components"
import { UserUIContainer } from "@layouts/UserUIContainer"
import { buildings, nameToSlug, slugToName } from "@utils/buildings"

export default function Room({ buildingData }) {
  const { asPath } = useRouter()
  const { room, name } = buildingData
  const pageHeading = room?.toLowerCase().includes("room") ? room : `Room -  ${room}`

  return (
    <UserUIContainer title={pageHeading} headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-sm mx-auto text-center my-28">
          <BreadCrumb routesArr={asPath.split("/").filter(String)} />
          <h1 className="h2-headline" tw="mt-20 pb-5 capitalize">
            {pageHeading}
          </h1>
        </section>
      </main>
    </UserUIContainer>
  )
}

Room.theme = "light"

export async function getStaticPaths() {
  const allRooms = []
  buildings.forEach((b) => {
    b.rooms.forEach((room) => {
      allRooms.push({ params: { building: nameToSlug(b.name), room: nameToSlug(room) } })
    })
  })
  return {
    // get an array of all possible building links/slugs
    paths: allRooms,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // get data from the requested building
  const buildingData = buildings.find((b) => nameToSlug(b.name) === params.building)
  buildingData.room = buildingData.rooms.filter(
    (room) => nameToSlug(room) === params.room,
  )[0]
  delete buildingData.rooms

  return { props: { buildingData } }
}
