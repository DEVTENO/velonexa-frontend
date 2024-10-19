import { FetchApiResponse, UploadResponse } from "@/lib/types/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("filepond") as File;
    const fileName = `file-${Math.random()
      .toString(36)
      .substring(2, 15)}.${file.name.split(".").pop()}`;

    const response: FetchApiResponse<UploadResponse> = {
      success: true,
      message: "Upload successful!",
      data: {
        source: `/uploads/${fileName}`,
      },
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error during upload", error);

    return NextResponse.json(
      { succes: false, message: "Upload Failed" },
      { status: 500 }
    );
  }
}
