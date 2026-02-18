"use client"

import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { HiChartBar, HiCollection, HiUpload } from "react-icons/hi"

const HIGHLIGHTS = [
  {
    icon: HiChartBar,
    title: "Dashboard & Analytics",
    description:
      "Get instant insights with stats cards and charts breaking down your collection by type, status, and country of origin.",
  },
  {
    icon: HiCollection,
    title: "Bottle Management",
    description:
      "Add, edit, search, filter, and sort your bottles with full pagination. Every detail at your fingertips.",
  },
  {
    icon: HiUpload,
    title: "Bulk Import",
    description:
      "Import your entire collection at once via CSV. Download templates, validate data, and get up and running fast.",
  },
]

export function OverviewSection() {
  return (
    <Box py={20}>
      <Container maxW="6xl">
        <VStack gap={12}>
          <VStack gap={3} textAlign="center">
            <Heading
              as="h2"
              fontFamily="var(--font-playfair), serif"
              fontSize={{ base: "2xl", md: "3xl" }}
              color={{ base: "whiskey.800", _dark: "amber.100" }}
            >
              Everything You Need
            </Heading>
            <Text
              fontSize="lg"
              color={{ base: "whiskey.600", _dark: "whiskey.300" }}
              maxW="xl"
            >
              A complete toolkit for the serious whiskey enthusiast.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
            {HIGHLIGHTS.map((item) => (
              <Box
                key={item.title}
                bg={{ base: "white", _dark: "whiskey.900" }}
                border="1px solid"
                borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
                rounded="xl"
                p={8}
                textAlign="center"
                _hover={{
                  shadow: "lg",
                  borderColor: { base: "amber.400", _dark: "amber.600" },
                }}
                transition="all 0.2s"
              >
                <VStack gap={4}>
                  <Box
                    as={item.icon}
                    boxSize={10}
                    color={{ base: "amber.600", _dark: "amber.400" }}
                  />
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontFamily="var(--font-playfair), serif"
                    color={{ base: "whiskey.800", _dark: "amber.100" }}
                  >
                    {item.title}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={{ base: "whiskey.600", _dark: "whiskey.300" }}
                  >
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
