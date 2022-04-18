import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

const rooms = [
  "100",
  "110",
  "124",
  "135",
  "136",
  "237",
  "300",
  "301",
  "302",
  "303",
  "304",
  "308",
  "309",
  "310",
  "320",
  "321",
  "330",
  "331",
]

export default function Admin() {
  return (
    <UserUIContainer title="Admin Building Rooms" headerBorder footer>
    <link href= "index"> "Back" </link>
      <main tw="h-full">
        <section tw="max-w-screen-md mx-auto text-center my-28">
          <h1 className="h2-headline" tw="mt-20 pb-5">
            Admin Building Rooms
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

Admin.theme = "light"
