export type STUDY_LIST = {
  id: number;
  title: string;
  content: string;
  startDate: string;
  memberCount: number;
  dueDate: string;
  college: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  postLike: false;
  Images: IMAGES_DTO[];
  commentList: COMMENT_LIST[];
};

export type JOB_LIST = {
  id: number;
  title: string;
  content: string;
  college: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  postLike: false;
  Images: IMAGES_DTO[];
  commentList: COMMENT_LIST[];
};

export type POST_DTO = {
  id?: number;
  postId?: number;
  title: string;
  content: string;
  college: string;
  viewCount: number;
  memberCount?: number;
  startDate?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  postLike: boolean;
  postLikeCount: number;
  isPostLike: boolean;
  userDto: USER_DTO;
  commentList: COMMENT_LIST[];
  postImageList?: IMAGES_DTO[];
  postImage?: string;
};

export type COMMENT_LIST = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  userDto: USER_DTO;
  commentReplyList: COMMENT[];
};

export type COMMENT = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  userDto: USER_DTO;
};

export type USER_DTO = {
  userId: number;
  userName: string;
  profile: string;
};

export type IMAGES_DTO = {
  id: number;
  postImagePath: string;
};

export type USER_ROLE = 'ADMIN' | 'USER';

export type USER = {
  userId: number;
  role: USER_ROLE;
  nickname: string;
  username: string;
  profileImg?: string;
  email: string;
  school?: string;
  major?: string;
  minor?: string;
  grade?: number; // 1~4 제한 or 졸업
  introduce?: string;
  majorCollege?: string;
  minorCollege?: string;
  job?: string;
  experience?: string;
};

export type ALL_POSTS = {
  isSuccess: boolean;
  code: string;
  messgae: string;
  result: {
    popularPosts: POST_DTO[];
    categories: POST_DTO[];
  };
};

export type CATEGORIES_DTO = {
  EDUCATE?: {
    posts: POST_DTO[];
  };
  ART: {
    posts: POST_DTO[];
  };
  SOCIETY: {
    posts: POST_DTO[];
  };
  ECONOMY: {
    posts: POST_DTO[];
  };
  ENGINEERING: {
    posts: POST_DTO[];
  };
};
