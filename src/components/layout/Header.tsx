"use client"

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { ColorModeButton } from "@/components/ui/color-mode"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-to-use", label: "How to Use" },
  { href: "/request-access", label: "Request Access" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      bg={{ base: "rgba(255,248,225,0.9)", _dark: "rgba(26,17,11,0.9)" }}
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor={{ base: "amber.200", _dark: "whiskey.800" }}
    >
      <Container maxW="6xl" mx="auto" py={3}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/">
            <Text
              fontFamily="var(--font-playfair), serif"
              fontSize="xl"
              fontWeight="bold"
              color={{ base: "amber.800", _dark: "amber.300" }}
            >
              MyWhiskeyCollection
            </Text>
          </Link>

          {/* Desktop nav */}
          <HStack gap={6} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <Text
                    fontSize="sm"
                    fontWeight={isActive ? "bold" : "medium"}
                    color={
                      isActive
                        ? { base: "amber.700", _dark: "amber.400" }
                        : { base: "whiskey.700", _dark: "whiskey.200" }
                    }
                    borderBottom={isActive ? "2px solid" : "2px solid transparent"}
                    borderColor={isActive ? { base: "amber.500", _dark: "amber.400" } : "transparent"}
                    pb={1}
                    _hover={{
                      color: { base: "amber.600", _dark: "amber.300" },
                    }}
                    transition="all 0.2s"
                  >
                    {link.label}
                  </Text>
                </Link>
              )
            })}
            <ColorModeButton />
          </HStack>

          {/* Mobile controls */}
          <HStack gap={1} display={{ base: "flex", md: "none" }}>
            <ColorModeButton />
            <IconButton
              aria-label="Toggle menu"
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </IconButton>
          </HStack>
        </Flex>

        {/* Mobile menu */}
        {mobileOpen && (
          <VStack
            align="stretch"
            gap={2}
            pt={4}
            pb={2}
            display={{ base: "flex", md: "none" }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <Text
                    px={3}
                    py={2}
                    rounded="md"
                    fontWeight={isActive ? "bold" : "normal"}
                    bg={isActive ? { base: "amber.100", _dark: "whiskey.800" } : "transparent"}
                    color={
                      isActive
                        ? { base: "amber.800", _dark: "amber.300" }
                        : { base: "whiskey.700", _dark: "whiskey.200" }
                    }
                    _hover={{
                      bg: { base: "amber.50", _dark: "whiskey.900" },
                    }}
                    transition="all 0.2s"
                  >
                    {link.label}
                  </Text>
                </Link>
              )
            })}
          </VStack>
        )}
      </Container>
    </Box>
  )
}
