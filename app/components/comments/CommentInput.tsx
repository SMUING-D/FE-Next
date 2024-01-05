'use client';

import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

import Avatar from '../Avatar';
import Button from '../Button';

const CommentInput = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-row gap-5">
      <div>
        <Avatar src={session ? user?.image : null} />
      </div>
      <input
        className="text-sm rounded-md border-2 h-16 p-3 flex-1 outline-none"
        disabled={!session && true}
        placeholder={session ? '댓글을 남겨보세요' : '로그인이 필요한 기능입니다'}
      />
      <div className="w-20">
        <Button
          onClick={() => (session ? console.log('댓글 작성') : toast('로그인을 먼저 해주세요!'))}
          label="댓글 달기"
          small={true}
        />
      </div>
    </div>
  );
};

export default CommentInput;
