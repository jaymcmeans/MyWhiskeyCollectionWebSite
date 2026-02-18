"use server"

import { supabase } from "@/lib/supabase"

interface RequestAccessState {
  success: boolean
  error?: string
}

export async function submitAccessRequest(
  _prevState: RequestAccessState | null,
  formData: FormData
): Promise<RequestAccessState> {
  const turnstileToken = formData.get("cf-turnstile-response") as string

  if (!turnstileToken) {
    return { success: false, error: "Please complete the CAPTCHA verification." }
  }

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  )

  const verifyData = await verifyRes.json()

  if (!verifyData.success) {
    return { success: false, error: "CAPTCHA verification failed. Please try again." }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !name.trim()) {
    return { success: false, error: "Name is required." }
  }

  if (!email || !email.trim()) {
    return { success: false, error: "Email is required." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message?.trim() || null

  // Log to console as audit trail
  console.log("=== New Access Request ===")
  console.log(`Name:    ${trimmedName}`)
  console.log(`Email:   ${trimmedEmail}`)
  console.log(`Message: ${trimmedMessage || "(none)"}`)
  console.log("==========================")

  // Insert into Supabase
  const { error: dbError } = await supabase
    .from("access_requests")
    .insert({ name: trimmedName, email: trimmedEmail, message: trimmedMessage })

  if (dbError) {
    console.error("Supabase insert error:", dbError)
    return { success: false, error: "Something went wrong. Please try again." }
  }

  // Send notification email via Edge Function (fire-and-forget)
  supabase.functions
    .invoke("send-access-request-email", {
      body: { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
    })
    .then(({ error }) => {
      if (error) console.error("Edge Function email error:", error)
    })
    .catch((err) => {
      console.error("Edge Function call failed:", err)
    })

  return { success: true }
}
