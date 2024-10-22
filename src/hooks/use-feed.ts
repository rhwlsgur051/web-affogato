import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FeedService } from "../api/feeds";

export const useFeed = () => {
  // client
  const queryClient = useQueryClient();
  
  // query key
  const queryKey = ["feeds"];

  // queries
  const feedsQuery = useQuery({
    queryKey,
    queryFn: FeedService.getAll,
  });

  // mutations
  const createFeedMutation = useMutation({
    mutationFn: FeedService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { feedsQuery, createFeedMutation };
};
