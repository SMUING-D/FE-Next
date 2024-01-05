export type Listing = {
  postId: string;
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
