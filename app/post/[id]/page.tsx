'use client';

import Avatar from '@/app/components/Avatar';
import Button from '@/app/components/Button';
// import { getDetailPostData } from '@/app/lib/getDetailPostData';
// import { Post } from '@/app/types';
import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { FaComment, FaHeart } from 'react-icons/fa6';
import { PiSirenFill } from 'react-icons/pi';

// type paramsType = {
//   params: string;
//   tag: string;
//   item: string;
//   id: string;
// };

const PostPage = () => {
  // const { params } = useParams<paramsType>();
  // const { postData, setPostData } = useState<Post>();

  // console.log(params);
  // console.log(postData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getDetailPostData(params.id);
  //     if (res) {
  //       console.log(res);
  //       setPostData(res);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="pt-10 flex flex-col max-w-[1450px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 gap-7">
      {/* vertical line (카테고리 표시) */}
      <div className="flex flex-row items-center">
        <div className="flex dark:text-zinc-100 w-24 text-sm text-zinc-500 font-light">
          융합공과대학
        </div>
        <div className="flex border-b-2 border-gray-100 flex-1"></div>
      </div>

      {/* 사용자 정보 */}
      <div className="flex flex-row gap-3 items-center">
        <Avatar src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="flex dark:text-zinc-100 text-sm text-zinc-500 font-medium">차다인</div>
        <div className="flex dark:text-zinc-100 text-xs text-zinc-300 font-light">
          2023년 1월 4일
        </div>
      </div>

      {/* 게시글 본문 내용 */}
      <div className="flex flex-col gap-5">
        <div className="flex text-2xl dark:text-zinc-100 text-zinc-700 font-bold">
          이제 막 입문한 플러터 초보 버전 질문입니다..
        </div>
        <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal mb-20">
          혹시 현직종사하시는 분들 플러터 어떤 버전으로 사용하시는지 궁금합니다ㅠㅠ 가장 최신 버전
          쓰면 오류 많다고 해서 하기 꺼려지네요..
        </div>
      </div>

      {/* 사진 여러장 올 곳 */}
      <Image
        className="flex rounded-md"
        src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={300}
        height={300}
        alt="profle"
      />

      {/* 좋아요, 댓글 개수 표시 */}
      <div className="flex flex-row justify-end gap-4 items-center">
        <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
        <div className="flex dark:text-zinc-100 text-zinc-400">10</div>
        <FaComment className="flex dark:text-zinc-100 text-zinc-400" />
        <div className="flex dark:text-zinc-100 text-zinc-400">10</div>
      </div>
      <div className="flex border-b-2 border-gray-100 mb-10"></div>

      <div className="flex flex-col gap-14">
        {/* 댓글 쓰는 곳 */}
        <div className="flex flex-row gap-5">
          <div>
            <Avatar src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <input
            className="rounded-md border-2 h-16 p-3 flex-1 outline-none"
            placeholder="댓글을 남겨보세요"
          />
          <div className="w-20">
            <Button onClick={() => console.log('댓글 작성')} label="댓글 달기" small={true} />
          </div>
        </div>

        {/* 실제 댓글 리스트 올 곳 */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col pr-10 pl-10 gap-5">
            <div className="flex flex-row gap-3 items-center">
              <Avatar src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
                차다인
              </div>
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
                2023년 1월 4일
              </div>
              <div className="flex justify-end flex-1 gap-5">
                <FaComments className="flex dark:text-zinc-100 text-zinc-400" />
                <PiSirenFill className="flex dark:text-zinc-100 text-zinc-400" />
                <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
              </div>
            </div>
            <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">
              이제 막 입문한 플러터 초보입니다. 저도 모르겠네요
            </div>
          </div>

          <div className="flex flex-col pr-10 pl-10 gap-5">
            <div className="flex flex-row gap-3 items-center">
              <Avatar src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
                차다인
              </div>
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
                2023년 1월 4일
              </div>
              <div className="flex justify-end flex-1 gap-5">
                <FaComments className="flex dark:text-zinc-100 text-zinc-400" />
                <PiSirenFill className="flex dark:text-zinc-100 text-zinc-400" />
                <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
              </div>
            </div>
            <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">
              이제 막 입문한 플러터 초보입니다. 저도 모르겠네요
            </div>
          </div>

          <div className="flex flex-col pr-10 pl-10 gap-5">
            <div className="flex flex-row gap-3 items-center">
              <Avatar src="https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-medium">
                차다인
              </div>
              <div className="flex text-xs dark:text-zinc-100 text-zinc-300 font-light">
                2023년 1월 4일
              </div>
              <div className="flex justify-end flex-1 gap-5">
                <FaComments className="flex dark:text-zinc-100 text-zinc-400" />
                <PiSirenFill className="flex dark:text-zinc-100 text-zinc-400" />
                <FaHeart className="flex dark:text-zinc-100 text-zinc-400" />
              </div>
            </div>
            <div className="flex text-sm dark:text-zinc-100 text-zinc-500 font-normal">
              이제 막 입문한 플러터 초보입니다. 저도 모르겠네요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
