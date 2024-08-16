import {
  FetchApiResponse,
  OtherUserPost,
  UserBookmark,
  UserBookmarkDetail,
  UserDetail,
} from "../types/types";

// contain information user profile
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

// contain all posts user
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

// Data Saved / bookmark
export const DATA_BOOKMARK: FetchApiResponse<UserBookmark[]> = {
  success: true,
  data: [
    {
      id: "0121",
      name: "all-posts",
      images: [
        "/image4.jpg",
        "/user-profile.jpg",
        "/user-profile.jpg",
        "/image4.jpg",
      ],
    },
    {
      id: "2111",
      name: "valorant",
      images: [
        "/user-profile.jpg",
        "/image4.jpg",
        "/user-profile.jpg",
        "/image4.jpg",
        "/user-profile.jpg",
      ],
    },
  ],
  message: "Success get bookmarks",
};

// detail bookmark
export const DATA_BOOKMARK_DETAIL: FetchApiResponse<UserBookmarkDetail[]> = {
  success: true,
  message: "success get detail bookmark",
  data: [
    {
      mediaId: "0121",
      image: "/user-profile.jpg",
      countLike: 12103,
      countComment: 123,
    },
    {
      mediaId: "0121",
      image: "/image4.jpg",
      countLike: 21400,
      countComment: 900,
    },
    {
      mediaId: "0121",
      image: "/user-profile.jpg",
      countLike: 11213,
      countComment: 2109,
    },
    {
      mediaId: "0121",
      image: "/image4.jpg",
      countLike: 11221,
      countComment: 123,
    },
    {
      mediaId: "2111",
      image: "/user-profile.jpg",
      countLike: 121,
      countComment: 120,
    },
    {
      mediaId: "2111",
      image: "/image4.jpg",
      countLike: 1213,
      countComment: 9,
    },
    {
      mediaId: "2111",
      image: "/user-profile.jpg",
      countLike: 10,
      countComment: 10,
    },
    {
      mediaId: "2111",
      image: "/image4.jpg",
      countLike: 771,
      countComment: 430,
    },
    {
      mediaId: "2111",
      image: "/user-profile.jpg",
      countLike: 120,
      countComment: 430,
    },
  ],
};
