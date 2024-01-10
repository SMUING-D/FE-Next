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
    <div className="w-full">
      <div className="font-[sans-serif]">
        <input
          id={id}
          {...register(id, { required })}
          type="file"
          disabled={disabled}
          onChange={onChange}
          key={resetImage ? 'reset' : 'not-reset'}
          className={`
          w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded
        ${errors[id] ? 'border-red-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-red-500' : 'focus:border-black'}
       `}
        />
        <div className="flex flex-row mt-1">
          {errors.profileImg && <FormError message={errors.profileImg?.message?.toString()} />}
          <p
            className="text-xs text-gray-400 mt-2 ml-auto cursor-pointer hover:text-slate-800"
            onClick={() => {
              onResetImage();
              setIsImageReset(true);
            }}
          >
            이미지 초기화
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
