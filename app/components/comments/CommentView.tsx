import { Comments } from '@/app/types';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaComments, FaHeart, FaTrashAlt } from 'react-icons/fa';
import { PiSirenFill } from 'react-icons/pi';

import Avatar from '../Avatar';

type CommentViewProps = {
  commentsList: Comments[];
};

const CommentView = ({ commentsList }: CommentViewProps) => {
  const { data: session } = useSession();
  const user = session?.user?.name;
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      {commentsList?.map(({ commentId, content, createdAt, likes, User }) => (
        <div key={commentId} className="flex flex-col p-3 border-b-2 border-gray-100 gap-5">
          <div className="flex flex-row gap-3 items-center">
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={() => router.push(`/user/${User.userId}`)}
            >
              <Avatar src={User.profileImg} />
              <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
                {User.username}
              </div>
            </div>

            <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
              {createdAt && format(new Date(createdAt), 'yyyy년 MM월 dd일 HH:mm')}
            </div>
            <div className="flex justify-end flex-1 gap-2">
              {User.username === user ? (
                <FaTrashAlt
                  className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                  onClick={() => ''}
                />
              ) : (
                <PiSirenFill
                  className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                  onClick={() =>
                    session ? toast('댓글이 신고되었습니다') : toast('로그인이 필요한 기능입니다')
                  }
                />
              )}
              <FaComments
                className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
                onClick={() => (session ? '' : toast('로그인이 필요한 기능입니다'))}
              />
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300"></div>
              <FaHeart
                className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
                onClick={() => (session ? '' : toast('로그인이 필요한 기능입니다'))}
              />
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300">{likes}</div>
            </div>
          </div>
          <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">{content}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentView;
