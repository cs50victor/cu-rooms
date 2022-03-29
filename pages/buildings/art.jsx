import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

const rooms = [
  "A101",
  "A102",
  "A104",
  "A106",
  "A107",
  "A200",
  "A201",
  "A204",
  "A206",
  "A207",
  "M001",
  "M010",
  "M011",
  "M103",
  "M104",
  "M105",
  "M107",
]

export default function Art() {
  return (
    <UserUIContainer title="Art Building Rooms" headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-md mx-auto text-center my-28">
          <h1 className="h2-headline" tw="mt-20 pb-5">
            Art Building Rooms
          </h1>
          <div tw="max-w-md mx-auto">
            <ul tw="list-inside list-disc text-left text-lg">
              {rooms.map((room) => (
                <li key={room}>
                  <Link href="/demo-room" passHref>
                    <StyledLink underline>{room}</StyledLink>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

Art.theme = "light"
