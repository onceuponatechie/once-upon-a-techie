import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "re_placeholder");
}

const subscribeSchema = z.object({
  email: z.string().email("Please provide a valid email address."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = subscribeSchema.parse(body);

    const resend = getResend();
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0].message },
        { status: 400 },
      );
    }

    console.error("Newsletter subscription error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
