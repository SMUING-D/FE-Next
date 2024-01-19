export type Listing = {
  postId: number;
  User?: User;
  title: string;
  type: string;
  category: string;
  createdAt: Date;
  content: string;
  likes: number;
  memberCount?: number;
  dueDate?: string;
  place?: string;
  isOnline?: string;
  Images: Array<Images>;
  Comments: Array<Comments>;
};

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

export type USER_DTO = {
  userId: number;
  userName: string;
  profile: string;
};

export type Images = {
  imageId: number;
  link: string;
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
