'use client';

import { useEffect, useState } from 'react';

import Avatar from '../components/Avatar';
import getUserInfo from '../lib/getUserInfo';
import { User } from '../types';

type ActiveType = 'MYHOME' | 'SETTINGS';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<User>();
  const [activeTab, setActiveTab] = useState<ActiveType>('MYHOME');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo('user');
      if (res) {
        setUserInfo(res);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-10 flex xl:flex-row md:flex-col sm:flex-col min-[320px]:flex-col max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 gap-7">
      <div className="flex flex-col w-60 gap-10">
        <div className="flex flex-row gap-3">
          <Avatar src={userInfo?.profileImg} />
          <div className="flex flex-col justify-center">
            <div className="text-xl font-bold">{userInfo?.nickname}</div>
            <div className="text-sm text-slate-300 font-light">{userInfo?.email}</div>
          </div>
        </div>

        <div className="flex xl:flex-col md:flex-row sm:flex-row min-[320px]:flex-row gap-5">
          <div
            className={`text-bold text-lg font-semibold cursor-pointer ${
              activeTab === 'MYHOME'
                ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                : ''
            }`}
            onClick={() => setActiveTab('MYHOME')}
          >
            MY 홈
          </div>
          <div
            className={`text-bold text-lg font-semibold cursor-pointer  ${
              activeTab === 'SETTINGS'
                ? 'text-blue-500 xl:border-r-4 xl:border-b-0 min-[320px]:border-b-4 border-blue-500'
                : ''
            }`}
            onClick={() => setActiveTab('SETTINGS')}
          >
            개인 설정
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-2">
        {activeTab === 'MYHOME' && (
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-semibold">자기소개</div>
              <div className="text-sm font-light">{userInfo?.introduce}</div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="text-2xl font-semibold">학교</div>
              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700">학교명</div>
                <div className="text-sm font-light">{userInfo?.school}</div>
              </div>

              <div className="text-lg font-medium">전공</div>
              <div className="flex flex-col gap-3">
                <div className="text-sm font-medium text-stone-700">본전공</div>
                <div className="text-sm font-light">
                  {userInfo?.majorCollege} {userInfo?.major}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-medium text-stone-700">부전공 및 복수전공</div>
                <div className="text-sm font-light">
                  {userInfo?.minorCollege} {userInfo?.major}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="text-2xl font-semibold">경력</div>
              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700">직업</div>
                <div className="text-sm font-light">{userInfo?.job}</div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-md font-medium text-stone-700">경력</div>
                <div className="text-sm font-light">{userInfo?.experience}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'SETTINGS' && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center cursor-pointer ">
              <div className="text-xl font-semibold">개인 정보 수정</div>
              <div className="text-2xl ml-auto  font-light">{'>'}</div>
            </div>
            <div className="flex flex-row items-center cursor-pointer ">
              <div className="text-xl font-semibold">비밀번호 변경</div>
              <div className="text-2xl ml-auto  font-light">{'>'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mypage;
