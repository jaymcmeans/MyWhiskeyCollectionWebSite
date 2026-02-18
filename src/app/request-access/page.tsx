import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { RequestAccessForm } from "@/components/request-access/RequestAccessForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request Access — MyWhiskeyCollection",
  description:
    "Request an invite to MyWhiskeyCollection. Fill out the form and we'll get you set up.",
}

export default function RequestAccessPage() {
  return (
    <Box py={20}>
      <Container maxW="xl" mx="auto">
          <VStack gap={8}>
            <VStack gap={3} textAlign="center">
              <Heading
                as="h1"
                fontFamily="var(--font-playfair), serif"
                fontSize={{ base: "3xl", md: "4xl" }}
                color={{ base: "whiskey.800", _dark: "amber.100" }}
              >
                Request Access
              </Heading>
              <Text
                fontSize="lg"
                color={{ base: "whiskey.600", _dark: "whiskey.300" }}
              >
                MyWhiskeyCollection is currently invite-only. Fill out the form
                below and we&apos;ll review your request.
              </Text>
            </VStack>
            <Box
              w="full"
              bg={{ base: "white", _dark: "whiskey.900" }}
              border="1px solid"
              borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
              rounded="xl"
              p={{ base: 6, md: 8 }}
              shadow="sm"
            >
              <RequestAccessForm />
            </Box>
          </VStack>
        </Container>
      </Box>
  )
}
