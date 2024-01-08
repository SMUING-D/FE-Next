'use client';

import useUserInfoEditModal from '@/app/hooks/useUserInfoModal';
import editUserInfo from '@/app/lib/editUserInfo';
import schema from '@/app/schema/userInfo';
import { User } from '@/app/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import FormError from '../form-error';
import Input from '../inputs/Input';
import Modal from './Modal';

//nickname, username, profile img, school, major, minor, grade, majorCollege, minorCollege, job, experience, introduce
enum STEPS {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5
}

const UserInfoEditModal = ({ userInfo }: { userInfo: User }) => {
  const userInfoEditModal = useUserInfoEditModal();
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [nowPage, setNowPage] = useState(STEPS.ONE);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      nickname: '',
      profileImg: '',
      school: '',
      major: '',
      minor: '',
      grade: '',
      majorCollege: '',
      minorCollege: '',
      job: '',
      experience: '',
      introduce: ''
    }
  });
  const {
    name,
    nickname,
    profileImg,
    school,
    major,
    minor,
    grade,
    majorCollege,
    minorCollege,
    job,
    experience,
    introduce
  } = watch();

  const actionLabel = useMemo(() => {
    if (nowPage === STEPS.FIVE) {
      return '수정하기';
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
    try {
      await editUserInfo('user', data);
    } catch (error) {
      console.error(error);
    } finally {
      userInfoEditModal.onClose();
    }
  };

  const nextPage = () => {
    if (nowPage === STEPS.THREE) {
      handleSubmit(onSubmit)();
    } else {
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
    <div className="flex flex-col gap-4">
      <Heading title="개인 정보를 수정합니다." />
      <Input
        id="name"
        value={name ? name : userInfo?.username}
        label="이름"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.name && <FormError message={errors.name?.message?.toString()} />}
      <Input
        id="nickname"
        label="닉네임"
        value={nickname ? nickname : userInfo?.nickname}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.nickname && <FormError message={errors.nickname?.message?.toString()} />}
      <Input
        id="profileImg"
        label="프로필사진"
        value={profileImg}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.profileImg && <FormError message={errors.profileImg?.message?.toString()} />}
    </div>
  );

  if (nowPage === STEPS.TWO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Input
          id="school"
          label="학교"
          value={school}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.school && <FormError message={errors.school?.message?.toString()} />}
        <Input
          id="grade"
          label="학년"
          type="number"
          value={grade}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.grade && <FormError message={errors.grade?.message?.toString()} />}
      </div>
    );
  }

  if (nowPage === STEPS.THREE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
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
        <Input
          id="minor"
          label="부전공 및 복수전공"
          value={minor}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.minor && <FormError message={errors.minor?.message?.toString()} />}
        <Input
          id="majorCollege"
          label="본전공 단과대"
          value={majorCollege}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.majorCollege && <FormError message={errors.majorCollege?.message?.toString()} />}
        <Input
          id="minorCollege"
          label="부전공 및 복수전공 단과대"
          value={minorCollege}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.minorCollege && <FormError message={errors.minorCollege?.message?.toString()} />}
      </div>
    );
  }

  if (nowPage === STEPS.FOUR) {
    bodyContent = (
      <div className="flex flex-col gap-4">
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
      </div>
    );
  }

  if (nowPage === STEPS.FIVE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Input
          id="introduce"
          label="자기소개"
          value={introduce}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.introduce && <FormError message={errors.introduce?.message?.toString()} />}
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={userInfoEditModal.isOpen}
      onClose={() => {
        userInfoEditModal.onClose();
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

export default UserInfoEditModal;
