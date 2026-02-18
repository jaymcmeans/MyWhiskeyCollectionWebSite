import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { StepTimeline } from "@/components/how-to-use/StepTimeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Use — MyWhiskeyCollection",
  description:
    "Learn how to use MyWhiskeyCollection: from getting access to managing your bottles, distilleries, and dashboard.",
}

export default function HowToUsePage() {
  return (
    <main>
      <Box py={20}>
        <Container maxW="3xl">
          <VStack gap={12}>
            <VStack gap={3} textAlign="center">
              <Heading
                as="h1"
                fontFamily="var(--font-playfair), serif"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={{ base: "whiskey.800", _dark: "amber.100" }}
              >
                How to Use
              </Heading>
              <Text
                fontSize="lg"
                color={{ base: "whiskey.600", _dark: "whiskey.300" }}
                maxW="xl"
              >
                Get started with MyWhiskeyCollection in six simple steps.
              </Text>
            </VStack>
            <StepTimeline />
          </VStack>
        </Container>
      </Box>
    </main>
  )
}
