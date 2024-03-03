'use client';

import useUserInfoEditModal from '@/app/hooks/useUserInfoModal';
import editUserInfo from '@/app/lib/editUserInfo';
import schema from '@/app/schema/userInfo';
import { USER } from '@/app/types';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import FormError from '../form-error';
import FileInput from '../inputs/FileInput';
import Input from '../inputs/Input';
import Modal from './Modal';

enum STEPS {
  ONE = 1,
  TWO = 2
}

const UserInfoEditModal = ({ userInfo }: { userInfo: USER }) => {
  const userInfoEditModal = useUserInfoEditModal();
  const [isLoading, setIsLoading] = useState(false);
  const [nowPage, setNowPage] = useState(STEPS.ONE);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [resetImage, setResetImage] = useState(false);

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues
  } = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: userInfo
  });

  const {
    username,
    nickname,
    profile_img, // eslint-disable-line @typescript-eslint/no-unused-vars
    student_id
  } = watch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setResetImage(false);
    }
  };

  const onResetImage = () => {
    setSelectedFile(undefined);
    reset({ ...getValues(), profileImg: {} });
    setResetImage(true);
  };

  const actionLabel = useMemo(() => {
    if (nowPage === STEPS.TWO) {
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
      userInfoEditModal.onClose();
      setNowPage(STEPS.ONE);
      toast.success('개인 정보가 수정되었습니다');
    }
    setIsLoading(false);
  };

  const nextPage = () => {
    if (nowPage === STEPS.TWO) {
      handleSubmit(onSubmit)();
    } else {
      if (nowPage === STEPS.ONE && (errors.name || errors.nickname || errors.student_id)) {
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
      <Heading title="개인 정보를 수정합니다." />
      <Input
        id="username"
        value={username}
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
        value={nickname}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.nickname && <FormError message={errors.nickname?.message?.toString()} />}
      <Input
        id="student_id"
        label="학번"
        value={student_id}
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.student_id && <FormError message={errors.student_id?.message?.toString()} />}
    </form>
  );

  if (nowPage === STEPS.TWO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="개인 정보를 수정합니다." subtitle="프로필 이미지 설정" />
        <div className="flex flex-row gap-3 justify-between">
          {resetImage ? null : (
            <Image
              src={selectedFile ? URL.createObjectURL(selectedFile) : userInfo.profileImg}
              width={50}
              height={50}
              className="rounded-md object-cover w-[70px] h-[70px]"
              alt="profileImg"
            />
          )}
          <FileInput
            id="profileImg"
            disabled={isLoading}
            register={register}
            onChange={handleFileChange}
            errors={errors}
            resetImage={resetImage}
            onResetImage={onResetImage}
          />
        </div>
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
