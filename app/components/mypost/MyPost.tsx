import { Listing } from '@/app/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

const MyPost = ({ myPostData }: { myPostData: Listing }) => {
  const router = useRouter();

  const onClickPost = (postId: number) => {
    router.push(`/post/${postId}`);
  };
  const { postId, title, createdAt, likes } = myPostData;
  return (
    <div
      key={postId}
      className="flex flex-col border-b-2 p-5 cursor-pointer"
      onClick={() => onClickPost(postId)}
    >
      <div>{title}</div>
      <div className="flex flex-row ml-0 text-gray-500 font-light dark:text-gray-50">
        {format(createdAt, 'yyyy년 MM월 dd일')}
        <div className="flex ml-auto gap-2 items-center text-gray-500">
          <FaHeart className="flex dark:text-zinc-100 text-gray-500 cursor-pointer" />
          <div className="flex dark:text-zinc-100 text-gray-500">{likes || 0}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
