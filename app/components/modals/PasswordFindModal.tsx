'use client';

import usePasswordFindModal from '@/app/hooks/usePasswordFindModal';
import resetPassword from '@/app/lib/resetPassword';
import sendAuthMail from '@/app/lib/sendAuthMail';
import schema from '@/app/schema/passwordFind';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../Button';
import Heading from '../Heading';
import FormError from '../form-error';
import Input from '../inputs/Input';
import Modal from './Modal';

enum STEPS {
  ONE = 1,
  TWO = 2
}

const PasswordFindModal = () => {
  const passwordFindModal = usePasswordFindModal();
  const [isLoading, setIsLoading] = useState(false);
  const [nowPage, setNowPage] = useState(STEPS.ONE);
  const [isAuthNum, setisAuthNum] = useState(false);
  const [authNumber, setIsAuthNumber] = useState('');

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
      authNum: '',
      password: '',
      confirmPassword: ''
    }
  });

  const { email, authNum, password, confirmPassword } = watch();

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
    console.log(data);
    setIsLoading(true);
    const res = resetPassword({ email, password, confirmPassword });
    if (res) {
      toast('비밀번호가 변경되었습니다.');
      setNowPage(STEPS.ONE);
      reset();
      passwordFindModal.onClose();
    } else {
      toast('에러가 발생했습니다. 이후에 다시 시도해주세요');
    }
    setIsLoading(false);
  };

  const onClickPostAuthNum = async () => {
    if (errors.email || email === '') {
      toast('이메일을 올바르게 입력해주세요!');
    } else {
      const res = await sendAuthMail(email);
      if (res) {
        setisAuthNum(true);
        setIsAuthNumber(res); //res -> 인증번호 ex) 101010
      }
    }
  };

  const nextPage = () => {
    if (nowPage === STEPS.TWO) {
      handleSubmit(onSubmit)();
    } else {
      if (nowPage === STEPS.ONE && errors.email && errors.authNum) {
        toast('양식에 맞는 내용을 입력해주세요.');
        return;
      } else if (nowPage === STEPS.ONE && authNum !== authNumber) {
        toast('인증번호가 일치하지 않습니다.');
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
        title="비밀번호를 초기화를 진행합니다."
        subtitle="본인 확인을 위한 이메일과 인증번호를 입력해주세요"
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
          <Button label="인증번호 전송" onClick={onClickPostAuthNum} />
        </div>
      </div>
      {authNumber && <div className="font-medium text-gray-400">인증번호가 전송되었습니다.</div>}
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
    </div>
  );

  if (nowPage === STEPS.TWO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <h3 className="font-regular text-neutral-800 mt-2">새로운 비밀번호를 입력해주세요</h3>
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={passwordFindModal.isOpen}
      onClose={() => {
        passwordFindModal.onClose();
        reset();
        setNowPage(1);
      }}
      onSubmit={nextPage}
      title="비밀번호 찾기"
      actionLabel={actionLabel}
      body={bodyContent}
      secondaryAction={backPage}
      secondaryActionLabel={secondaryActionLabel}
    />
  );
};

export default PasswordFindModal;
