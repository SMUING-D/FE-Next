'use client';

import usePasswordEditModal from '@/app/hooks/usePasswordEditModal';
import changePassword from '@/app/lib/changePassword';
import schema from '@/app/schema/password';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import FormError from '../form-error';
import Input from '../inputs/Input';
import Modal from './Modal';

const PasswordEditModal = () => {
  const passwordEditModal = usePasswordEditModal();
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const email = session?.user?.email;

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
    watch
  } = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      userPassword: '',
      password: '',
      confirmPassword: ''
    }
  });

  const { userPassword, password, confirmPassword } = watch();

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    setIsLoading(true);
    try {
      const res = await changePassword({
        email,
        userPassword,
        password,
        confirmPassword
      });
      if (res) {
        toast.success('비밀번호가 변경되었습니다.');
      }
    } catch (error) {
      toast('비밀번호가 일치하지 않습니다.');
      console.error(error);
    } finally {
      passwordEditModal.onClose();
      setIsLoading(false);
      reset();
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="비밀번호를 변경합니다." />
      <Input
        id="userPassword"
        type="password"
        value={userPassword}
        label="현재 비밀번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {errors.userPassword && <FormError message={errors.userPassword?.message?.toString()} />}
      <Input
        id="password"
        type="password"
        label="새로운 비밀번호"
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
        label="새로운 비밀번호 확인"
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={passwordEditModal.isOpen}
      onClose={() => {
        passwordEditModal.onClose();
        reset();
      }}
      onSubmit={handleSubmit(onSubmit)}
      title="비밀번호 변경"
      actionLabel="제출하기"
      body={bodyContent}
    />
  );
};

export default PasswordEditModal;
