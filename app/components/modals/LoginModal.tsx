'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false); //eslint-disable-line no-unused-vars

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = () => {};

  const bodyContent = (
    <div>
      <Heading title="로그인을 해주세요" subtitle="아래에 입력해주세요" />
      <Input id="email" label="이메일" register={register} errors={errors} required />
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
