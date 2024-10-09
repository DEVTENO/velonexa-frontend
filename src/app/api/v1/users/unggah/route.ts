import { NextResponse } from "next/server";

interface UploadResponse {
  succes: boolean;
  message: string;
  data: {
    source: string;
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
  } catch (error) {}
}
