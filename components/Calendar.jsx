import tw, { css } from "twin.macro"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import {format, startOfMonth, getDaysInMonth } from "date-fns"

export default function Calendar() {
  const currDate = new Date()
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]
  const firstDayOfMonth = format(startOfMonth(currDate), "EEEEE")
  const dayNums = Array.from({ length: getDaysInMonth(currDate) }, (_, i) => i + 1)
  const daysFromMonday = [...Array(daysOfWeek.indexOf(firstDayOfMonth)).keys()]
  const currDayNum = currDate.getDate()

  return (
    <>
      <div tw="flex items-center justify-center p-4 text-base font-semibold sm:(text-sm)">
        <div tw="w-full">
          <div tw="p-2">
            <div tw="px-4 flex items-center justify-between">
              <h1 tw="text-2xl font-bold text-neutral-8">{format(currDate, "MMMM yyyy")}</h1>
              <div tw="flex items-center text-neutral-6">
                <HiOutlineChevronLeft tw="w-5 h-5" />
                <HiOutlineChevronRight tw="w-5 h-5" />
              </div>
            </div>
            <div tw="flex items-center justify-between pt-12 overflow-x-auto">
              <table tw="w-full">
                <thead>
                  <tr tw="grid grid-cols-7">
                    {daysOfWeek.map((dayName) => (
                      <th key={dayName}>
                        <div tw="w-full flex justify-center">
                          <p tw="font-medium text-center text-neutral-6">{dayName}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr tw="grid grid-cols-7">
                    {daysFromMonday.map((i) => (
                      <td tw="pt-6" key={i}>
                        <div tw="px-4 py-4 cursor-pointer flex w-full justify-center" />
                      </td>
                    ))}
                    {dayNums.map((dayNum) => (
                      <td tw="pt-6" key={dayNum}>
                        <div tw="px-4 py-4 cursor-pointer flex w-full justify-center">
                          <p
                            css={[
                              currDayNum == dayNum
                                ? tw`flex items-center justify-center font-bold p-1 text-white bg-indigo-700 rounded-full`
                                : tw`text-neutral-5 font-medium`,
                            ]}
                          >
                            {dayNum}
                          </p>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
