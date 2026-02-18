"use client"

import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

export function HeroSection() {
  return (
    <Box
      minH="80vh"
      display="flex"
      alignItems="center"
      bgGradient="to-br"
      gradientFrom={{ base: "amber.100", _dark: "whiskey.900" }}
      gradientVia={{ base: "amber.50", _dark: "whiskey.950" }}
      gradientTo={{ base: "gold.50", _dark: "whiskey.950" }}
    >
      <Container maxW="4xl" mx="auto" textAlign="center">
        <VStack gap={6}>
          <Heading
            as="h1"
            fontFamily="var(--font-playfair), serif"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color={{ base: "whiskey.900", _dark: "amber.50" }}
          >
            Your Whiskey Collection,{" "}
            <Box as="span" color={{ base: "amber.700", _dark: "amber.400" }}>
              Perfected
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={{ base: "whiskey.600", _dark: "whiskey.200" }}
            maxW="2xl"
          >
            Track every bottle, explore your collection with rich analytics, and
            manage distilleries — all in one beautifully crafted app.
          </Text>
          <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center" pt={4}>
            <Link href="/request-access">
              <Button
                size="lg"
                bg={{ base: "amber.600", _dark: "amber.500" }}
                color="white"
                _hover={{ bg: { base: "amber.700", _dark: "amber.600" } }}
                fontWeight="bold"
                px={8}
              >
                Request Access
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                borderColor={{ base: "amber.600", _dark: "amber.500" }}
                color={{ base: "amber.700", _dark: "amber.400" }}
                _hover={{
                  bg: { base: "amber.50", _dark: "whiskey.800" },
                }}
                fontWeight="bold"
                px={8}
              >
                Explore Features
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
