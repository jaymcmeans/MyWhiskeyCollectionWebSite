import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react"

interface StepCardProps {
  number: number
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <HStack align="flex-start" gap={4}>
      <Box
        flexShrink={0}
        w={10}
        h={10}
        rounded="full"
        bg={{ base: "amber.600", _dark: "amber.500" }}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        fontSize="lg"
        fontFamily="var(--font-playfair), serif"
      >
        {number}
      </Box>
      <VStack align="flex-start" gap={1} pt={1}>
        <Heading
          as="h3"
          fontSize="md"
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
    </HStack>
  )
}
