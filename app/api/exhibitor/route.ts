import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw59AxgFRwiL0L6L804_Df5BZ7EMvAOC4uezNx5PzUstV1wRFkyoMnfBWsqCk3udKbfYA/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "exhibitor",
        ...body,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form.",
      },
      { status: 500 }
    );
  }
}