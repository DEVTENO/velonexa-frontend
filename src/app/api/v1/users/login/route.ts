import { FetchApiResponse, LoginFormData } from "@/lib/types/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const body = (await req.json()) as LoginFormData
        const { username, password } = body

        const isValid = true

        if (isValid) {
            const dummyUser: LoginFormData = {
                username: "user-1",
                password: 'Rahasia@1'
            }

            const res: FetchApiResponse<LoginFormData> = {
                success: true,
                data: dummyUser,
                message: 'Register Succesfully!'
            }

            return NextResponse.json(res, { status: 201 })

        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Invalid username or password'

            }, { status: 401 })
        }
    } catch (error) {

        const errorResponse: FetchApiResponse<null> = {
            success: false,
            message: 'Internal server error',
            data: null

        }

        return NextResponse.json(errorResponse, { status: 500 })
    }

}