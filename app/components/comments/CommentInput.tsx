'use client';

import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

// import Avatar from '../Avatar';
import Button from '../Button';

const CommentInput = () => {
  const { data: session } = useSession();
  // const user = session?.user;

  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      {/* <Avatar src={session ? user?.image : null} /> */}

      <div className="flex w-full items-center justify-center gap-2 h-full border-2 p-4 rounded-lg">
        <input
          className="text-sm rounded-md border-2 h-full p-5 flex-1 outline-none"
          disabled={!session && true}
          placeholder={
            session
              ? '댓글을 남겨보세요'
              : '댓글을 남기시려면, 로그인을 해주세요. 로그인을 먼저 진행해주세요.'
          }
        />
        <div className="w-15">
          <Button
            onClick={() => (session ? '' : toast('로그인을 먼저 해주세요!'))}
            label="댓글 달기"
            small={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
