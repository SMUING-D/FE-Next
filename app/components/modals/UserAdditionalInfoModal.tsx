import useUserAdditionalInfoModal from '@/app/hooks/useUserAdditionalInfoModal';
import editUserInfo from '@/app/lib/editUserInfo';
import { USER } from '@/app/types';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
// import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import FormError from '../form-error';
import Input from '../inputs/Input';
import TextInput from '../inputs/TextInput';
import SelectBox, { OptionType } from '../select/SelectBox';
import { COLLEGE_OPTIONS, GRADE_OPTIONS } from '../select/options/registerOptions';
import Modal from './Modal';

enum STEPS {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4
}

const UserAdditionalInfoModal = ({ userInfo }: { userInfo: USER }) => {
  const userAdditionalInfoModal = useUserAdditionalInfoModal();
  const [majorCollegeName, setMajorCollegeName] = useState<OptionType>();
  const [minorCollegeName, setMinorCollegeName] = useState<OptionType>();
  const [grade, setGrade] = useState<OptionType>();
  const [isLoading, setIsLoading] = useState(false);
  const [nowPage, setNowPage] = useState(STEPS.ONE);

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  useEffect(() => {
    let grade = '';
    switch (userInfo?.grade) {
      case 'ONE':
        grade = '1';
        break;
      case 'TWO':
        grade = '2';
        break;
      case 'THREE':
        grade = '3';
        break;
      case 'FOUR':
        grade = '4';
        break;
      case 'GRADUATE':
        grade = '졸업';
        break;
    }
    setMajorCollegeName({ value: userInfo.majorCollege, label: userInfo.majorCollege });
    setMinorCollegeName({ value: userInfo.minorCollege, label: userInfo.minorCollege });
    setGrade({ value: userInfo?.grade + '', label: grade });
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<FieldValues>({
    mode: 'onBlur',
    // resolver: zodResolver(schema),
    defaultValues: userInfo
  });

  const { major, minor, job, experience, introduce } = watch();

  const handleSelectMajorCollege = (e: OptionType) => {
    const majorCollege = e.value;
    setValue('majorCollege', majorCollege);
    setMajorCollegeName(e);
  };

  const handleSelectMinorCollege = (e: OptionType) => {
    const minorCollege = e.value;
    setValue('minorCollege', minorCollege);
    setMinorCollegeName(e);
  };

  const handleSelectGrade = (e: OptionType) => {
    const grade = e.value;
    setValue('grade', grade);
    setGrade(e);
  };

  const actionLabel = useMemo(() => {
    if (nowPage === STEPS.FOUR) {
      return '제출하기';
    }
    return '계속하기';
  }, [nowPage]);

  const secondaryActionLabel = useMemo(() => {
    if (nowPage === STEPS.ONE) {
      return undefined;
    }
    return '뒤로가기';
  }, [nowPage]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
      await editUserInfo('user', data);
    } catch (error) {
      console.error(error);
    } finally {
      userAdditionalInfoModal.onClose();
      setNowPage(STEPS.ONE);
      toast.success('개인 정보가 수정되었습니다');
    }
    setIsLoading(false);
  };

  const nextPage = () => {
    if (nowPage === STEPS.FOUR) {
      handleSubmit(onSubmit)();
    } else {
      if (nowPage === STEPS.ONE && errors.grade) {
        toast('양식에 맞는 내용을 입력해주세요');
        return;
      }
      setNowPage(nowPage + 1);
    }
  };

  const backPage = () => {
    if (nowPage === STEPS.ONE) {
      toast.error('첫번째 페이지입니다.');
    } else {
      setNowPage(nowPage - 1);
    }
  };

  let bodyContent = (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <Heading title="개인 정보를 수정합니다." subtitle="학년을 입력해주세요." />
      <SelectBox
        id="grade"
        placeholder="학년"
        value={grade}
        onChange={handleSelectGrade}
        options={GRADE_OPTIONS}
      />
      {errors.grade && <FormError message={errors.grade?.message?.toString()} />}
    </form>
  );

  if (nowPage === STEPS.TWO) {
    bodyContent = (
      <form className="flex flex-col gap-4" encType="multipart/form-data">
        <Heading title="개인 정보를 수정합니다." subtitle="학과 정보를 입력해주세요." />
        <Input
          id="major"
          label="본전공"
          value={major}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.major && <FormError message={errors.major?.message?.toString()} />}
        <SelectBox
          id="majorCollege"
          placeholder="본전공 단과대"
          value={majorCollegeName}
          onChange={handleSelectMajorCollege}
          options={COLLEGE_OPTIONS}
        />
        {errors.majorCollege && <FormError message={errors.majorCollege?.message?.toString()} />}
        <Input
          id="minor"
          label="부전공"
          value={minor}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.minor && <FormError message={errors.minor?.message?.toString()} />}

        <SelectBox
          id="minorCollege"
          placeholder="부전공 단과대"
          value={minorCollegeName}
          onChange={handleSelectMinorCollege}
          options={COLLEGE_OPTIONS}
        />
        {errors.minorCollege && <FormError message={errors.minorCollege?.message?.toString()} />}
      </form>
    );
  }

  if (nowPage === STEPS.THREE) {
    bodyContent = (
      <form className="flex flex-col gap-4" encType="multipart/form-data">
        <Heading title="개인 정보를 수정합니다." subtitle="직업 및 경력을 입력해주세요." />
        <Input
          id="job"
          label="직업"
          value={job}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.job && <FormError message={errors.job?.message?.toString()} />}
        <Input
          id="experience"
          label="경력"
          value={experience}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.experience && <FormError message={errors.experience?.message?.toString()} />}
      </form>
    );
  }

  if (nowPage === STEPS.FOUR) {
    bodyContent = (
      <form className="flex flex-col gap-4" encType="multipart/form-data">
        <Heading title="개인 정보를 수정합니다." subtitle="자기소개를 입력해주세요." />
        <TextInput id="introduce" value={introduce} register={register} required />
        {errors.introduce && <FormError message={errors.introduce?.message?.toString()} />}
      </form>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={userAdditionalInfoModal.isOpen}
      onClose={() => {
        userAdditionalInfoModal.onClose();
        reset();
        setNowPage(1);
      }}
      onSubmit={nextPage}
      title="개인 정보 수정"
      actionLabel={actionLabel}
      body={bodyContent}
      secondaryAction={backPage}
      secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default UserAdditionalInfoModal;
