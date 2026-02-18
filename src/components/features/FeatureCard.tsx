import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import type { IconType } from "react-icons"

interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
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
    >
      <VStack align="flex-start" gap={4}>
        <Box
          as={icon}
          boxSize={8}
          color={{ base: "amber.600", _dark: "amber.400" }}
        />
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
      </VStack>
    </Box>
  )
}
