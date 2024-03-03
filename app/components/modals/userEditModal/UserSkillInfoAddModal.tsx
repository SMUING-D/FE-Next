import useUserSkillInfoAddModal from '@/app/hooks/useUserSkillInfoAddModal';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../../Heading';
import Input from '../../inputs/Input';
import TextInput from '../../inputs/TextInput';
import SelectBox, { OptionType } from '../../select/SelectBox';
import { SKILL_LEVEL_OPTIONS } from '../../select/options/registerOptions';
import Modal from '../Modal';

const UserSkillInfoAddModal = () => {
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const UserSkillInfoAddModal = useUserSkillInfoAddModal();
  const [level, setLevel] = useState<OptionType>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      skill: '',
      level: '',
      startDate: '',
      dueDate: '',
      description: ''
    }
  });

  const handleSelectLevel = (e: OptionType) => {
    const level = e.value;
    setValue('level', level);
    setLevel(e);
  };

  const skill = watch('skill');
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
      UserSkillInfoAddModal.onClose();
    }
  };

  const cancelAdd = () => {
    toast('취소되었습니다.');
    UserSkillInfoAddModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="스킬 정보를 추가합니다." />
      <Input
        id="skill"
        label="스킬명"
        value={skill}
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <SelectBox
        id="level"
        placeholder="스킬 레벨 선택"
        value={level}
        onChange={handleSelectLevel}
        options={SKILL_LEVEL_OPTIONS}
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
      <TextInput id="description" register={register} placeholder="스킬 한줄 소개" required />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={UserSkillInfoAddModal.isOpen}
      onClose={() => {
        UserSkillInfoAddModal.onClose();
        reset();
      }}
      onSubmit={handleSubmit(onSubmit)}
      title="스킬 정보 추가"
      actionLabel="저장하기"
      body={bodyContent}
      secondaryAction={cancelAdd}
      secondaryActionLabel="취소하기"
    />
  );
};

export default UserSkillInfoAddModal;
