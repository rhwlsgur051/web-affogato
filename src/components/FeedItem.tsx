import { Feed } from "../types/feed";
type Props = {
  feed: Feed;
};
export const FeedItem = (props: Props) => {
  const { feed } = props;
  return (
    <div>
      <img src={feed.feedImages} />
      {feed.feedDesc}
    </div>
  );
};
