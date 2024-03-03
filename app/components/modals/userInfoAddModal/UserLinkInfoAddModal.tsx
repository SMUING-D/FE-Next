import useUserActivityInfoAddModal from '@/app/hooks/useUserActivityInfoAddModal';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../../Heading';
import Input from '../../inputs/Input';
import Modal from '../Modal';

const UserLinkInfoAddModal = () => {
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const UserActivityInfoAddModal = useUserActivityInfoAddModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      linkName: '',
      link: ''
    }
  });

  const linkName = watch('linkName');
  const link = watch('link');

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data);
    if (data) {
      toast('제출되었습니다.');
      UserActivityInfoAddModal.onClose();
      reset();
    }
  };

  const cancelAdd = () => {
    toast('취소되었습니다.');
    UserActivityInfoAddModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="링크 정보를 추가합니다." />
      <Input
        id="linkName"
        label="링크 이름"
        value={linkName}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="link"
        label="링크 URL"
        value={link}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={UserActivityInfoAddModal.isOpen}
      onClose={() => {
        UserActivityInfoAddModal.onClose();
        reset();
      }}
      onSubmit={handleSubmit(onSubmit)}
      title="링크 정보 추가"
      actionLabel="저장하기"
      body={bodyContent}
      secondaryAction={cancelAdd}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserLinkInfoAddModal;
