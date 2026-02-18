import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import Link from "next/link"
import type { IconType } from "react-icons"
import type { ComponentType } from "react"
import { HiArrowRight } from "react-icons/hi"

interface FeatureCardProps {
  icon: IconType | ComponentType<{ size?: number | string; color?: string }>
  title: string
  description: string
  slug?: string
}

function CardContent({
  icon: Icon,
  title,
  description,
  slug,
}: FeatureCardProps) {
  return (
    <Box
      bg={{ base: "white", _dark: "whiskey.900" }}
      border="1px solid"
      borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
      rounded="xl"
      p={8}
      _hover={{
        shadow: "lg",
        borderColor: { base: "amber.400", _dark: "amber.600" },
      }}
      transition="all 0.2s"
      height="100%"
    >
      <VStack align="center" gap={4} textAlign="center">
        <Box boxSize={8} color={{ base: "amber.600", _dark: "amber.400" }}>
          <Icon size={32} color="currentColor" />
        </Box>
        <Heading
          as="h3"
          fontSize="lg"
          fontFamily="var(--font-playfair), serif"
          color={{ base: "whiskey.800", _dark: "amber.100" }}
        >
          {title}
        </Heading>
        <Text
          fontSize="sm"
          color={{ base: "whiskey.600", _dark: "whiskey.300" }}
          lineHeight="tall"
        >
          {description}
        </Text>
        {slug && (
          <HStack
            gap={1}
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "amber.600", _dark: "amber.400" }}
          >
            <Text>Learn more</Text>
            <Box as={HiArrowRight} boxSize={4} />
          </HStack>
        )}
      </VStack>
    </Box>
  )
}

export function FeatureCard(props: FeatureCardProps) {
  if (props.slug) {
    return (
      <Link
        href={`/features/${props.slug}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <CardContent {...props} />
      </Link>
    )
  }

  return <CardContent {...props} />
}
