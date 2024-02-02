'use client';

import postReplyComment from '@/app/lib/post/postReplyComment';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// import postReplyComment from '@/app/lib/post/postReplyComment';
import Button from '../Button';

type ReplyCommentInputProps = {
  postId: number;
  commentId: number;
};

const ReplyCommentInput = ({ commentId }: ReplyCommentInputProps) => {
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
        const res = await postReplyComment(commentId, content);
        if (res) alert('대댓글이 작성되었습니다.');
      } catch (e) {
        setIsError(true);
        alert('대댓글 작성 중 에러가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 sm:flex-row ml-20">
      <div className="flex w-full items-center justify-center gap-2 h-full p-4 rounded-lg">
        <input
          className="text-sm rounded-md border-2 h-full p-5 flex-1 outline-none"
          placeholder="대댓글을 남겨보세요"
          {...register('content')}
        />
        <div className="w-15">
          <Button onClick={handleSubmit(onSubmit)} label="대댓글 달기" small={true} />
        </div>
      </div>
    </div>
  );
};

export default ReplyCommentInput;
