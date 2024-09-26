import { FetchApiResponse, LoginFormData } from "@/lib/types/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const dummyUser: LoginFormData[] = [
      {
        username: "user-1",
        password: "Rahasia@1",
      },
      {
        username: "jondoloro",
        password: "rahasia12",
      },
    ];

    const body = (await req.json()) as LoginFormData;
    const { username, password } = body as LoginFormData;
    const findUser = dummyUser.find((item) => item.username == username);
    if (findUser?.username === username && findUser?.password === password) {
      const res: FetchApiResponse<LoginFormData> = {
        success: true,
        data: findUser,
        message: "Login Success",
      };

      return NextResponse.json(res, { status: 201 });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    const errorResponse: FetchApiResponse<null> = {
      success: false,
      message: "Internal server error",
      data: null,
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
