"use client"

import { useActionState } from "react"
import { Box, Button, Field, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { Turnstile } from "@marsidev/react-turnstile"
import { submitAccessRequest } from "@/app/request-access/actions"

export function RequestAccessForm() {
  const [state, formAction, isPending] = useActionState(submitAccessRequest, null)

  if (state?.success) {
    return (
      <Box
        bg={{ base: "green.50", _dark: "green.950" }}
        border="1px solid"
        borderColor={{ base: "green.200", _dark: "green.800" }}
        rounded="xl"
        p={8}
        textAlign="center"
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          color={{ base: "green.700", _dark: "green.300" }}
          mb={2}
        >
          Request Submitted!
        </Text>
        <Text color={{ base: "green.600", _dark: "green.400" }}>
          Thank you for your interest. We&apos;ll review your request and get
          back to you soon.
        </Text>
      </Box>
    )
  }

  return (
    <form action={formAction}>
      <VStack gap={5} align="stretch">
        {state?.error && (
          <Box
            bg={{ base: "red.50", _dark: "red.950" }}
            border="1px solid"
            borderColor={{ base: "red.200", _dark: "red.800" }}
            rounded="md"
            px={4}
            py={3}
          >
            <Text fontSize="sm" color={{ base: "red.600", _dark: "red.400" }}>
              {state.error}
            </Text>
          </Box>
        )}

        <Field.Root>
          <Field.Label
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "whiskey.700", _dark: "whiskey.200" }}
          >
            Name *
          </Field.Label>
          <Input
            name="name"
            placeholder="Your full name"
            bg={{ base: "white", _dark: "whiskey.900" }}
            borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
            _focus={{
              borderColor: { base: "amber.500", _dark: "amber.400" },
              boxShadow: "0 0 0 1px var(--chakra-colors-amber-500)",
            }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "whiskey.700", _dark: "whiskey.200" }}
          >
            Email *
          </Field.Label>
          <Input
            name="email"
            type="email"
            placeholder="you@example.com"
            bg={{ base: "white", _dark: "whiskey.900" }}
            borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
            _focus={{
              borderColor: { base: "amber.500", _dark: "amber.400" },
              boxShadow: "0 0 0 1px var(--chakra-colors-amber-500)",
            }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label
            fontSize="sm"
            fontWeight="medium"
            color={{ base: "whiskey.700", _dark: "whiskey.200" }}
          >
            Message (optional)
          </Field.Label>
          <Textarea
            name="message"
            placeholder="Tell us a bit about your collection or why you'd like access..."
            rows={4}
            bg={{ base: "white", _dark: "whiskey.900" }}
            borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
            _focus={{
              borderColor: { base: "amber.500", _dark: "amber.400" },
              boxShadow: "0 0 0 1px var(--chakra-colors-amber-500)",
            }}
          />
        </Field.Root>

        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />

        <Button
          type="submit"
          size="lg"
          bg={{ base: "amber.600", _dark: "amber.500" }}
          color="white"
          _hover={{ bg: { base: "amber.700", _dark: "amber.600" } }}
          fontWeight="bold"
          loading={isPending}
          loadingText="Submitting..."
          w="full"
        >
          Submit Request
        </Button>
      </VStack>
    </form>
  )
}
