'use client';

import useStudyEditModal from '@/app/hooks/useStudyEditModal';
import writeStudyPost from '@/app/lib/post/writeStudyPost';
import { POST_DTO } from '@/app/types';
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
  ONE = 1
}

const StudyEditModal = ({ postData }: { postData: POST_DTO }) => {
  const router = useRouter();
  const studyEditModal = useStudyEditModal();
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
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
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
      college: ''
    }
  });

  const title = watch('title');
  const content = watch('content');
  const startDate = watch('startDate');
  const dueDate = watch('dueDate');
  const memberCount = watch('memberCount');

  useEffect(() => {
    setValue('title', postData?.title);
    setValue('content', postData?.content);
    setValue('postImageDtoList', postData?.postImageList);
    setValue('startDate', postData?.startDate);
    setValue('dueDate', postData?.dueDate);
    setValue('college', postData?.college);
    setCollegeName({ value: postData?.college, label: postData?.college });
    setSelectedImages(postData?.postImageList);
  }, [setValue, postData]);

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
    if (step !== STEPS.ONE) {
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
        reset();
        setCollegeName(null);
        setStep(STEPS.ZERO);
        studyEditModal.onClose();
      }
    } catch (e) {
      toast.error('게시글 작성에 실패하셨습니다.');
    } finally {
      setIsLoading(false);
    }
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
                      src={typeof image.postImagePath === 'string' ? image.postImagePath : image}
                      alt="upload"
                      className="object-contain min-w-[150px] h-[150px]"
                      width={150}
                      height={150}
                    />
                    <button
                      className="bg-red-500 p-3 mt-3 rounded-lg w-[70px] h-[50px] text-white font-bold text-lg"
                      onClick={() => {
                        const updatedImages = selectedImages.filter((prevImage) =>
                          typeof image.postImagePath === 'string'
                            ? prevImage.id !== image.id
                            : prevImage !== image
                        );
                        setSelectedImages(updatedImages);
                        setValue('postImageDtoList', updatedImages);
                      }}
                    >
                      삭제
                    </button>
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
      isOpen={studyEditModal.isOpen}
      onClose={() => {
        studyEditModal.onClose();
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

export default StudyEditModal;