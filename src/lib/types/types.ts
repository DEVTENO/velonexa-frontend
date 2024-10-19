interface FetchApiResponse<ResultsType> {
  success: boolean;
  message: string;
  username?: string;
  data?: ResultsType;
  error?: WebError;
}

type UploadResponse = {
  source: string | undefined;
};

interface WebError {
  code: number;
  status: string;
  message: string;
}

/**
 * @typedef {Object} LoginFormData - Data yang dikirimkan pada saat register
 * @property {string} username - Username yang unik untuk user. Harus lebih dari 3 karakter.
 * @property {string} email - Alamat email yang valid.
 */

type LoginFormData = {
  username: string;
  password: string;
};

/**
 * @typedef {Object} RegisterFormData - Data yang dikirimkan pada saat register
 * @property {string} username - Username yang unik untuk user. Harus lebih dari 3 karakter.
 * @property {string} email - Alamat email yang valid.
 * @property {string} password - Password minimal 8 karakter, harus mengandung huruf besar, huruf kecil, dan angka.
 * @property {string} confirmPassword - Konfirmasi password, harus sama dengan password.
 */
type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

/**
 * @typedef {Object} UserProfile
 * @property {string} username - unique name for user.
 * @property {string} name - name of user.
 * @property {boolean} isVerify - is user verifiy or not
 * @property {string} profileImage - The URL of the user's image.
 */
interface UserProfile {
  username: string;
  name: string;
  isVerify: boolean;
  profileImage: string;
}

/**
 * @typedef {Object} UserDetail - Berisi detail data dari user
 * @property {string} username - unique name for user.
 * @property {string} name - name of user.
 * @property {boolean} isVerify - is user verifiy or not
 * @property {string} profileImage - The URL of the user's image.
 * @property {number} countPost -  number of Post
 * @property {number} countFollowing -  number of following
 * @property {number} countFollowers -  number of followers
 * @property {string} bio -  description user
 */

interface UserDetail {
  username: string;
  name: string;
  isVerify: boolean;
  profileImage: string;
  countPost: number;
  countFollowers: number;
  countFollowing: number;
  bio: string;
}

/**
 * @typedef UserFollowing -  contain user current / other user followed
 * @property {string} username - unique name of user
 * @property {string} profileImage - The URL of the user's image.
 * @property {string} profileImage - name of user
 */

interface UserFollowing {
  username: string;
  profileImage: string;
  name: string;
}

/**
 * @typedef UserFollowers -  contain user current / other user followers
 * @property {string} username - unique name of user
 * @property {string} profileImage - The URL of the user's image.
 * @property {string} profileImage - name of user
 */

interface UserFollowers {
  username: string;
  profileImage: string;
  name: string;
}

// http://localhost:{{$PORT}}/api/v1/users/me/media?type=posts
// http://localhost:{{$PORT}}/api/v1/users/me/media - reels
// http://localhost:{{$PORT}}/api/v1/users/me/bookmarks
// http://localhost:{{$PORT}}/api/v1/users/me/media/tagged

/**
 * @typedef UserPost                - contain  current user Post
 * @property {string} mediaId       - unique id for media post
 * @property {string} image         - the url of the user's image
 * @property {number} countLike     - count user like post
 * @property {number} countComment  - count user comment
 *
 */

interface UserPosts {
  mediaId: string;
  image: string;
  countLike: number;
  countComment: number;
}

/**
 * @typedef UserPost                - contain  current user Post
 * @property {string} mediaId       - unique id for media post
 * @property {string} image         - the url of the user's image
 * @property {number} countLike     - count user like post
 * @property {number} countComment  - count user comment
 *
 */
interface OtherUserPost {
  mediaId: string;
  image: string;
  countLike: number;
  countComment: number;
}

/**
 * @typedef UserReels - contain current user reels
 * @property {string} mediaId       - unique id for media post
 * @property {string} image         - the url of the user's image
 * @property {number} countLike     - count user like post
 * @property {number} countComment  - count user comment
 */

interface UserReels {
  mediaId: string;
  image: string;
  countLike: number;
  countComment: number;
}

/**
 * @typedef UserBookmark       - contain current user bookmark
 * @property {string} id       - unique id for bookmark
 * @property {string} name     - name bookmark
 * @property {string} image    - the url of the user's image
 */

interface UserBookmark {
  id: string;
  name: string;
  images: string[];
}
interface UserBookmarkDetail {
  mediaId?: string;
  image?: string;
  countLike?: number;
  countComment?: number;
}

/**
 * @typedef UserTagged - contain current user Tagged
 * @property {string} mediaId       - unique id
 * @property {string} image         - the url of the user's image
 * @property {number} countLike     - count user like post
 * @property {number} countComment  - count user comment
 */
interface UserTagged {
  mediaId: string;
  image: string;
  countLike: number;
  countComment: number;
}
export type {
  UserProfile,
  FetchApiResponse,
  UserDetail,
  UserFollowers,
  UserFollowing,
  UserBookmark,
  UserReels,
  UserTagged,
  UserPosts,
  UserBookmarkDetail,
  OtherUserPost,
  RegisterFormData,
  LoginFormData,
  UploadResponse,
};
