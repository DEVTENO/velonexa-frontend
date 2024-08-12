import { FetchApiResponse, OtherUserPost, UserDetail } from "../types/types";

export const USER_DETAIL: UserDetail[] = [
  {
    username: "user-1",
    name: "Azuki orange",
    isVerify: false,
    profileImage: "/user-profile.jpg",
    countPost: 1,
    countFollowers: 10000,
    countFollowing: 120,
    bio: "Calm down...",
  },
  {
    username: "user-2",
    name: "Diarrrr",
    isVerify: false,
    profileImage: "/user-profile.jpg",
    countPost: 10,
    countFollowers: 20,
    countFollowing: 30,
    bio: "cat lovers",
  },
  {
    username: "aku_siapa",
    name: "kamu siapa",
    isVerify: false,
    profileImage: "/user-profile.jpg",
    countPost: 1,
    countFollowers: 100,
    countFollowing: 10,
    bio: "cat lovers",
  },
  {
    username: "user-3",
    name: "beli macleren",
    isVerify: true,
    profileImage: "/user-profile.jpg",
    countPost: 0,
    countFollowers: 10000,
    countFollowing: 1,
    bio: "cat lovers",
  },
];
export const OTHERUSER: FetchApiResponse<OtherUserPost[]>[] = [
  {
    success: true,
    message: "success",
    username: "user-2",
    data: [
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 21320,
        countComment: 132320,
      },
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 300,
        countComment: 10,
      },
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 500,
        countComment: 10,
      },
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 500,
        countComment: 10,
      },
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 500,
        countComment: 10,
      },
    ],
  },
  {
    success: true,
    message: "success",
    username: "user-1",
    data: [
      {
        mediaId: crypto.randomUUID(),
        image: "/user-profile.jpg",
        countLike: 20,
        countComment: 10,
      },
    ],
  },
  {
    success: true,
    message: "success",
    username: "user-3",
    data: [],
  },
];
