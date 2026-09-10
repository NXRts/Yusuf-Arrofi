import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    // Process transmission (Mock log / ready for Webhook / Email integration)
    console.log("[Contact Transmission Received]:", {
      name,
      email,
      projectType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Transmission received successfully. Yusuf will reply shortly.",
        dispatchId: `DISPATCH-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error occurred during transmission dispatch." },
      { status: 500 }
    );
  }
}
