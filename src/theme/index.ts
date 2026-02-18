import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: "amber.50", _dark: "whiskey.950" },
      color: { base: "whiskey.900", _dark: "amber.50" },
    },
  },
  theme: {
    tokens: {
      colors: {
        amber: {
          50: { value: "#FFF8E1" },
          100: { value: "#FFECB3" },
          200: { value: "#FFE082" },
          300: { value: "#FFD54F" },
          400: { value: "#FFCA28" },
          500: { value: "#FFC107" },
          600: { value: "#FFB300" },
          700: { value: "#FFA000" },
          800: { value: "#FF8F00" },
          900: { value: "#FF6F00" },
        },
        whiskey: {
          50: { value: "#FAF6F1" },
          100: { value: "#F0E6D6" },
          200: { value: "#E0CDAE" },
          300: { value: "#C9A96E" },
          400: { value: "#B8894A" },
          500: { value: "#A0723C" },
          600: { value: "#8B5E34" },
          700: { value: "#6E4A2A" },
          800: { value: "#513620" },
          900: { value: "#3A2518" },
          950: { value: "#1A110B" },
        },
        gold: {
          50: { value: "#FFF9E6" },
          100: { value: "#FFF0BF" },
          200: { value: "#FFE699" },
          300: { value: "#FFD966" },
          400: { value: "#FFCC33" },
          500: { value: "#FFB800" },
          600: { value: "#CC9300" },
          700: { value: "#996E00" },
          800: { value: "#664A00" },
          900: { value: "#332500" },
        },
      },
      fonts: {
        heading: { value: "var(--font-playfair), serif" },
        body: { value: "var(--font-inter), sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: { base: "{colors.amber.600}", _dark: "{colors.amber.500}" } },
          contrast: { value: { base: "white", _dark: "{colors.whiskey.950}" } },
          fg: { value: { base: "{colors.amber.700}", _dark: "{colors.amber.400}" } },
          muted: { value: { base: "{colors.amber.100}", _dark: "{colors.whiskey.800}" } },
          subtle: { value: { base: "{colors.amber.50}", _dark: "{colors.whiskey.900}" } },
          emphasized: { value: { base: "{colors.amber.200}", _dark: "{colors.whiskey.700}" } },
          focusRing: { value: { base: "{colors.amber.500}", _dark: "{colors.amber.500}" } },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
