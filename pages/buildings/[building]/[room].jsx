import { useEffect, useState } from "react"
import tw from "twin.macro"
import Link from "next/link"
import { useRouter } from "next/router"
import { Img, BreadCrumb, StyledLink, Calendar, Button } from "@components"
import { UserUIContainer } from "@layouts/UserUIContainer"
import { buildings, nameToSlug, slugToName } from "@utils/buildings"
import { format } from "date-fns"
import {HiOutlineClock} from "react-icons/hi"

const professors = [
  {
    name: "Lonnie Bowe",
    img: "/static/bowe.jpg",
    time: "8:00pm - 8:45pm",
    title: "Assistant Professor of Computer Science",
  },
  {
    name: "Joseph Allen",
    img: "/static/allen.jpg",
    time: "9:15pm - 10:30pm",
    title: "Distinguished Professor of Geology/Chair",
  },
  {
    name: "Lisa Darlington",
    img: "/static/lisa.jpg",
    time: "12:00pm - 12:45pm",
    title: "Professor-Mathematics/Department Chair",
  },
  {
    name: "Mark Dietrich",
    img: "/static/dietrich.jpg",
    time: "1:00pm - 1:45pm",
    title: "Assistant Professor of Computer Science",
  },
  {
    name: "Angela Addair",
    img: "/static/addair.jpg",
    time: "3:00pm - 4:00pm",
    title: "Assistant Professor of Management",
  },
]

export default function Room({ room, name }) {
  const { asPath } = useRouter()
  const pageHeading = room?.toLowerCase().includes("room") ? room : `Room -  ${room}`

  return (
    <UserUIContainer title={pageHeading} headerBorder footer>
      <main tw="h-full">
        <section tw="text-center my-28">
          <div tw="max-w-screen-sm mx-auto">
            <BreadCrumb routesArr={asPath.split("/").filter(String)} />
            <h1
              tw="text-2xl font-semibold md:text-3xl lg:text-4xl
              mt-20 pb-5 capitalize"
            >
              {pageHeading}
            </h1>
          </div>
          <div tw="max-w-screen-lg mx-auto my-8 px-3 flex flex-wrap">
            <div tw="w-full lg:(w-1/2 border-r)">
              <Calendar />
            </div>
            <hr />
            <div tw="w-full lg:(w-1/2) flex flex-col items-center px-16">
              <Button tw="w-52">Make a reservation</Button>
              <h2 tw="font-sans my-6 border-b text-lg">
                Current Reservations for {format(new Date(), "MMMM dd,yyyy")}
              </h2>
              <div tw="space-y-3 text-left">
                {professors.map((professor, i) => (
                  <div tw="inline-flex items-center w-full p-3" key={i}>
                    <div tw="relative w-10 h-10 rounded-full">
                      <Img
                        src={professor.img}
                        alt={professor.name}
                        objectFit={"cover"}
                        layout="fill"
                        tw="rounded-full "
                      />
                    </div>
                    <div tw="flex flex-col ml-3">
                      <h4 tw="font-sans text-sm">{professor.name}</h4>
                      <small tw="text-neutral-6">{professor.title}</small>
                      <small tw="inline-flex space-x-2 mt-2 text-neutral-7 ">
                        <HiOutlineClock tw="w-4 h-4"/>
                        <span>{professor.time}</span>
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserUIContainer>
  )
}

Room.theme = "light"

export const getStaticPaths = async () => {
  const paths = []
  buildings.forEach((b) => {
    b.rooms.forEach((room) => {
      paths.push({ params: { building: nameToSlug(b.name), room: nameToSlug(room) } })
    })
  })
  return {
    // get an array of all possible building links/slugs
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  // get data from the requested building
  const buildingData = await buildings.find((b) => nameToSlug(b.name) === params.building)

  buildingData["room"] = buildingData.rooms.filter(
    (room) => nameToSlug(room) === params.room,
  )[0]

  return { props: { ...buildingData } }
}
