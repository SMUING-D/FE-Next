'use client';

import useWriteModal from '@/app/hooks/useWriteModal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Counter from '../inputs/Counter';
import Input from '../inputs/Input';
import Modal from './Modal';

enum STEPS {
  ZERO = 0,
  ONE = 1
}

const WriteModal = () => {
  const router = useRouter();
  const writeModal = useWriteModal();
  const [step, setStep] = useState(STEPS.ZERO);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    // console.log(Array.isArray(selectedFiles)); // false
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // 계속 이미지를 업로드하면, 추가할 수 있게 concat method활용
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
      image: [],
      start_date: '',
      memberCount: 1,
      studyProjectType: '',
      dueDate: '',
      college: ''
    }
  });

  const title = watch('title');
  const content = watch('content');
  const start_date = watch('start_date');
  const dueDate = watch('dueDate');
  const memberCount = watch('memberCount');
  const studyProjectType = watch('studyProjectType');
  const college = watch('college');
  // const image = watch('image');

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.ONE) {
      return onNext();
    }
    console.log(data);
    setIsLoading(true);
    axios
      .post('/api/posts', data)
      .then(() => {
        toast.success('게시글 작성에 성공하였습니다.');

        router.refresh();
        // Initialize Form
        reset();
        setStep(STEPS.ZERO);
        writeModal.onClose();
      })
      .catch(() => {
        toast.error('게시글 작성에 실패하셨습니다.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.ONE) {
      return '글 작성하기';
    }
    return '다음';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.ZERO) {
      return undefined;
    }
    return '뒤로 가기';
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="어떤 종류의 게시글을 작성하고 싶으신가요?"
        subtitle="카테고리를 선택해주세요"
      />
      <Input
        id="studyProjectType"
        value={studyProjectType}
        label="카테고리 선택"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        id="college"
        value={college}
        label="단과대 선택"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Counter
        title="모집 인원 수"
        subtitle="몇명을 모집하고 싶으신가요?"
        value={memberCount}
        onChange={(value) => setValue('memberCount', value)}
      />
      <Input
        id="start_date"
        type="date"
        value={start_date}
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
    </div>
  );

  if (step === STEPS.ONE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="어떤 종류의 게시글을 작성하고 싶으신가요?"
          subtitle="카테고리를 선택해주세요"
        />
        <Input
          id="title"
          value={title}
          label="제목"
          register={register}
          disabled={isLoading}
          errors={errors}
          required
        />
        <textarea
          placeholder="게시글 내용을 자유롭게 입력해주세요!"
          className="text-lg p-4 border-2 color-black"
          value={content}
          onChange={(event) => setValue('content', event.target.value)}
        />
        <input
          {...register('image')}
          id="picture"
          type="file"
          accept="image/*"
          multiple
          onChange={onSelectFile}
        />
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p>
              10개 이상 이미지를 올릴 수 없습니다. <br />
              <span>
                <b>{selectedImages.length - 10} 개의 이미지를 삭제해주세요</b>
              </span>
            </p>
          ) : (
            <button
              onClick={() => {
                console.log('이미지 업로드');
              }}
            >
              {/* {selectedImages.length === 1 ? '' : 'S'} */}
              {selectedImages.length}개의 이미지 업로드!
            </button>
          ))}
        <div>
          <div className="overflow-x-auto flex items-center gap-7">
            {selectedImages &&
              selectedImages.map((image) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center w-52 h-[300px]"
                    key={image}
                  >
                    <img
                      src={image}
                      alt="upload"
                      className="object-contain min-w-[150px] h-[150px]"
                    />
                    <button
                      className="bg-red-500 p-3 mt-3 rounded-lg w-[70px] h-[50px] text-white font-bold text-lg"
                      onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}
                    >
                      삭제
                    </button>
                    {/* <p>{index + 1}</p> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={writeModal.isOpen}
      onClose={writeModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ZERO ? undefined : onBack}
      title="게시글 작성하기"
      body={bodyContent}
    />
  );
};

export default WriteModal;
