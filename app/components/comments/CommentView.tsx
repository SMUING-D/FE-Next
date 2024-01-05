import { Comments } from '@/app/types';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
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

  const toStringDate = (createdAt: string) => {
    if (!createdAt) {
      return null;
    }
    return `${format(createdAt, 'yyyy년 MM월 dd일 HH:mm')}`;
  };

  return (
    <div className="flex flex-col gap-10">
      {commentsList?.map(({ id, username, imageSrc, createdAt, likes, comments, content }) => (
        <div key={id} className="flex flex-col p-3 border-b-2 border-gray-100 gap-5">
          <div className="flex flex-row gap-3 items-center">
            <Avatar src={imageSrc} />
            <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
              {username}
            </div>
            <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
              {createdAt && toStringDate(createdAt)}
            </div>
            <div className="flex justify-end flex-1 gap-2">
              {username === user ? (
                <FaTrashAlt
                  className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                  onClick={() => console.log('댓글 삭제')}
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
                onClick={() =>
                  session ? console.log('대댓글 작성') : toast('로그인이 필요한 기능입니다')
                }
              />
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300">{comments}</div>
              <FaHeart
                className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
                onClick={() =>
                  session ? console.log('댓글 좋아요') : toast('로그인이 필요한 기능입니다')
                }
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
