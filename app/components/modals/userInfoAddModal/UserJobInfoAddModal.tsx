import useUserJobInfoAddModal from '@/app/hooks/useUserJobInfoAddModal';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../../Heading';
import Input from '../../inputs/Input';
import TextInput from '../../inputs/TextInput';
import Modal from '../Modal';

const UserJobInfoAddModal = () => {
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const UserJobInfoAddModal = useUserJobInfoAddModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      company: '',
      position: '',
      startDate: '',
      dueDate: '',
      description: ''
    }
  });

  const company = watch('company');
  const position = watch('position');
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
      UserJobInfoAddModal.onClose();
      reset();
    }
  };

  const cancelAdd = () => {
    toast('취소되었습니다.');
    UserJobInfoAddModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="경력 정보를 추가합니다." />
      <Input
        id="company"
        label="기업명"
        value={company}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="position"
        label="직무"
        value={position}
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
      <TextInput id="description" register={register} placeholder="직무 한줄 소개" required />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={UserJobInfoAddModal.isOpen}
      onClose={() => {
        UserJobInfoAddModal.onClose();
        reset();
      }}
      onSubmit={handleSubmit(onSubmit)}
      title="경력 정보 추가"
      actionLabel="저장하기"
      body={bodyContent}
      secondaryAction={cancelAdd}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserJobInfoAddModal;
