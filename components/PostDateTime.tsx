export const PostDateTime = ({ date }: { date: string }) => {
  return <p>Published on {new Date(date).toLocaleDateString()}</p>;
};
