export type Listing = {
  category?: string;
  createdAt?: string;
  description?: string;
  id?: number;
  imageSrc?: string;
  memberCount?: number;
  title?: string;
};

export type Post = {
  id?: number;
  userId?: number;
  username?: string;
  userImageSrc?: string;
  title?: string;
  description?: string;
  category?: string;
  likes?: number;
  comments?: number;
  createdAt?: string;
  imageSrc?: string[];
  commentsList?: Comments[];
};

export type Comments = {
  id?: number;
  userId?: number;
  username?: string;
  imageSrc?: string;
  content?: string;
  likes?: number;
  reports?: number;
  createdAt?: string;
  comments: number;
  commentsList?: {
    id?: number;
    userId?: number;
    username?: string;
    imageSrc?: string;
    content?: string;
    likes?: number;
    reports?: number;
    createdAt?: string;
  }[];
};
