import { sql } from "@/lib/db";
import { getUserId } from "@/lib/auth";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const userId = await getUserId();
    const { apod_date } = await request.json();
    if (!userId) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        { status: 400 },
      );
    }
    if (!apod_date) {
      return Response.json({ message: "Apod date required" }, { status: 400 });
    }
    await sql`
        INSERT INTO favorites (user_id, apod_date, created_at ) VALUES (${userId}, ${apod_date}, NOW())
    `;
    return Response.json(
      {
        message: "Added to favorites",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return Response.json(
        { message: "Apod already added !" },
        { status: 409 },
      );
    }
    return Response.json({ message: "Network error" }, { status: 500 });
  }
}
