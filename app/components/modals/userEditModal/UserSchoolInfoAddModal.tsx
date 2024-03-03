import useUserSchoolInfoAddModal from '@/app/hooks/useUserSchoolInfoAddModal';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../../Heading';
import Input from '../../inputs/Input';
import TextInput from '../../inputs/TextInput';
import Modal from '../Modal';

const UserSchoolInfoAddModal = () => {
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const UserSchoolInfoAddModal = useUserSchoolInfoAddModal();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      school: '',
      major: '',
      startDate: '',
      dueDate: '',
      description: ''
    }
  });

  const school = watch('school');
  const major = watch('major');
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
      UserSchoolInfoAddModal.onClose();
    }
  };

  const cancelAdd = () => {
    toast('취소되었습니다.');
    UserSchoolInfoAddModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="학교 정보를 추가합니다." />
      <Input
        id="school"
        label="학교명"
        value={school}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="major"
        label="학과"
        value={major}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="startDate"
        type="date"
        value={startDate}
        label="시작일"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="dueDate"
        type="date"
        value={dueDate}
        label="종료일"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <TextInput id="description" register={register} placeholder="학교생활 한줄 소개" required />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={UserSchoolInfoAddModal.isOpen}
      onClose={() => {
        UserSchoolInfoAddModal.onClose();
        reset();
      }}
      onSubmit={handleSubmit(onSubmit)}
      title="학교 정보 추가"
      actionLabel="저장하기"
      body={bodyContent}
      secondaryAction={cancelAdd}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserSchoolInfoAddModal;
