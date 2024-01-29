'use client';

import { getPostComment } from '@/app/lib/getPostComment';
import { COMMENT_LIST } from '@/app/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaComments, FaHeart, FaTrashAlt } from 'react-icons/fa';
import { PiSirenFill } from 'react-icons/pi';
import { useInView } from 'react-intersection-observer';

import Avatar from '../Avatar';
import EmptyState from '../EmptyState';
import ReplyCommentInput from '../replyComments/ReplyCommentInput';
import ReplyCommentListView from '../replyComments/ReplyCommentListView';

type InfiniteQueryResult = {
  commentList: COMMENT_LIST[];
};

const CommentView = () => {
  const pathname = usePathname();
  const postId = pathname.slice(pathname.length - 1, pathname.length);
  const { data: session } = useSession();
  const user = session?.user?.name;
  const [openReplyCommentInputs, setOpenReplyCommentInputs] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleReplyCommentInput = (commentId: number) => {
    setOpenReplyCommentInputs((prevState) => ({
      [commentId]: !prevState[commentId] || false
    }));
  };

  const {
    data: commentsList,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery<
    InfiniteQueryResult,
    Object,
    InfiniteData<InfiniteQueryResult>,
    [_1: string, _2: string]
  >({
    queryKey: ['comments', postId],
    queryFn: ({ pageParam = 1 }) => getPostComment(postId, { pageParam: Number(pageParam) }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.commentList.at(-1)?.id,
    staleTime: 60 * 1000
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError || commentsList?.pages?.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col gap-3">
      {commentsList?.pages.map((page) =>
        page?.commentList?.map(({ id, content, createdAt, userDto, commentReplyList }) => (
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
                  {userDto.userName === user ? (
                    <FaTrashAlt
                      className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                      onClick={() => ''}
                    />
                  ) : (
                    <PiSirenFill
                      className="flex mr-2 dark:text-zinc-100 text-zinc-400 cursor-pointer"
                      onClick={() =>
                        session
                          ? toast('댓글이 신고되었습니다')
                          : toast('로그인이 필요한 기능입니다')
                      }
                    />
                  )}
                  <FaComments
                    className="flex dark:text-zinc-100 text-zinc-400 cursor-pointer"
                    onClick={() =>
                      session ? toggleReplyCommentInput(id) : toast('로그인이 필요한 기능입니다')
                    }
                  />
                  <div className="flex text-xs dark:text-zinc-100 text-zinc-300">
                    {commentReplyList.length}
                  </div>
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
                  onClick={() => (session ? '' : toast('로그인이 필요한 기능입니다'))}
                />
                <div className="flex text-xs font-nomal dark:text-zinc-100 text-zinc-300">2</div>
              </div>
            </div>
            {openReplyCommentInputs[id] && (
              <ReplyCommentInput postId={parseInt(postId)} commentId={id} />
            )}
            <ReplyCommentListView postId={id} commentReplyList={commentReplyList} />
          </div>
        ))
      )}

      <div ref={ref} style={{ height: 50 }}></div>
    </div>
  );
};

export default CommentView;
