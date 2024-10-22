import { Feed } from "../../types/feed";
import HttpClient from "../axios";

const controller = "/feeds";
export const FeedService = {
  getAll: (): Promise<Feed[]> => {
    return HttpClient.get(controller);
  },
  create: (body: any) => {
    return HttpClient.post(controller, body);
  },
};
