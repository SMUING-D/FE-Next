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
  Images: Images[];
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
  Images: Images[];
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

export type Images = {
  imageId: number;
  link: string;
};

//----------

export type JOB_DETAIL_DTO = {
  jobId: number;
  title: string;
  content: string;
  userName: string;
  likes: number;
  jobImageDtoList: JOB_IMAGE_DTO[];
  commentList: COMMENT_DTO[];
  createAt: string;
  updateAt: string;
};

export type JOB_IMAGE_DTO = {
  communityId: number;
  communityImagePath: string;
};

export type COMMENT_DTO = {
  id: number;
  stars: number;
  content: string;
  communityId: number;
  createdAt: string;
  updatedAt: string;
  userDto: USER_DTO;
  likes: number;
  commentReplyList: COMMENT_REPLY_DTO[];
};

export type COMMENT_REPLY_DTO = {
  id: number;
  stars: number;
  content: string;
  communityId: number;
  createdAt: string;
  updatedAt: string;
  userDto: USER_DTO;
};

export type Comments = {
  commentId: string;
  User: User;
  content: string;
  createdAt: Date;
  likes: number;
  reports: number;
};

export type UserRole = 'ADMIN' | 'USER';

export type User = {
  userId: number;
  role: UserRole;
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
