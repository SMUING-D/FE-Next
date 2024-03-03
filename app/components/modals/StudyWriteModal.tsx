'use client';

import useStudyWriteModal from '@/app/hooks/useStudyWriteModal';
import writeStudyPost from '@/app/lib/post/writeStudyPost';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Counter from '../inputs/Counter';
import Input from '../inputs/Input';
import SelectBox, { OptionType } from '../select/SelectBox';
import { COLLEGE_OPTIONS } from '../select/options/registerOptions';
import Modal from './Modal';

enum STEPS {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3
}

const StudyWriteModal = () => {
  const router = useRouter();
  const studyWriteModal = useStudyWriteModal();
  const [step, setStep] = useState(STEPS.ZERO);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [collegeName, setCollegeName] = useState<OptionType>();

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

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
      postImageDtoList: [],
      startDate: '',
      memberCount: 1,
      dueDate: '',
      college: '',
      linkName: '',
      link: ''
    }
  });

  const title = watch('title');
  const content = watch('content');
  const startDate = watch('startDate');
  const dueDate = watch('dueDate');
  const memberCount = watch('memberCount');
  const linkName = watch('linkName');
  const link = watch('link');
  // const image = watch('image');

  const handleSelectCollege = (e: OptionType) => {
    const college = e.value;
    setValue('college', college);
    setCollegeName(e);
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, content, postImageDtoList, startDate, memberCount, dueDate, college } = data;
    if (step !== STEPS.THREE) {
      return onNext();
    }
    try {
      setIsLoading(true);

      const res = await writeStudyPost({
        title,
        content,
        postImageDtoList,
        startDate,
        dueDate,
        memberCount,
        college
      });
      if (res) {
        console.log('제출된 데이터: ', data);
        toast.success('게시글 작성에 성공하였습니다.');
        router.refresh();
        // Initialize Form
        reset();
        setCollegeName(null);
        setStep(STEPS.ZERO);
        studyWriteModal.onClose();
      }
    } catch (e) {
      toast.error('게시글 작성에 실패하셨습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.THREE) {
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
      <Heading title={'스터디 · 프로젝트 참여를 위한\n글을 작성해보세요 !'} />
      <SelectBox
        id="college"
        placeholder="단과대 선택"
        value={collegeName}
        onChange={handleSelectCollege}
        options={COLLEGE_OPTIONS}
      />
      <Counter
        title="모집 인원 수"
        subtitle="몇명을 모집하고 싶으신가요?"
        value={memberCount}
        onChange={(value) => setValue('memberCount', value)}
      />
      <Input
        id="startDate"
        type="date"
        value={startDate}
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
        <Heading title="제목과 내용을 입력해주세요." />
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
          className="text-lg p-4 border-2 color-black dark:text-black"
          value={content}
          onChange={(event) => setValue('content', event.target.value)}
        />
      </div>
    );
  }

  if (step === STEPS.TWO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="관련 이미지를 첨부해주세요." />
        <input
          {...register('postImageDtoList')}
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
                    <Image
                      src={image}
                      alt="upload"
                      className="object-contain min-w-[150px] h-[150px]"
                      width={150}
                      height={150}
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

  if (step === STEPS.THREE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="연락 방법을 입력해주세요."
          subtitle="카카오톡 오픈채팅, 구글폼, 이메일 등"
        />
        <Input
          id="linkName"
          value={linkName}
          label="링크 이름"
          register={register}
          disabled={isLoading}
          errors={errors}
          required
        />
        <Input
          id="link"
          value={link}
          label="링크 URL"
          register={register}
          disabled={isLoading}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={studyWriteModal.isOpen}
      onClose={() => {
        studyWriteModal.onClose();
        reset();
        setCollegeName(null);
        setStep(STEPS.ZERO);
        setSelectedImages([]);
      }}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ZERO ? undefined : onBack}
      title="스터디 · 프로젝트 모집글"
      body={bodyContent}
    />
  );
};

export default StudyWriteModal;
