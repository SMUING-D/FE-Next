import useUserActivityInfoAddModal from '@/app/hooks/useUserActivityInfoAddModal';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../../Heading';
import Input from '../../inputs/Input';
import TextInput from '../../inputs/TextInput';
import Modal from '../Modal';

const UserActivityInfoAddModal = () => {
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
      activity: '',
      startDate: '',
      dueDate: '',
      description: ''
    }
  });

  const activity = watch('activity');
  const startDate = watch('startDate');
  const dueDate = watch('dueDate');

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
      <Heading title="대외활동 정보를 추가합니다." />
      <Input
        id="activity"
        label="활동명"
        value={activity}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="startDate"
        type="date"
        label="시작일"
        value={startDate}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="dueDate"
        type="date"
        label="종료일"
        value={dueDate}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <TextInput id="description" register={register} placeholder="대외활동 한줄 소개" required />
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
      title="대외활동 정보 추가"
      actionLabel="저장하기"
      body={bodyContent}
      secondaryAction={cancelAdd}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserActivityInfoAddModal;
