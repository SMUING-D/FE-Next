import * as z from 'zod';

export type ValidationSchema = {
  userPassword: string;
  password: string;
  confirmPassword: string;
};

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/);

const schema = z
  .object({
    userPassword: z
      .string()
      .min(7, { message: '최소 7자리 이상으로 입력해주세요' })
      .regex(passwordRegex, '영어 소문자, 숫자, 특수문자를 포함해주세요')
      .transform((v) => v.replace(/ /g, ' ')),
    password: z
      .string()
      .min(7, { message: '최소 7자리 이상으로 입력해주세요' })
      .regex(passwordRegex, '영어 소문자, 숫자, 특수문자를 포함해주세요')
      .transform((v) => v.replace(/ /g, ' ')),
    confirmPassword: z.string().transform((v) => v.replace(/ /g, ' '))
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword']
  })
  .refine((data) => data.userPassword !== data.password, {
    message: '현재 비밀번호와 다르게 설졍해주세요!',
    path: ['password']
  });

export default schema;
