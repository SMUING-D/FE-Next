'use client';

import Avatar from '@/app/components/Avatar';
import PasswordEditModal from '@/app/components/modals/PasswordEditModal.tsx';
import UserAdditionalInfoModal from '@/app/components/modals/UserAdditionalInfoModal';
import UserInfoEditModal from '@/app/components/modals/UserInfoEditModal';
import UserRevokeModal from '@/app/components/modals/UserRevokeModal';
import MyPostView from '@/app/components/mypost/MyPostView';
import ErrorPage from '@/app/error';
import usePasswordEditModal from '@/app/hooks/usePasswordEditModal';
import useUserAdditionalInfoModal from '@/app/hooks/useUserAdditionalInfoModal';
import useUserInfoEditModal from '@/app/hooks/useUserInfoModal';
import useUserRevokeModal from '@/app/hooks/useUserRevokeModal';
import getUserInfo from '@/app/lib/getUserInfo';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { USER } from '../../types/index';

type ActiveType = 'MY_HOME' | 'SETTINGS' | 'WRITE_POST' | 'LIKE_POST' | 'STUDY_MANAGEMENT';

export type paramsType = {
  userId: string;
};

const Mypage = () => {
  const { userId } = useParams<paramsType>();
  const { data: session } = useSession();
  const userAdditionalInfoModal = useUserAdditionalInfoModal();
  const userInfoEditModal = useUserInfoEditModal();
  const passwordEditModal = usePasswordEditModal();
  const userRevokeModal = useUserRevokeModal();
  const [userInfo, setUserInfo] = useState<USER>(null);
  const [activeTab, setActiveTab] = useState<ActiveType>('MY_HOME');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo('user', userId);
      if (res) setUserInfo(res);
    };
    fetchData();
  }, [userId]);

  if (!userInfo) return <ErrorPage />;

  return (
    <div className="w-full mt-[60px] pt-10 flex xl:flex-row md:flex-col sm:flex-col min-[320px]:flex-col max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 gap-7">
      <div className="xl:w-60 min-[320px]:w-full flex flex-col gap-10">
        <div className="flex flex-row gap-3">
          <Avatar src={userInfo?.profileImg} />
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold dark:text-stone-100">{userInfo?.nickname}</div>
            <div className="text-sm text-slate-300 font-light dark:text-stone-100">
              {userInfo?.email}
            </div>
          </div>
        </div>
        <div className="w-full overflow-scroll overflow-y-hidden overflow-x-hidden hover:overflow-x-visible">
          <div className="flex xl:flex-col xl:w-52 md:flex-row md:w-[480px] sm:flex-row sm:w-[400px] min-[320px]:flex-row min-[320px]:w-[400px] gap-5">
            <div
              className={`text-bold text-sm md:text-lg font-semibold cursor-pointer dark:text-stone-100 ${
                activeTab === 'MY_HOME'
                  ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                  : ''
              }`}
              onClick={() => setActiveTab('MY_HOME')}
            >
              {parseInt(userId) === session?.user?.userId ? 'MY 홈' : '유저 정보'}
            </div>
            {parseInt(userId) === session?.user?.userId && (
              <>
                <div
                  className={` text-bold text-sm md:text-lg  font-semibold cursor-pointer dark:text-stone-100  ${
                    activeTab === 'SETTINGS'
                      ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                      : ''
                  }`}
                  onClick={() => setActiveTab('SETTINGS')}
                >
                  개인 설정
                </div>
                <div
                  className={` text-bold text-sm md:text-lg font-semibold cursor-pointer dark:text-stone-100  ${
                    activeTab === 'WRITE_POST'
                      ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                      : ''
                  }`}
                  onClick={() => {
                    setActiveTab('WRITE_POST');
                  }}
                >
                  내가 쓴 글
                </div>
                <div
                  className={` text-bold text-sm md:text-lg font-semibold cursor-pointer dark:text-stone-100  ${
                    activeTab === 'LIKE_POST'
                      ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                      : ''
                  }`}
                  onClick={() => {
                    setActiveTab('LIKE_POST');
                  }}
                >
                  내가 좋아요 한 글
                </div>
                <div
                  className={` text-bold text-sm md:text-lg font-semibold cursor-pointer dark:text-stone-100  ${
                    activeTab === 'STUDY_MANAGEMENT'
                      ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                      : ''
                  }`}
                  onClick={() => {
                    setActiveTab('STUDY_MANAGEMENT');
                  }}
                >
                  스터디 관리
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-2">
        {activeTab === 'MY_HOME' && (
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
              onClick={userAdditionalInfoModal.onOpen}
            >
              <div className="text-xl font-semibold dark:text-stone-100">부가 정보 수정</div>
              <div className="text-2xl ml-auto  font-light dark:text-stone-100">{'>'}</div>
            </div>
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={passwordEditModal.onOpen}
            >
              <div className="text-xl font-semibold dark:text-stone-100">비밀번호 변경</div>
              <div className="text-2xl ml-auto  font-light dark:text-stone-100">{'>'}</div>
            </div>
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={userRevokeModal.onOpen}
            >
              <div className="text-xl font-semibold dark:text-stone-100">회원 탈퇴</div>
              <div className="text-2xl ml-auto  font-light dark:text-stone-100">{'>'}</div>
            </div>
          </div>
        )}
        {activeTab === 'WRITE_POST' && (
          <div className="flex flex-col gap-10">
            <MyPostView userId={userId} queryKey="MY_POSTS" />
          </div>
        )}
        {activeTab === 'LIKE_POST' && (
          <div className="flex flex-col gap-10">
            <MyPostView userId={userId} queryKey="MY_LIKE_POSTS" />
          </div>
        )}
        {activeTab === 'STUDY_MANAGEMENT' && <div>스터디 관리 탭</div>}
      </div>
      {userInfo && <UserAdditionalInfoModal userInfo={userInfo} />}
      {userInfo && <UserInfoEditModal userInfo={userInfo} />}
      <PasswordEditModal />
      <UserRevokeModal />
    </div>
  );
};

export default Mypage;
