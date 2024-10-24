import { Feed, FeedRequest } from "../../types/feed";
import HttpClient from "../axios";

const controller = "/feeds";
export const FeedService = {
  getAll: (): Promise<Feed[]> => {
    return HttpClient.get(controller);
  },
  create: (body: FeedRequest) => {
    return HttpClient.post(controller, body);
  },
};
