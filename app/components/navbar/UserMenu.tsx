'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineMenu } from 'react-icons/ai';

import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          글쓰기
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="dark:text-black absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {session ? (
              <>
                <MenuItem
                  onClick={() => router.push(`/user/${session?.user?.userId}`)}
                  label="마이 페이지"
                />
                <MenuItem onClick={() => {}} label="스터디/프로젝트 모집" />
                <MenuItem onClick={() => {}} label="게시글 작성" />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toast('로그아웃 되었습니다.');
                  }}
                  label="로그아웃"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="로그인" />
                <MenuItem onClick={registerModal.onOpen} label="회원 가입" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
