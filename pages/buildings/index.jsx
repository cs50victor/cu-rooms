import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Img } from "@components"
import { UserUIContainer } from "@layouts/UserUIContainer"
import { buildings, nameToSlug } from "@utils/buildings"

const BuildingCard = ({ building }) => {
  const { img, name } = building
  const slug = nameToSlug(name)

  return (
    <Link href={`/buildings/${slug}`} passHref>
      <a tw="w-full p-2 text-left rounded transition ease-in-out hover:(bg-neutral-1)">
        <span tw="block px-2 py-2 my-6 font-semibold capitalize bg-neutral-1 rounded-lg text-lg ">
          {name}
        </span>
        <div tw="relative h-40 rounded-lg">
          <Img objectFit={"cover"} tw="rounded-lg" layout={"fill"} src={img} alt={name} />
        </div>
      </a>
    </Link>
  )
}

export default function Buildings({ allBuildings }) {
  return (
    <UserUIContainer title="Buildings" headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-lg mx-auto text-center my-28">
          <h1 className="h2-headline" tw="mt-20 pb-5">
            Buildings
          </h1>
          <div
            tw="relative px-5 py-10
                grid gap-4 grid-cols-2 sm:(grid-cols-3) lg:(grid-cols-4)
                "
          >
            {allBuildings?.map((building) => (
              <BuildingCard building={building} key={building.name} />
            ))}
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API [database]
  // const res = await fetch(`https://.../data`)
  // Temporary getting data from local file
  const allBuildings = buildings

  // Pass data to the page via props
  return { props: { allBuildings } }
}

Buildings.theme = "light"
