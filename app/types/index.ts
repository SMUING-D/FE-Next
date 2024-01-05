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
  id: number;
  title?: string;
  description?: string;
  category?: string;
  likes?: number;
  comments?: number;
  createdAt?: string;
  imageSrc?: string;
  memberCount?: number;
};

export type UserRole = 'ADMIN' | 'USER';

export type User = {
  name?: string;
  email?: string;
  image?: string;
  role?: UserRole;
};
