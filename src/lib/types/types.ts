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
