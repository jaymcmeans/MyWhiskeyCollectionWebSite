import { Box, VStack } from "@chakra-ui/react"
import { StepCard } from "./StepCard"

const STEPS = [
  {
    title: "Get Access",
    description:
      "Submit a request through our access form. An admin will review your request and create your account. You'll receive your credentials to get started.",
  },
  {
    title: "Import Your Collection (Optional)",
    description:
      "Already have a spreadsheet of your collection? Use the CSV import to bring in your bottles and distilleries in bulk. Download the pre-built templates, match your data to the expected format, and upload. You can skip this step and add everything manually instead.",
  },
  {
    title: "Add Distilleries",
    description:
      "Start by adding the distilleries behind your bottles. Enter details like name, region, country, and founding year — or import them in bulk via CSV.",
  },
  {
    title: "Add Bottles",
    description:
      "Add bottles one by one with full details (name, type, ABV, age, distillery, tasting notes, status) or use the CSV import to bring in your entire collection at once.",
  },
  {
    title: "Explore Your Dashboard",
    description:
      "Head to the dashboard to see your collection come to life. View stats cards, charts by whiskey type, bottle status breakdowns, and country-of-origin analytics.",
  },
  {
    title: "Search & Filter",
    description:
      "Use powerful search, filtering, and sorting to find any bottle in your collection. Paginate through large collections with ease.",
  },
  {
    title: "Manage Over Time",
    description:
      "Update bottle statuses as you open and enjoy them. Add new acquisitions, track your growing collection, and keep your whiskey journey organized.",
  },
]

export function StepTimeline() {
  return (
    <VStack align="stretch" gap={0} position="relative">
      {/* Vertical line */}
      <Box
        position="absolute"
        left="20px"
        top="20px"
        bottom="20px"
        w="2px"
        bg={{ base: "amber.200", _dark: "whiskey.700" }}
        display={{ base: "none", md: "block" }}
      />
      {STEPS.map((step, index) => (
        <Box key={step.title} py={5} position="relative">
          <Box
            bg={{ base: "white", _dark: "whiskey.800" }}
            border="1px solid"
            borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
            rounded="xl"
            p={5}
            ml={{ base: 0, md: 14 }}
          >
            <StepCard
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          </Box>
        </Box>
      ))}
    </VStack>
  )
}
