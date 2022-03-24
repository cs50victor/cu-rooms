import { useEffect, useState } from "react"
import tw, { css } from "twin.macro"
import { useTheme } from "next-themes"
import useSound from "use-sound"
import { Switch } from "@headlessui/react"

const ThemeChanger = ({ indicator }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isDarkMode, setDarkMode] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
    resolvedTheme === "light" ? setDarkMode(true) : setDarkMode(false)
  }, [resolvedTheme])

  const capitalize = (s) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const [play] = useSound("/sounds/switch-on.mp3", { volume: 0.9 })

  const switchTheme = () => {
    if (mounted) {
      play()
      setTheme(theme === "light" ? "dark" : "light")
      theme === "light" ? setDarkMode(false) : setDarkMode(true)
    }
  }

  return (
    <span tw="inline-block">
      <Switch
        checked={isDarkMode}
        onChange={switchTheme}
        css={[
          tw`relative inline-flex items-center flex-shrink-0 height[35px] w-24 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-700 focus:(outline-none ring-2 ring-white ring-opacity-10)`,
          isDarkMode ? tw`bg-indigo-200` : tw`bg-indigo-600`,
        ]}
      >
        <span tw="sr-only">Change Theme</span>
        <span
          aria-hidden="true"
          css={[
            tw`pointer-events-none inline-block height[31px] width[34px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-700`,
            isDarkMode ? tw`translate-x-15 bg-amber-500` : tw`translate-x-0 bg-neutral-9`,
          ]}
        />
        <div
          css={[
            tw`absolute font-semibold tracking-wide`,
            isDarkMode ? tw`left-3` : tw`right-3`,
          ]}
        >
          {isDarkMode ? "Light" : "Dark"}
        </div>
      </Switch>
    </span>
  )
}

export default ThemeChanger
