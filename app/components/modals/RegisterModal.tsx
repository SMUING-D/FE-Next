'use client';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import sendAuthMail from '@/app/lib/sendAuthMail';
import verifyAuthNum from '@/app/lib/verifyAuthNum';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import schema from '../../schema/user';
import Button from '../Button';
import Heading from '../Heading';
import FormError from '../form-error';
import FileInput from '../inputs/FileInput';
import Input from '../inputs/Input';
import Modal from './Modal';

// step 선언
enum STEPS {
  ONE = 1,
  TWO = 2,
  THREE = 3
}

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const [nowPage, setNowPage] = useState(STEPS.ONE);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [resetImage, setResetImage] = useState(false);
  const [isAuthNum, setisAuthNum] = useState(false);

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
    defaultValues: {
      email: '',
      authNum: '',
      password: '',
      confirmPassword: '',
      name: '',
      nickname: '',
      profile: '',
      studentId: ''
    }
  });

  const {
    email,
    authNum,
    password,
    confirmPassword,
    name,
    nickname,
    profile, // eslint-disable-line @typescript-eslint/no-unused-vars
    studentId
  } = watch();

  // FieldError와 React.ReactElement 타입이 일치하지않아서.
  // FieldError react-hook-form에서 생성된 오브젝트.
  // ReactNode는 React에서 렌더링 되는 모든 타입(숫자, 불리언, 문자열)을 포함하는 추상적 타입.
  // 이게 호환이안된데요.

  // 해결 방안 (FieldError와 같은 타입을 -> ReactNode에 호환하는 타입으로 변경)
  // 우리가 사용하는 값들이 문자열 값이니까 toString().

  //File state 변경
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

  const onClickPostAuthNum = async () => {
    if (errors.email || email === '') {
      toast('이메일을 올바르게 입력해주세요!');
    } else {
      const res = await sendAuthMail(email);
      if (res) {
        setisAuthNum(true);
      }
    }
  };

  const actionLabel = useMemo(() => {
    if (nowPage === STEPS.ONE) {
      return '학교 인증하기';
    } else if (nowPage === STEPS.THREE) {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log('제출된 데이터: ', data);

    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/register`, data)
      .then(() => {
        registerModal.onClose();
        reset({});
        setNowPage(STEPS.ONE);
        setisAuthNum(false);
        toast('가입되었습니다.');
      })
      .catch((error) => {
        console.error(error);
        toast.error('에러가 발생했습니다.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const nextPage = async () => {
    if (nowPage === STEPS.THREE) {
      handleSubmit(onSubmit)();
    } else {
      if (nowPage === STEPS.ONE) {
        if (errors.email) {
          toast('양식에 맞는 내용을 입력해주세요');
          return;
        } else {
          const res = await verifyAuthNum(email, authNum);
          if (res) {
            setNowPage(nowPage + 1);
          } else {
            toast('인증번호가 일치하지 않습니다.');
            return;
          }
        }
      } else if (
        (nowPage === STEPS.TWO &&
          (errors.studentId || errors.password || errors.confirmPassword)) ||
        (!studentId && !password && !confirmPassword)
      ) {
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
    <div className="flex flex-col gap-4">
      <Heading
        title="SMUING에 오신 것을 환영합니다!"
        subtitle="계정을 생성하기 전에 학교 인증을 해주세요!"
      />
      <div className="flex flex-row gap-2 items-center">
        <Input
          id="email"
          label="이메일"
          value={email}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div className="w-32 ml-auto">
          <Button label="인증번호 받기" onClick={onClickPostAuthNum} />
        </div>
      </div>
      {isAuthNum && <div className="font-medium text-gray-400">인증번호가 전송되었습니다.</div>}
      {errors.email && <FormError message={errors.email?.message?.toString()} />}
      <Input
        id="authNum"
        label="인증 번호"
        value={authNum}
        disabled={!isAuthNum}
        register={register}
        errors={errors}
        required
      />
      {errors.authNum && <FormError message={errors.authNum?.message?.toString()} />}
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex gap-2 items-center justify-center">
          <div>이미 계정이 있으신가요?</div>
          <div
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            로그인
          </div>
        </div>
      </div>
    </div>
  );

  if (nowPage === STEPS.TWO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <h3 className="font-regular text-neutral-800 mt-2">학번 및 비밀번호를 설정해주세요</h3>
        <Input
          id="studentId"
          label="학번"
          value={studentId}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.studentId && <FormError message={errors.studentId?.message?.toString()} />}
        <Input
          id="password"
          type="password"
          label="비밀번호"
          value={password}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.password && <FormError message={errors.password?.message?.toString()} />}
        <Input
          id="confirmPassword"
          type="password"
          label="비밀번호 확인"
          value={confirmPassword}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        {errors.confirmPassword && (
          <FormError message={errors.confirmPassword?.message?.toString()} />
        )}
      </div>
    );
  }
  if (nowPage === STEPS.THREE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <h3 className="font-regular text-neutral-800 mt-2">기본 개인정보를 작성해주세요</h3>
        <Input
          id="name"
          value={name}
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
        <div className="flex flex-row gap-3 justify-between">
          <div className="w-24 h-22 overflow-hidden rounded-md border-2">
            <Image
              src={
                selectedFile && !resetImage
                  ? URL.createObjectURL(selectedFile)
                  : '/images/placeholder.jpg'
              }
              width={100}
              height={70}
              className="rounded-md object-cover"
              alt="profileImg"
            />
          </div>
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
        {errors.school && <FormError message={errors.school?.message?.toString()} />}
      </div>
    );
  }

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="구글로 계속하기" icon={FcGoogle} onClick={() => {}} />
      <Button outline label="깃허브로 계속하기" icon={AiFillGithub} onClick={() => {}} />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={() => {
        registerModal.onClose();
        reset();
        setNowPage(1);
        setisAuthNum(false);
      }}
      onSubmit={nextPage}
      title="회원가입"
      actionLabel={actionLabel}
      body={bodyContent}
      footer={footerContent}
      secondaryAction={backPage}
      secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default RegisterModal;
