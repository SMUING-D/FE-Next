'use client';

import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import FormError from '../form-error';

type FileInputProps = {
  id: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors;
  resetImage: boolean;
  onResetImage: () => void;
};

const FileInput: React.FC<FileInputProps> = ({
  id,
  disabled,
  register,
  onChange,
  required = false,
  errors,
  resetImage,
  onResetImage
}) => {
  const [isImageReset, setIsImageReset] = useState(false);

  if (resetImage !== isImageReset) {
    setIsImageReset(resetImage);
  }

  return (
    <label className="flex flex-col w-full">
      <span className="sr-only">Choose profile photo</span>
      <input
        type="file"
        className="block text-sm text-white file:cursor-pointer
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-neutral-300 file:text-white
      file:disabled:opacity-50 file:disabled:pointer-events-none
      hover:file:bg-neutral-500
    "
        id={id}
        {...register(id, { required })}
        disabled={disabled}
        onChange={onChange}
        key={resetImage ? 'reset' : 'not-reset'}
      />
      <p
        className="text-xs text-gray-400 mt-1 cursor-pointer hover:text-slate-800"
        onClick={() => {
          onResetImage();
          setIsImageReset(true);
        }}
      >
        이미지 초기화
      </p>
      {errors.profileImg && <FormError message={errors.profileImg?.message?.toString()} />}
    </label>
  );
};

export default FileInput;
