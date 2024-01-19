import useUserRevokeModal from '@/app/hooks/useUserRevokeModal';
import revokeUser from '@/app/lib/revokeUser';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Modal from './Modal';

const UserRevokeModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userRevokeModal = useUserRevokeModal();

  const onRevoke = async () => {
    setIsLoading(true);
    const res = await revokeUser('token');
    if (res) {
      toast('정상적으로 탈퇴 처리 되었습니다.');
      signOut();
    }
    setIsLoading(false);
  };

  const cancelRevoke = () => {
    toast('취소되었습니다.');
    userRevokeModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="SMUING 회원 탈퇴를 진행합니다." subtitle="정말 탈퇴를 진행할까요? 😥" />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={userRevokeModal.isOpen}
      onClose={userRevokeModal.onClose}
      onSubmit={onRevoke}
      title="회원 탈퇴하기"
      actionLabel="탈퇴하기"
      body={bodyContent}
      secondaryAction={cancelRevoke}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserRevokeModal;
