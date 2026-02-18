import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-to-use", label: "How to Use" },
  { href: "/request-access", label: "Request Access" },
]

export function Footer() {
  return (
    <Box
      as="footer"
      bg={{ base: "whiskey.900", _dark: "whiskey.950" }}
      color="whiskey.100"
      py={12}
    >
      <Container maxW="6xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {/* Logo & tagline */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={2}>
            <Text
              fontFamily="var(--font-playfair), serif"
              fontSize="xl"
              fontWeight="bold"
              color="amber.300"
            >
              MyWhiskeyCollection
            </Text>
            <Text fontSize="sm" color="whiskey.300">
              Track, manage, and explore your whiskey collection with ease.
            </Text>
          </VStack>

          {/* Nav links */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={2}>
            <Text fontWeight="bold" color="amber.400" fontSize="sm" mb={1}>
              Navigation
            </Text>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <Text
                  fontSize="sm"
                  color="whiskey.300"
                  _hover={{ color: "amber.300" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </VStack>

          {/* CTA */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={2}>
            <Text fontWeight="bold" color="amber.400" fontSize="sm" mb={1}>
              Get Started
            </Text>
            <Text fontSize="sm" color="whiskey.300">
              MyWhiskeyCollection is currently invite-only.
            </Text>
            <Link href="/request-access">
              <Text
                fontSize="sm"
                color="amber.300"
                fontWeight="medium"
                _hover={{ color: "amber.200" }}
                transition="color 0.2s"
              >
                Request Access &rarr;
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>

        <Box
          mt={10}
          pt={6}
          borderTop="1px solid"
          borderColor="whiskey.800"
          textAlign="center"
        >
          <Text fontSize="xs" color="whiskey.500">
            &copy; {new Date().getFullYear()} MyWhiskeyCollection. All rights
            reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
