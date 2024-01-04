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
  title?: string;
  description?: string;
  category?: string;
  likes?: number;
  comments?: number;
  createdAt?: string;
  imageSrc?: string;
};
