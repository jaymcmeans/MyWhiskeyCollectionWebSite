import { Box, Container, Heading, Text, VStack, List, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { HiArrowLeft } from "react-icons/hi"
import { ScreenshotLightbox } from "@/components/features/ScreenshotLightbox"

interface Screenshot {
  src: string
  alt: string
  caption: string
}

interface FeatureDetail {
  title: string
  subtitle: string
  description: string
  screenshots: Screenshot[]
  highlights: string[]
}

const FEATURE_DATA: Record<string, FeatureDetail> = {
  dashboard: {
    title: "Dashboard & Analytics",
    subtitle: "Your collection at a glance",
    description:
      "The dashboard provides a comprehensive overview of your entire whiskey collection. As soon as you log in, you see the numbers that matter most — total bottles, unique distilleries, and estimated collection value — displayed in clear stats cards. Each stat card breaks down further into categories like unopened, opened, and empty bottles so you always know the state of your shelves.",
    screenshots: [
      {
        src: "/features/dashboard1.png",
        alt: "Dashboard stats cards showing total bottles, distilleries, and collection value",
        caption: "Stats cards with breakdowns for unopened, opened, and empty bottles",
      },
      {
        src: "/features/dashboard2.png",
        alt: "Charts showing bottles by type and bottles by country",
        caption: "Interactive charts by type and country of origin",
      },
      {
        src: "/features/dashboard3.png",
        alt: "Recent additions activity feed",
        caption: "Recent additions feed showing your latest acquisitions",
      },
    ],
    highlights: [
      "Stats cards showing total bottles, unique distilleries, and collection value",
      "Breakdown lists within each stat: unopened, opened, and empty counts",
      "Interactive chart of bottles grouped by type (bourbon, scotch, rye, etc.)",
      "Chart of bottles grouped by country of origin",
      "Recent additions activity feed showing your latest acquisitions",
    ],
  },
  bottles: {
    title: "Bottle Management",
    subtitle: "Full control over every bottle",
    description:
      "The bottles section is the core of MyWhiskeyCollection. You can add new bottles, edit existing entries, and remove bottles you no longer own — all through a clean, intuitive interface. The table view supports searching by name, filtering by type or status, filtering by distillery, and sorting by any column. A detail view for each bottle shows proof, age, purchase price, purchase date, tasting notes, label images, and characteristic tags like single barrel or cask strength.",
    screenshots: [
      {
        src: "/features/bottles1.png",
        alt: "Bottle list with search bar and View, Edit, Delete actions",
        caption: "Browse your collection with search and quick actions",
      },
      {
        src: "/features/bottles_filter.png",
        alt: "Filter panel with distillery, type, status, and size options",
        caption: "Filter by distillery, type, status, and size",
      },
      {
        src: "/features/bottle_view.png",
        alt: "Bottle detail view showing proof, age, purchase info, and characteristics",
        caption: "Detailed view with proof, purchase info, and characteristics",
      },
      {
        src: "/features/bottles_add_edit.png",
        alt: "Edit bottle form with fields for name, type, status, size, and distillery",
        caption: "Guided form for adding and editing bottles",
      },
      {
        src: "/features/bottles_pics.png",
        alt: "Bottle label images showing front and back labels",
        caption: "Attach front and back label images to any bottle",
      },
    ],
    highlights: [
      "Add, edit, view, and delete bottles through a guided form",
      "Search by name with instant results",
      "Filter by type, status, or distillery and sort by any column",
      "Detail view with proof, age, purchase info, tasting notes, and label images",
      "Characteristic tags: single barrel, cask strength, limited edition, and more",
      "Paginated table with configurable page size",
    ],
  },
  distilleries: {
    title: "Distillery Directory",
    subtitle: "Know where your whiskey comes from",
    description:
      "The distillery directory lets you maintain a complete catalog of the distilleries behind your bottles. Each entry stores the distillery name, region, country, street address, city, state, and year founded. Because distilleries are linked to bottles, you can navigate from a distillery straight to every bottle in your collection that came from it.",
    screenshots: [
      {
        src: "/features/distilleries_table.png",
        alt: "Distillery directory showing names, locations, and action buttons",
        caption: "Browse, search, and manage your distillery directory",
      },
    ],
    highlights: [
      "Add, edit, view, and delete distillery records",
      "Fields for name, region, country, address, city, state, and year founded",
      "Search distilleries by name",
      "Filter the directory by country",
      "See all linked bottles from each distillery in one click",
    ],
  },
  "csv-import": {
    title: "CSV Import",
    subtitle: "Bulk import your collection data",
    description:
      "When you have a large collection to catalog, entering bottles one by one is impractical. The CSV import feature lets you upload a spreadsheet of bottles or distilleries and add them all at once. Download pre-built CSV templates that match the exact format the app expects, fill them in, and upload. The importer validates every row before committing, giving you a detailed error report if anything needs attention. You can also export your entire collection to Excel at any time.",
    screenshots: [
      {
        src: "/features/utilities.png",
        alt: "Utilities page with Data Import, Data Export, and Account Settings sections",
        caption: "Import, export, and account utilities in one place",
      },
      {
        src: "/features/csv_import.png",
        alt: "CSV import dialog with template download and file upload",
        caption: "Download a template, then upload your CSV to import",
      },
    ],
    highlights: [
      "Import bottles and distilleries in bulk from CSV files",
      "Download pre-built CSV templates with the correct column headers",
      "Data validation before import with row-by-row error reporting",
      "Detailed error messages that tell you exactly what to fix",
      "Excel export of your full collection for backup or sharing",
    ],
  },
}

const VALID_SLUGS = ["dashboard", "bottles", "distilleries", "csv-import"]

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = FEATURE_DATA[slug]
  if (!feature) return { title: "Feature — MyWhiskeyCollection" }
  return {
    title: `${feature.title} — MyWhiskeyCollection`,
    description: feature.subtitle,
  }
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feature = FEATURE_DATA[slug]

  if (!feature) {
    notFound()
  }

  return (
    <Box py={20} bg={{ base: "amber.50", _dark: "whiskey.950" }}>
      <Container maxW="3xl" mx="auto">
        <VStack gap={10} align="start">
          <Link
            href="/features"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <HiArrowLeft />
            <Text
              as="span"
              fontSize="sm"
              fontWeight="medium"
              color={{ base: "amber.600", _dark: "amber.400" }}
            >
              Back to Features
            </Text>
          </Link>

          <VStack gap={3} align="start">
            <Heading
              as="h1"
              fontFamily="var(--font-playfair), serif"
              fontSize={{ base: "3xl", md: "4xl" }}
              color={{ base: "whiskey.800", _dark: "amber.100" }}
            >
              {feature.title}
            </Heading>
            <Text
              fontSize="lg"
              color={{ base: "whiskey.600", _dark: "whiskey.300" }}
            >
              {feature.subtitle}
            </Text>
          </VStack>

          <Text
            fontSize="md"
            color={{ base: "whiskey.700", _dark: "whiskey.200" }}
            lineHeight="tall"
          >
            {feature.description}
          </Text>

          <Flex gap={6} w="full" wrap="wrap" justify="center">
            {feature.screenshots.map((shot) => (
              <ScreenshotLightbox key={shot.src} screenshot={shot} />
            ))}
          </Flex>

          <Box w="full">
            <Heading
              as="h2"
              fontSize="xl"
              fontFamily="var(--font-playfair), serif"
              color={{ base: "whiskey.800", _dark: "amber.100" }}
              mb={4}
            >
              Key Highlights
            </Heading>
            <List.Root gap={3} ps={5}>
              {feature.highlights.map((item) => (
                <List.Item
                  key={item}
                  fontSize="sm"
                  color={{ base: "whiskey.700", _dark: "whiskey.200" }}
                  lineHeight="tall"
                >
                  {item}
                </List.Item>
              ))}
            </List.Root>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
