import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Img, Button, StyledLink } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

// get all their images

const buildings = [
  { name: "student center", img: "/static/student center.jpeg" },
  { name: "rahall", img: "/static/rehall.jpeg" },
  { name: "university point", img: "/static/university point.jpeg" },
  { name: "art", img: "/static/art.jpeg" },
  { name: "admin", img: "/static/admin.jpeg" },
  { name: "science", img: "/static/science.jpeg" },
]

const BuildingCard = ({ img, name }) => {
  return (
    <Link href={"#"} passHref>
      <a tw="w-full p-2 text-left rounded transition ease-in-out hover:(bg-neutral-1)">
          <span 
            tw="block px-2 py-2 my-6 font-semibold capitalize bg-neutral-1 rounded-lg text-lg "
            >
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
        <section tw="max-w-screen-md mx-auto text-center my-28">
          <h1 className="h2-headline" tw="font-sans mt-20 pb-5">Buildings</h1>
          <div 
            tw="relative px-5 py-10
                grid gap-4 grid-cols-2 sm:(grid-cols-3)
                "
          >
            {buildings.map((building)=>(
                <BuildingCard 
                  key={building.name} 
                  img={building.img} 
                  name={building.name}
                />
            ))}
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}
Buildings.theme = "light"
