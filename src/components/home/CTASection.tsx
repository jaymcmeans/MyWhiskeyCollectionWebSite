"use client"

import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

export function CTASection() {
  return (
    <Box
      py={16}
      bg={{ base: "amber.100", _dark: "whiskey.900" }}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
    >
      <Container maxW="3xl" mx="auto" textAlign="center">
        <VStack gap={6}>
          <Heading
            as="h2"
            fontFamily="var(--font-playfair), serif"
            fontSize={{ base: "2xl", md: "3xl" }}
            color={{ base: "whiskey.800", _dark: "amber.100" }}
          >
            Ready to Get Started?
          </Heading>
          <Text
            fontSize="lg"
            color={{ base: "whiskey.600", _dark: "whiskey.300" }}
          >
            MyWhiskeyCollection is currently invite-only. Request access and
            we&apos;ll get you set up.
          </Text>
          <Link href="/request-access">
            <Button
              size="lg"
              bg={{ base: "amber.600", _dark: "amber.500" }}
              color="white"
              _hover={{ bg: { base: "amber.700", _dark: "amber.600" } }}
              fontWeight="bold"
              px={10}
            >
              Request Access
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}
