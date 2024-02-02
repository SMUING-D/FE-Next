'use client';

import postComment from '@/app/lib/post/postComment';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button';

const CommentInput = () => {
  const pathname = usePathname();
  const postId = pathname.slice(pathname.length - 1, pathname.length);
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isError, setIsError] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  // const user = session?.user;

  const { register, handleSubmit, watch } = useForm({
    mode: 'onBlur',
    defaultValues: {
      content: ''
    }
  });

  const { content } = watch();

  const onSubmit = async () => {
    if (!content.trim()) {
      alert('내용을 먼저 작성해주세요.');
    } else {
      try {
        setIsLoading(true);
        const res = await postComment(parseInt(postId), content);
        if (res) alert('댓글이 작성되었습니다.');
      } catch (e) {
        setIsError(true);
        alert('댓글 작성 중 에러가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <div className="flex w-full items-center justify-center gap-2 h-full border-2 p-4 rounded-lg">
        <input
          id="content"
          className="text-sm rounded-md border-2 h-full p-5 flex-1 outline-none"
          disabled={!session && true}
          {...register('content')}
          placeholder={
            session ? '댓글을 남겨보세요' : '댓글을 남기시려면, 로그인을 먼저 진행해주세요.'
          }
        />
        <div className="w-15">
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={!session}
            label="댓글 달기"
            small={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
