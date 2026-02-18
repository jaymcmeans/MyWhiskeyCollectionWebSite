"use client"

import { SimpleGrid } from "@chakra-ui/react"
import {
  HiChartBar,
  HiUpload,
  HiShieldCheck,
  HiDeviceMobile,
} from "react-icons/hi"
import { BottleIcon } from "@/components/icons/BottleIcon"
import { DistilleryIcon } from "@/components/icons/DistilleryIcon"
import { FeatureCard } from "./FeatureCard"
import type { IconType } from "react-icons"
import type { ComponentType } from "react"

interface Feature {
  icon: IconType | ComponentType<{ size?: number | string; color?: string }>
  title: string
  description: string
  slug?: string
}

const FEATURES: Feature[] = [
  {
    icon: HiChartBar,
    title: "Dashboard & Analytics",
    description:
      "View your collection at a glance with stats cards showing total bottles, unique distilleries, and more. Interactive charts break down your collection by type, status, and country of origin.",
    slug: "dashboard",
  },
  {
    icon: BottleIcon,
    title: "Bottle Management",
    description:
      "Add, edit, view, and delete your bottles through a clean interface. Search by name, filter by type or status, sort by any column, and navigate with pagination. Every detail from ABV to tasting notes.",
    slug: "bottles",
  },
  {
    icon: DistilleryIcon,
    title: "Distillery Directory",
    description:
      "Maintain a directory of distilleries linked to your bottles. Add details like region, country, and founding year. See which bottles come from each distillery.",
    slug: "distilleries",
  },
  {
    icon: HiUpload,
    title: "CSV Import",
    description:
      "Import bottles and distilleries in bulk via CSV files. Download pre-built templates, validate your data before import, and get detailed error reports if anything needs fixing.",
    slug: "csv-import",
  },
  {
    icon: HiShieldCheck,
    title: "Multi-User & Security",
    description:
      "Each user sees only their own data, enforced at the database level with Row Level Security. Admin-created accounts ensure only authorized users access the platform.",
  },
  {
    icon: HiDeviceMobile,
    title: "Responsive Design",
    description:
      "Full-featured tables on desktop, streamlined card views on mobile. The entire app adapts to your screen size for a great experience on any device.",
  },
]

export function FeatureGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </SimpleGrid>
  )
}
