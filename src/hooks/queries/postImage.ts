import { IPostImage } from '@/types/entity.typs';
import { useDelete, useGetAll, usePost } from './template';
import { queryKeys } from '@/data/query-key.data';
import { ICreateImagesResDto, ICreatePostImageDto } from '@/types/dto.types';

export const usePostImageByPostId = (postId: number) => useGetAll<IPostImage[]>({
  key: queryKeys.postImages.byPostId(postId),
  api: `/post-images/post/${postId}`,
});

export const useCreatePostImage = () => usePost<ICreateImagesResDto, ICreatePostImageDto>({
  api: '/post-images',
  multiPart: true,
});

export const useDeletePostImage = (id: number) => useDelete<IPostImage, void>({
  api: `/post-images/${id}`,
});
