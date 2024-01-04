//실제 게시글 미리보기 컴포넌트
import { Listing } from '@/app/types';

type PostPreviewProps = {
  data: Listing;
};

const PostPreview: React.FC<PostPreviewProps> = ({ data }) => {
  return (
    <>
      <div>{data.title}</div>
      <div>{data.createdAt}</div>
      <div>{data.createdAt}</div>
    </>
  );
};

export default PostPreview;
