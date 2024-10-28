import { Feed } from "../types/feed";
export const FeedItem = ({ feed }: { feed: Feed }) => {
  return (
    <div className="w-[350px] max-h-[350px] mb-5">
      <FeedHeader user={feed.user} />
      <FeedBody feed={feed} />
    </div>
  );
};

const FeedHeader = ({ user }: { user: Feed["user"] }) => {
  return (
    <div className="p-2 flex gap-[10px]">
      <HeaderProfileImage src={user.userProfileImage} />
      <div>{user.userId}</div>
    </div>
  );
};

const HeaderProfileImage = ({ src }: { src: string }) => {
  return (
    <img
      style={{ maxWidth: "30px", height: "auto", borderRadius:'50%' }}
      src={`data:image/png;base64,${src}`}
    />
  );
};

const FeedBody = (props: { feed: Feed }) => {
  const { feed } = props;
  return (
    <div>
      <div className="flex items-center justify-center h-[300px] border-1 border-[rgb(77,77,77)] bg-white">
        <img className="max-w-full max-h-full" src={feed.feedImages} />
      </div>
      <div className="p-2">{feed.feedDesc}</div>
    </div>
  );
};
