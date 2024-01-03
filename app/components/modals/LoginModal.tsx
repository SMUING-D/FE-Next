'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import schema from '@/app/schema/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import Button from '../Button';
import Heading from '../Heading';
import FormError from '../form-error';
import Input from '../inputs/Input';
import Modal from './Modal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false); //eslint-disable-line no-unused-vars

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
      email: '',
      password: ''
    }
  });
  const { email, password } = watch();

  const finishLogin = (message: string) => {
    setIsLoading(false);
    loginModal.onClose();
    reset({});
    toast(message);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    setIsLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password
    });

    if (result?.status === 401) {
      console.error(result);
      finishLogin('로그인에 실패했습니다. 다시 시도해주세요');
    } else {
      finishLogin('로그인 되었습니다.');
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="SMUING에 오신 것을 환영합니다!"
        subtitle="이메일 및 비밀번호를 입력해주세요"
      />
      <Input id="email" label="이메일" register={register} errors={errors} required value={email} />
      {errors.email && <FormError message={errors?.email?.message?.toString()} />}
      <Input
        id="password"
        label="비밀번호"
        type="password"
        register={register}
        errors={errors}
        required
        value={password}
      />
      {errors.password && <FormError message={errors?.password?.message?.toString()} />}
    </div>
  );

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
      isOpen={loginModal.isOpen}
      title="로그인"
      actionLabel="로그인"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;
