'use client';

import useJobWriteModal from '@/app/hooks/useJobWriteModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useStudyWriteModal from '@/app/hooks/useStudyWriteModal';
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
  const studyWriteModal = useStudyWriteModal();
  const jobWriteModal = useJobWriteModal();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const { data: session } = useSession();

  const toggleWriteOpen = useCallback(() => {
    setIsWriteOpen((prev) => !prev);
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsWriteOpen(false);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={toggleWriteOpen}
        >
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
                  onClick={() => {
                    router.push(`/user/${session?.user?.userId}`);
                    setIsOpen(false);
                  }}
                  label="마이 페이지"
                />
                <MenuItem
                  onClick={() => {
                    signOut();
                    toast('로그아웃 되었습니다.');
                    setIsOpen(false);
                  }}
                  label="로그아웃"
                />
                <div className="block md:hidden">
                  <MenuItem
                    onClick={() => {
                      studyWriteModal.onOpen();
                      setIsOpen(false);
                    }}
                    label="스터디/프로젝트 모집"
                  />
                  <MenuItem
                    onClick={() => {
                      jobWriteModal.onOpen();
                      setIsOpen(false);
                    }}
                    label="취업 정보 공유"
                  />
                </div>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    loginModal.onOpen();
                    setIsOpen(false);
                  }}
                  label="로그인"
                />
                <MenuItem
                  onClick={() => {
                    registerModal.onOpen();
                    setIsOpen(false);
                  }}
                  label="회원 가입"
                />
              </>
            )}
          </div>
        </div>
      )}
      {isWriteOpen && (
        <div className="dark:text-black absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-12 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem
              onClick={() => {
                studyWriteModal.onOpen();
                setIsOpen(false);
              }}
              label={'스터디 및\n프로젝트 모집'}
            />
            <MenuItem
              onClick={() => {
                jobWriteModal.onOpen();
                setIsOpen(false);
              }}
              label={'취업 정보 공유'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
