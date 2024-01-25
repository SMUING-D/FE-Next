import { COMMENT_DTO } from '@/app/types';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaComments, FaHeart, FaTrashAlt } from 'react-icons/fa';
import { PiSirenFill } from 'react-icons/pi';

import Avatar from '../Avatar';

type CommentViewProps = {
  commentsList: COMMENT_DTO[];
};

const CommentView = ({ commentsList }: CommentViewProps) => {
  const { data: session } = useSession();
  const user = session?.user?.name;
  // const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      {commentsList?.map(({ id, content, createdAt, userDto, commentReplyList }) => (
        <div key={id} className="flex flex-col p-3 border-b-2 border-gray-100 gap-3">
          <div className="flex flex-row gap-3 items-center">
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              // onClick={() => router.push(`/user/${userDto.id}`)}
            >
              <Avatar src={userDto.profile} />
              <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium whitespace-nowrap">
                {userDto.userName}
              </div>
            </div>

            <div className="flex justify-end flex-1 gap-2">
              {userDto.userName === user ? (
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
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300">
                {commentReplyList.length}
              </div>
            </div>
          </div>
          <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">{content}</div>
          <div className="flex gap-2">
            <div className="flex text-xs whitespace-nowrap dark:text-zinc-100 text-zinc-300 font-light">
              {createdAt && format(new Date(createdAt), 'yy/MM/dd HH:mm')}
            </div>
            <FaHeart
              className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
              onClick={() => (session ? '' : toast('로그인이 필요한 기능입니다'))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentView;
