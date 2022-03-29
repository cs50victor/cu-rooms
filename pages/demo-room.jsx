import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { Button, StyledLink } from "@components"
import UserUIContainer from "@layouts/UserUIContainer"

export default function DemoRoom() {
  return (
    <UserUIContainer title="Demo Room Reservation" headerBorder footer>
      <main tw="h-full">
        <section tw="max-w-screen-md mx-auto text-center my-28">
          <h1 className="h2-headline" tw="mt-20 pb-5">
            Demo Room Reservation
          </h1>
          <div tw="max-w-md mx-auto">
            <div tw="rounded-md bg-neutral-2 py-20 mt-24 text-center text-4xl space-y-2">
              <h2>Under Construction </h2>
              <span tw="block" role="img" aria-label="roadwork sign">
                🚧
              </span>
            </div>
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

DemoRoom.theme = "light"
/**
 * course name dropdown select
 *
 *
 *
 */
