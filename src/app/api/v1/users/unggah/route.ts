import { NextResponse } from "next/server";

export interface UploadResponse {
  succes: boolean;
  message: string;
  data: {
    source: string;
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("filepond") as File;
    const fileName = `file-${Math.random()
      .toString(36)
      .substring(2, 15)}.${file.name.split(".").pop()}`;

    const uploadFile = {
      source: `/uploads/${fileName}`,
    };

    const response: UploadResponse = {
      succes: true,
      message: "Upload successful!",
      data: uploadFile,
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
