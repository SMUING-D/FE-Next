import { FormEventHandler } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type textInputProps = {
  id: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
};

const TextInput: React.FC<textInputProps> = ({
  id,
  value,
  placeholder = '',
  register,
  required = false
}) => {
  const textareaAutosize: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  return (
    <textarea
      rows={1}
      id={id}
      placeholder={placeholder}
      {...register(id, {
        required: required,
        onChange: textareaAutosize
      })}
      className="w-full p-3 outline-none border-2 border-neutral-300 rounded-md placeholder:text-zinc-400"
    >
      {value}
    </textarea>
  );
};

export default TextInput;
