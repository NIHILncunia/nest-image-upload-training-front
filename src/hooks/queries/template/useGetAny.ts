import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IQueryParameter, IQueryType } from '@/types/queries.types';
import { apiGet } from '@/utils/axios';

export const useGetAny = <T>(input: IQueryParameter<T>): IQueryType<T> => {
  const {
    data = {}, isLoading, isError, error, isSuccess, refetch,
  } = useQuery<T, AxiosError>(
    input.key,
    async () => {
      const { data, } = await apiGet<T>(input.api);

      return data;
    },
    {
      enabled: false,
      ...input.options,
    }
  );

  return {
    data: data as T,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  };
};
