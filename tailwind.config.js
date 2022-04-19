const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}),${opacityValue})`
  }
}

module.exports = {
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        violet: colors.violet,
        cyan: colors.cyan,
        pink: colors.pink,
        amber: colors.amber,
        gray: colors.zinc, //.slate,.gray, .zinc, .neutral
        brand: {
          lighter: "var(--brand-lighter)",
          light: "var(--brand-light)",
          DEFAULT: "var(--brand-base)",
          dark: "var(--brand-dark)",
          darker: "var(--brand-darker)",
        },
        neutral: {
          yang: withOpacity("--neutral-yang"),
          1: withOpacity("--neutral-1"),
          2: withOpacity("--neutral-2"),
          3: withOpacity("--neutral-3"),
          4: withOpacity("--neutral-4"),
          5: withOpacity("--neutral-5"),
          6: withOpacity("--neutral-6"),
          7: withOpacity("--neutral-7"),
          8: withOpacity("--neutral-8"), //base
          9: withOpacity("--neutral-9"),
          ying: withOpacity("--neutral-ying"),
        },
      },
      backgroundColor: {
        base: withOpacity("--background"),
        secondary: withOpacity("--background-secondary"),
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Text", "-apple-system", ...fontFamily.sans],
        hero: ["Radial", "Inter", "SF Pro Text", "-apple-system", ...fontFamily.sans],
      },
      borderRadius: {
        brand: "9px",
        brandSecondary: "4px",
      },
      translate: {
        15: "3.7rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
}
