import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFeed } from "../../hooks/use-feed";
import { FeedItem } from "../../components/FeedItem";

export const FeedListPage = () => {
  const navigate = useNavigate();

  // custom hooks
  const {
    feedsQuery: { data: feeds },
  } = useFeed();

  return (
    <div>
      <Button
        onClick={() => {
          navigate("create");
        }}
      >
        새 피드
      </Button>
      <div>
        {feeds?.map((feed) => {
          return <FeedItem key={feed.feedNo} feed={feed} />;
        })}
      </div>
    </div>
  );
};
