import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Img } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

//adds the name and image for each building button
const buildings = [
  { name: "student center", link: "student-center", img: "/static/student center.jpeg" },
  { name: "rahall", link: "rahall", img: "/static/rehall.jpeg" },
  { name: "university point", link: "university-point", img: "/static/university point.jpeg" },
  { name: "art", link: "art", img: "/static/art.jpeg" },
  { name: "admin", link: "admin", img: "/static/admin.jpeg" },
  { name: "science", link: "science", img: "/static/science.jpeg" },
  { name: "carter", link: "carter", img: "/static/carter.jpeg" },
  { name: "library", link: "library", img: "/static/library.jpeg" },
]

const BuildingCard = ({ building }) => {
  const { img, name, link } = building

//a tw bg-neutral-1
  
  return (
    <Link href={`/buildings/${link}`} passHref>
      <a tw="w-full p-2 text-left rounded transition ease-in-out hover:(bg-cyan-600)">
        <span tw="block px-2 py-2 my-6 font-semibold capitalize bg-neutral-1 rounded-lg text-lg ">
          {name}
        </span>
        <div tw="relative h-40 rounded-t-lg">
          <Img objectFit={"cover"} tw="rounded-lg" layout={"fill"} src={img} alt={name} />
        </div>
      </a>
    </Link>
  )
}

export default function Buildings() {
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
            {buildings.map((building) => (
              <BuildingCard building={building} key={building.name} />
            ))}
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

Buildings.theme = "light"
