import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FeedService } from "../api/feeds";
import { useNavigate } from "react-router-dom";

export const useFeed = () => {
  const navigate = useNavigate();
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
      navigate("/feeds");
    },
  });

  return { feedsQuery, createFeedMutation };
};
