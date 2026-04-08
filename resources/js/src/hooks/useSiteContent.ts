import axios from 'axios';
import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { buildSiteContent } from '@/lib/site-content';

const fetchSiteContent = async () => {
  const response = await axios.get('/api/site-content');
  return response.data as Record<string, any>;
};

export const useSiteContent = () => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['site-content'],
    queryFn: fetchSiteContent,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const content = useMemo(() => buildSiteContent(query.data || {}), [query.data]);

  const updateItem = useMutation({
    mutationFn: async (item: { key: string; value: any; type?: string }) => {
      return axios.post('/api/site-content', item);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['site-content']);
    },
  });

  const updateBulk = useMutation({
    mutationFn: async (items: Array<{ key: string; value: any; type?: string }>) => {
      return axios.post('/api/site-content/bulk', { items });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['site-content']);
    },
  });

  return {
    content,
    raw: query.data || {},
    isLoading: query.isLoading,
    isError: query.isError,
    isSaving: updateItem.isLoading || updateBulk.isLoading,
    updateItem: updateItem.mutateAsync,
    updateBulk: updateBulk.mutateAsync,
    refetch: query.refetch,
  };
};
