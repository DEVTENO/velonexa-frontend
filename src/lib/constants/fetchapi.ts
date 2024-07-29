import { FetchApiResponse, UserDetail } from "../types/types";

export const userDetail: FetchApiResponse<UserDetail[]> = {
  success: true,
  data: [
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
  ],
  message: "Success get detail user",
};
