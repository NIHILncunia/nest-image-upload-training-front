import { IUser, UserRole, UserStatus } from './entity.typs';

export interface ICreateUserDto {
  email: string;
  userName: string;
  password: string;
}

export interface ISignInDto {
  email: string;
  password: string;
}

export interface IUserResDto {
  message: string;
  user: IUser;
  tokenExp?: number;
}

export interface IUpdateUserDto {
  userName?: string;
  role?: UserRole,
  status?: UserStatus;
}

export interface ICreateWithdrawalDto {
  userId: number;
  text?: string;
}

export interface ICreatePostDto {
  userId: number;
  title: string;
  content: string;
}

export type IUpdatePostDto = Partial<ICreatePostDto>;

export interface ICreatePostImageDto {
  postId: number;
  imagePath: string;
  imageType: string;
  imageSize: number;
}

export interface ICreateImagesResDto {
  message: string;
  count: number;
}

export interface ICookies {
  sign: boolean;
  tokenExp: number;
}
