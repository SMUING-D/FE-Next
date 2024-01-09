'use client';

import Avatar from '@/app/components/Avatar';
import PasswordEditModal from '@/app/components/modals/PasswordEditModal.tsx';
import UserInfoEditModal from '@/app/components/modals/UserInfoEditModal';
import usePasswordEditModal from '@/app/hooks/usePasswordEditModal';
import useUserInfoEditModal from '@/app/hooks/useUserInfoModal';
import getUserInfo from '@/app/lib/getUserInfo';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { User } from '../../types/index';

type ActiveType = 'MYHOME' | 'SETTINGS';

type paramsType = {
  userId: string;
};

const Mypage = () => {
  const { userId } = useParams<paramsType>();
  const userInfoEditModal = useUserInfoEditModal();
  const passwordEditModal = usePasswordEditModal();
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<User>(null);
  const [activeTab, setActiveTab] = useState<ActiveType>('MYHOME');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo('user', userId);
      if (res) {
        setUserInfo(res);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="pt-10 flex xl:flex-row md:flex-col sm:flex-col min-[320px]:flex-col max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 gap-7">
      <div className="flex flex-col w-60 gap-10">
        <div className="flex flex-row gap-3">
          <Avatar src={userInfo?.profileImg} />
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold dark:text-stone-100">{userInfo?.nickname}</div>
            <div className="text-sm text-slate-300 font-light dark:text-stone-100">
              {userInfo?.email}
            </div>
          </div>
        </div>

        <div className="flex xl:flex-col md:flex-row sm:flex-row min-[320px]:flex-row gap-5">
          <div
            className={`text-bold text-lg font-semibold cursor-pointer dark:text-stone-100 ${
              activeTab === 'MYHOME'
                ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                : ''
            }`}
            onClick={() => setActiveTab('MYHOME')}
          >
            {parseInt(userId) === session?.user?.userId ? 'MY 홈' : '홈'}
          </div>
          {parseInt(userId) === session?.user?.userId && (
            <div
              className={`text-bold text-lg font-semibold cursor-pointer dark:text-stone-100  ${
                activeTab === 'SETTINGS'
                  ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                  : ''
              }`}
              onClick={() => setActiveTab('SETTINGS')}
            >
              개인 설정
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-2">
        {activeTab === 'MYHOME' && (
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-semibold dark:text-stone-100">자기소개</div>
              <div className="text-sm font-light dark:text-stone-100">{userInfo?.introduce}</div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="text-2xl font-semibold dark:text-stone-100">학교</div>
              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700 dark:text-stone-100">학교명</div>
                <div className="text-sm font-light dark:text-stone-100">{userInfo?.school}</div>
              </div>

              <div className="text-lg font-medium dark:text-stone-100">전공</div>
              <div className="flex flex-col gap-3">
                <div className="text-sm font-medium text-stone-700 dark:text-stone-100">본전공</div>
                <div className="text-sm font-light dark:text-stone-100">
                  {userInfo?.majorCollege} {userInfo?.major}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-medium text-stone-700 dark:text-stone-100">
                  부전공 및 복수전공
                </div>
                <div className="text-sm font-light dark:text-stone-100">
                  {userInfo?.minorCollege} {userInfo?.major}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="text-2xl font-semibold dark:text-stone-100">경력</div>
              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700 dark:text-stone-100">직업</div>
                <div className="text-sm font-light dark:text-stone-100">{userInfo?.job}</div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700 dark:text-stone-100">경력</div>
                <div className="text-sm font-light dark:text-stone-100">{userInfo?.experience}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'SETTINGS' && (
          <div className="flex flex-col gap-10">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={userInfoEditModal.onOpen}
            >
              <div className="text-xl font-semibold dark:text-stone-100">개인 정보 수정</div>
              <div className="text-2xl ml-auto  font-light dark:text-stone-100">{'>'}</div>
            </div>
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={passwordEditModal.onOpen}
            >
              <div className="text-xl font-semibold dark:text-stone-100">비밀번호 변경</div>
              <div className="text-2xl ml-auto  font-light dark:text-stone-100">{'>'}</div>
            </div>
          </div>
        )}
      </div>
      {userInfo && <UserInfoEditModal userInfo={userInfo} />}
      <PasswordEditModal />
    </div>
  );
};

export default Mypage;
