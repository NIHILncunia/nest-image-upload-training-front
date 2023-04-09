import { IPost } from '@/types/entity.typs';
import {
  useDelete,
  useGetAll, useGetById, usePatch, usePost
} from './template';
import { queryKeys } from '@/data/query-key.data';
import { ICreatePostDto, IUpdatePostDto } from '@/types/dto.types';

export const usePosts = () => useGetAll<IPost[]>({
  key: queryKeys.posts.all,
  api: '/posts',
});

export const usePostById = (id: number) => useGetById<IPost>({
  key: queryKeys.posts.byId(id),
  api: `/posts/${id}`,
});

export const usePostByUserId = (userId: number) => useGetAll<IPost[]>({
  key: queryKeys.posts.byUserId(userId),
  api: `/posts/user/${userId}`,
});

export const useCreatePost = () => usePost<IPost, ICreatePostDto>({
  api: '/posts',
});

export const useUpdatePost = (id: number) => usePatch<IPost, IUpdatePostDto>({
  api: `/posts/${id}`,
});

export const useDeletePost = (id: number) => useDelete<IPost, void>({
  api: `/posts/${id}`,
});
