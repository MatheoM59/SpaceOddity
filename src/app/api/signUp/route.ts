import { sql } from "@/lib/db";
import { createSession } from "@/lib/auth";
import bcrypt from "bcryptjs";
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return Response.json(
        { message: "Email and password required" },
        { status: 400 },
      );
    }
    if (password.length < 8) {
      return Response.json(
        {
          message: "Password too short mnimum 8 caracters !",
        },
        {
          status: 400,
        },
      );
    }
    const password_hash = await bcrypt.hash(password, 10);
    const user = await sql`
        INSERT INTO users (email, password_hash, created_at) VALUES (${email.trim().toLowerCase()}, ${password_hash}, NOW() ) RETURNING id      
    `;
    await createSession(user[0].id);
    return Response.json(
      {
        message: "Connected",
        id: user[0].id,
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
        { message: "Email already taken !" },
        { status: 409 },
      );
    }

    return Response.json({ message: "Network Error" }, { status: 500 });
  }
}
