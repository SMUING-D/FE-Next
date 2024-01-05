'use client';

import Avatar from '@/app/components/Avatar';
import ImageSlider from '@/app/components/ImageSlider';
import CommentInput from '@/app/components/comments/CommentInput';
import { getDetailPostData } from '@/app/lib/getDetailPostData';
import { Post } from '@/app/types';
import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { FaComment, FaHeart } from 'react-icons/fa6';
import { PiSirenFill } from 'react-icons/pi';

type paramsType = {
  id: string;
};

const PostPage = () => {
  const { id } = useParams<paramsType>();
  const [postData, setPostData] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDetailPostData(id);
      if (res) {
        setPostData(res);
      }
    };
    fetchData();
  }, [id]);

  const postDate = useMemo(() => {
    if (!postData?.createdAt) {
      return null;
    }

    return `${format(postData?.createdAt, 'yyyy년 MM월 dd일')}`;
  }, [postData?.createdAt]);

  return (
    <div className="pt-10 flex flex-col max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 gap-7">
      {/* vertical line (카테고리 표시) */}
      <div className="flex flex-row items-center">
        <div className="flex dark:text-zinc-100 w-24 text-sm text-zinc-500 font-light">
          {postData?.category}
        </div>
        <div className="flex border-b-2 border-gray-100 flex-1"></div>
      </div>

      {/* 사용자 정보 */}
      <div className="flex flex-row gap-3 items-center">
        <Avatar src={postData?.userImageSrc} />
        <div className="flex dark:text-zinc-100 text-sm text-zinc-500 font-medium">
          {postData?.username}
        </div>
        <div className="flex dark:text-zinc-100 text-xs text-zinc-300 font-light">{postDate}</div>
      </div>

      {/* 게시글 본문 내용 */}
      <div className="flex flex-col p-2 gap-5">
        <div className="flex text-2xl dark:text-zinc-100 text-zinc-700 font-bold">
          {postData?.title}
        </div>
        <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal mb-20">
          {postData?.description}
        </div>
      </div>

      {postData?.imageSrc && <ImageSlider imageList={postData?.imageSrc} />}

      {/* 좋아요, 댓글 개수 표시 */}
      <div className="flex flex-row justify-end gap-4 items-center">
        <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
        <div className="flex dark:text-zinc-100 text-zinc-400">{postData?.likes}</div>
        <FaComment className="flex dark:text-zinc-100 text-zinc-400" />
        <div className="flex dark:text-zinc-100 text-zinc-400">{postData?.comments}</div>
      </div>
      <div className="flex border-b-2 border-gray-100 mb-10"></div>

      <div className="flex flex-col gap-14">
        <CommentInput />

        {/* 실제 댓글 리스트 올 곳 */}
        <div className="flex flex-col gap-10">
          {postData?.commentsList?.map(
            ({ id, username, imageSrc, createdAt, likes, comments, content }) => (
              <div key={id} className="flex flex-col p-3 border-b-2 border-gray-100 gap-5">
                <div className="flex flex-row gap-3 items-center">
                  <Avatar src={imageSrc} />
                  <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
                    {username}
                  </div>
                  <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
                    {createdAt}
                  </div>
                  <div className="flex justify-end flex-1 gap-2">
                    <PiSirenFill className="flex mr-2 dark:text-zinc-100 text-zinc-400" />
                    <FaComments className="flex dark:text-zinc-100 text-zinc-400" />
                    <div className="flex text-xs dark:text-zinc-100 text-zinc-300">{comments}</div>
                    <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
                    <div className="flex text-xs dark:text-zinc-100 text-zinc-300">{likes}</div>
                  </div>
                </div>
                <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">
                  {content}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
