import type { SVGProps } from "react"

interface BottleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  color?: string
}

export function BottleIcon({
  size = 24,
  color = "currentColor",
  ...props
}: BottleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 2h4" />
      <path d="M10 2v4l-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8l-2-2V2" />
      <path d="M8 14h8" />
    </svg>
  )
}
