'use client';

import Avatar from '@/app/components/Avatar';
import ImageSlider from '@/app/components/ImageSlider';
import CommentInput from '@/app/components/comments/CommentInput';
import CommentView from '@/app/components/comments/CommentView';
import copyURL from '@/app/lib/copyURL/copyURL';
import deletePost from '@/app/lib/post/deletePost';
import { getPostLike } from '@/app/lib/post/likePost';
import { useGetDetailPostData } from '@/app/lib/post/query/query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FaComment, FaHeart } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

type paramsType = {
  id: string;
};

const PostPage = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const postType = pathname.split('/')[2];
  const { data: session } = useSession();
  const { id: postId } = useParams<paramsType>();
  const router = useRouter();
  const userId = session?.user?.userId;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const { data: postData } = useGetDetailPostData(postId, postType);

  const postDate = useMemo(() => {
    if (!postData?.createdAt) {
      return null;
    }
    return `${format(postData?.createdAt, 'yyyy년 MM월 dd일 HH:mm')}`;
  }, [postData?.createdAt]);

  const { mutateAsync } = useMutation({
    mutationFn: getPostLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
    onError: () => {
      toast.error('좋아요에 실패하였습니다.');
    }
  });

  const handleDeletePost = async () => {
    const res = await deletePost(parseInt(postId));
    if (res) {
      toast('게시글이 삭제되었습니다.');
      router.back();
    }
  };

  const handleReportPost = async () => {
    // const res = await reportPost(parseInt(postId));
    toast('게시글이 신고되었습니다.');
  };

  return (
    <div className="pt-20 flex flex-col max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-4 px-6 gap-7">
      <div className="flex flex-row items-center">
        <div className="flex dark:text-zinc-100 mr-3 text-sm text-zinc-500 font-light">
          {postData?.college}
        </div>
        <div className="flex border-b-2 border-gray-100 flex-1"></div>
      </div>

      <div className="flex flex-row relative gap-3 items-center">
        <div
          className="flex flex-row relative gap-3 items-center cursor-pointer"
          // onClick={() => router.push(`/user/${postData?.userDto.userId}`)}
        >
          <Avatar src={postData?.userDto?.profile} />
          <div className="flex dark:text-zinc-100 text-sm text-zinc-500 font-medium">
            {postData?.userDto?.userName}
          </div>
        </div>

        <div className="flex dark:text-zinc-100 text-xs text-zinc-300 font-light">{postDate}</div>
        <GiHamburgerMenu
          className="relative text-lg ml-auto text-zinc-300 cursor-pointer"
          onClick={toggleOpen}
        />
        {isOpen && (
          <div className="dark:text-black absolute rounded-xl shadow-lg w-20 p-4 bg-white overflow-hidden right-0 top-10 text-sm">
            <div className="flex flex-col cursor-pointer gap-3 items-center">
              {userId === postData?.userDto?.userId ? (
                <>
                  <div
                    className="text-md text-zinc-600 font-semibold cursor-pointer"
                    onClick={() => {}}
                  >
                    수정
                  </div>
                  <div
                    className="text-md text-zinc-600 font-semibold cursor-pointer"
                    onClick={handleDeletePost}
                  >
                    삭제
                  </div>
                  <div
                    className="text-md text-zinc-600 font-semibold cursor-pointer"
                    onClick={copyURL}
                  >
                    공유
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="text-md text-zinc-600 font-semibold cursor-pointer"
                    onClick={() =>
                      session ? handleReportPost() : toast('로그인이 필요한 기능입니다')
                    }
                  >
                    신고
                  </div>
                  <div
                    className="text-md text-zinc-600 font-semibold cursor-pointer"
                    onClick={copyURL}
                  >
                    공유
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col p-2 gap-5">
        <div className="flex text-2xl dark:text-zinc-100 text-zinc-700 font-bold">
          {postData?.title}
        </div>
        <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal mb-15 whitespace-pre-line">
          {postData?.content}
        </div>
      </div>

      {postData?.postImageList && <ImageSlider imageList={postData?.postImageList} />}

      <div className="flex flex-row justify-end gap-4 items-center">
        <FaHeart
          className={`flex dark:text-zinc-100 ${postData.isPostLike ? 'text-rose-400' : 'text-zinc-400'} cursor-pointer`}
          onClick={async () => {
            try {
              await mutateAsync(postId);
            } catch (e) {
              console.error(e);
            }
          }}
        />
        <div className="flex dark:text-zinc-100 text-zinc-400">{postData?.postLikeCount}</div>
        <FaComment className="flex dark:text-zinc-100 text-zinc-400" />
        <div className="flex dark:text-zinc-100 text-zinc-400">{postData?.commentList?.length}</div>
      </div>
      <div className="flex border-b-2 border-gray-100 mb-10" />

      <div className="flex flex-col gap-14">
        <CommentInput />
        <CommentView />
      </div>
    </div>
  );
};

export default PostPage;
