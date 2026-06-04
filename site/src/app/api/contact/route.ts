import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "rstein@virtualservice.net";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const {
    name,
    company,
    email,
    phone,
    address,
    propertyType,
    units,
    concerns,
    contactMethod,
    timing,
  } = body;

  const text = [
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    address ? `Property Address: ${address}` : null,
    propertyType ? `Property Type: ${propertyType}` : null,
    units ? `Units / Size: ${units}` : null,
    concerns ? `Security Concerns:\n${concerns}` : null,
    contactMethod ? `Preferred Contact: ${contactMethod}` : null,
    timing ? `Assessment Timing: ${timing}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "AZ Security Consulting <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `New Assessment Request from ${name}`,
    text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
