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
  id: number;
  title: string;
  content: string;
  college: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  postLike: boolean;
  likeCount: number;
  userDto: USER_DTO;
  Images: IMAGES_DTO[];
  commentList: COMMENT_LIST[];
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
  imageId: number;
  link: string;
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
