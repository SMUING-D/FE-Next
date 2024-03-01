import { POST_DTO } from '@/app/types';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

const MyPost = ({ myPostData }: { myPostData: POST_DTO }) => {
  const router = useRouter();

  const onClickPost = (postId: number) => {
    router.push(`/post/job/${postId}`);
  };
  const { postId, title, date, postLike } = myPostData;

  return (
    <div
      key={postId}
      className="flex flex-col border-b-2 p-5 cursor-pointer"
      onClick={() => onClickPost(myPostData?.postId)}
    >
      <div>{title}</div>
      <div className="flex flex-row ml-0 mt-1 text-gray-500 font-light dark:text-gray-50">
        <div className="text-sm text-gray-500 dark:text-gray-50">
          {date && format(date, 'yyyy년 MM월 dd일')}
        </div>
        <div className="flex ml-auto gap-2 items-center text-gray-500">
          <FaHeart className="flex text-sm dark:text-zinc-100 text-gray-500 cursor-pointer" />
          <div className="flex dark:text-zinc-100 text-gray-500">{postLike || 0}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
