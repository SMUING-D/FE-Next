import deleteComment from '@/app/lib/post/deleteComment';
import likeComment from '@/app/lib/post/likeComment';
import reportReplyComment from '@/app/lib/post/reportReplyComment';
import { COMMENT } from '@/app/types';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';
import { PiSirenFill } from 'react-icons/pi';

import Avatar from '../Avatar';

type ReplyCommentListViewProps = {
  postId: number;
  commentReplyList: COMMENT[];
};

const ReplyCommentListView = ({ postId, commentReplyList }: ReplyCommentListViewProps) => {
  const { data: session } = useSession();
  const userId = session?.user?.userId;
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars

  const reportReComment = async (commentId: number) => {
    const res = await reportReplyComment(postId, commentId);
    if (res) {
      toast('대댓글이 신고되었습니다');
    } else {
      toast('오류가 발생했습니다. 다시 시도해주세요');
    }
  };

  const handleLikeComment = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await likeComment(id);
      if (res) toast('좋아요');
    } catch (e) {
      setIsError(true);
      toast.error('댓글 좋아요 중 오류가 발생했습니다. 다시 시도해주세요');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await deleteComment(id);
      if (res) toast('대댓글이 삭제되었습니다.');
    } catch (e) {
      setIsError(true);
      toast.error('댓글 삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 ml-12 mt-5">
      {commentReplyList?.map(({ id, content, createdAt, userDto }) => (
        <div key={id} className="flex flex-col">
          <div className="flex flex-col p-3 border-b-2 border-gray-100 gap-3">
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
                {userDto.userId === userId ? (
                  <FaTrashAlt
                    className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                    onClick={() => handleDeleteComment(id)}
                  />
                ) : (
                  <PiSirenFill
                    className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                    onClick={() =>
                      session ? reportReComment(id) : toast('로그인이 필요한 기능입니다')
                    }
                  />
                )}
              </div>
            </div>
            <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">
              {content}
            </div>
            <div className="flex gap-2">
              <div className="flex text-xs whitespace-nowrap dark:text-zinc-100 text-zinc-300 font-light">
                {createdAt && format(new Date(createdAt), 'yy/MM/dd HH:mm')}
              </div>
              <FaHeart
                className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
                onClick={() =>
                  session ? handleLikeComment(id) : toast('로그인이 필요한 기능입니다')
                }
              />
              <div className="flex text-xs font-nomal dark:text-zinc-100 text-zinc-300">2</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyCommentListView;
