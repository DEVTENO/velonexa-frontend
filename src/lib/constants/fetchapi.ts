import { FetchApiResponse, UserDetail } from "../types/types";

export const userDetail: FetchApiResponse<UserDetail[]> = {
  success: true,
  data: [
    {
      username: "user-1",
      name: "user biasa",
      isVerify: false,
      profileImage: "http://image.com/profile/user-1",
      countPost: 1,
      countFollowers: 100,
      countFollowing: 10,
      bio: "cat lovers",
    },
    {
      username: "user-2",
      name: "Bukan User Biasa",
      isVerify: false,
      profileImage: "http://image.com/profile/user-1",
      countPost: 1,
      countFollowers: 100,
      countFollowing: 10,
      bio: "cat lovers",
    },
  ],
  message: "Success get detail user",
};
