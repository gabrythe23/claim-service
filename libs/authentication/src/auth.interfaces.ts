import { ObjectId } from 'mongodb';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

export interface UserInfo {
  id: ObjectId;
  token: string;
  role: UserRole;
}
