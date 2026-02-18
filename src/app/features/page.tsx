import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { FeatureGrid } from "@/components/features/FeatureGrid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features — MyWhiskeyCollection",
  description:
    "Explore the features of MyWhiskeyCollection: dashboard analytics, bottle management, distillery directory, CSV import, and more.",
}

export default function FeaturesPage() {
  return (
    <main>
      <Box py={20}>
        <Container maxW="5xl">
          <VStack gap={12}>
            <VStack gap={3} textAlign="center">
              <Heading
                as="h1"
                fontFamily="var(--font-playfair), serif"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={{ base: "whiskey.800", _dark: "amber.100" }}
              >
                Features
              </Heading>
              <Text
                fontSize="lg"
                color={{ base: "whiskey.600", _dark: "whiskey.300" }}
                maxW="2xl"
              >
                Everything you need to catalog, explore, and enjoy your whiskey
                collection.
              </Text>
            </VStack>
            <FeatureGrid />
          </VStack>
        </Container>
      </Box>
    </main>
  )
}
