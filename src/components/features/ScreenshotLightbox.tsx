"use client"

import { Box, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

interface Screenshot {
  src: string
  alt: string
  caption: string
}

export function ScreenshotLightbox({ screenshot }: { screenshot: Screenshot }) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, close])

  return (
    <>
      <VStack gap={2}>
        <Box
          as="button"
          onClick={() => setOpen(true)}
          cursor="zoom-in"
          w="25%"
          rounded="xl"
          overflow="hidden"
          border="1px solid"
          borderColor={{ base: "amber.200", _dark: "whiskey.700" }}
          shadow="md"
          transition="all 0.2s"
          _hover={{ shadow: "lg", borderColor: { base: "amber.400", _dark: "amber.600" } }}
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={600}
            height={900}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Text
          fontSize="xs"
          color={{ base: "whiskey.500", _dark: "whiskey.400" }}
          textAlign="center"
        >
          {screenshot.caption}
        </Text>
      </VStack>

      {open && (
        <Box
          position="fixed"
          inset={0}
          zIndex={9999}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="blackAlpha.800"
          onClick={close}
          cursor="zoom-out"
          p={4}
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={1200}
            height={1800}
            style={{
              maxWidth: "100%",
              maxHeight: "100vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "0.75rem",
            }}
            priority
          />
        </Box>
      )}
    </>
  )
}
