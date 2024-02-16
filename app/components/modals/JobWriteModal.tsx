'use client';

import useJobWriteModal from '@/app/hooks/useJobWriteModal';
import writeJobPost from '@/app/lib/post/writeJobPost';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Input from '../inputs/Input';
import SelectBox, { OptionType } from '../select/SelectBox';
import { COLLEGE_OPTIONS } from '../select/options/registerOptions';
import Modal from './Modal';

enum STEPS {
  ZERO = 0,
  ONE = 1
}

const JobWriteModal = () => {
  const router = useRouter();
  const jobWriteModal = useJobWriteModal();
  const [step, setStep] = useState(STEPS.ZERO);
  const [collegeName, setCollegeName] = useState<OptionType>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

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
      type: 'job',
      college: ''
    }
  });

  const { title, content, college } = watch();

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

  const handleSelectCollege = (e: OptionType) => {
    const college = e.value;
    setValue('college', college);
    setCollegeName(e);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, content, postImageDtoList, type, college } = data;
    if (step !== STEPS.ONE) {
      return onNext();
    }
    try {
      setIsLoading(true);
      const res = await writeJobPost({ title, content, postImageDtoList, type, college });
      if (res) {
        console.log('제출된 데이터: ', data);
        toast.success('게시글 작성에 성공하였습니다.');
        router.refresh();
        reset();
        setCollegeName(null);
        setStep(STEPS.ZERO);
        jobWriteModal.onClose();
      }
    } catch (e) {
      toast.error('에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    if (!college) {
      toast('단과대를 선택해주세요!');
    } else {
      setStep((value) => value + 1);
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
      <Heading title={'취업 정보 공유를 위한\n글을 작성해보세요 !'} />
      <SelectBox
        id="college"
        placeholder="단과대 선택"
        value={collegeName}
        onChange={handleSelectCollege}
        options={COLLEGE_OPTIONS}
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
        className="text-lg p-4 border-2 color-black dark:text-black"
        value={content}
        onChange={(event) => setValue('content', event.target.value)}
      />
    </div>
  );

  if (step === STEPS.ONE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="관련 이미지를 업로드하세요." />
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

  return (
    <Modal
      isOpen={jobWriteModal.isOpen}
      onClose={() => {
        jobWriteModal.onClose();
        reset();
        setCollegeName(null);
        setStep(STEPS.ZERO);
        setSelectedImages([]);
      }}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ZERO ? undefined : onBack}
      title="취업 정보 공유글 작성"
      body={bodyContent}
    />
  );
};

export default JobWriteModal;
