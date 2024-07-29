interface FetchApiResponse<ResultsType> {
  success: boolean;
  message: string;
  data: ResultsType;
}

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

interface UserFollowing {
  username: string;
  profileImage: string;
  name: string;
}

interface UserFollowers {
  username: string;
  profileImage: string;
  name: string;
}

export type { UserProfile, FetchApiResponse, UserDetail };
