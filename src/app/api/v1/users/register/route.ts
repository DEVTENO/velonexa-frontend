import { FetchApiResponse, RegisterFormData } from "@/lib/types/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RegisterFormData;

    const newUser = {
      id: "user-" + Math.random().toString(36).substring(2),
      ...body,
    };
    const res: FetchApiResponse<RegisterFormData> = {
      success: true,
      message: "Pendaftaran Akun Kamu Berhasil",
      data: newUser,
    };

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    const errorResponse: FetchApiResponse<null> = {
      success: false,
      message: "Internal Server Error",
      data: null,
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
