import { DATA_BOOKMARK, DATA_BOOKMARK_DETAIL } from "@/lib/constants/fetchapi";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { bookmarkId: string } }
) {
  const { bookmarkId } = params;
  const findBookmarkById = DATA_BOOKMARK_DETAIL.data.filter(
    (item) => item.mediaId === bookmarkId
  );
  console.log(findBookmarkById);
  if (findBookmarkById.find((item) => item.mediaId === bookmarkId)) {
    return NextResponse.json({
      success: true,
      message: "Data Successfull bro",
      data: findBookmarkById,
    });
  } else {
    return NextResponse.json(
      { success: false, message: "bookmark tidak ada" },
      { status: 404 }
    );
  }
}
