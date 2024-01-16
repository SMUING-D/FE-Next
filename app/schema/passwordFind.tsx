import * as z from 'zod';

export type ValidationSchema = {
  userPassword: string;
  password: string;
  confirmPassword: string;
};

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/);

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({
        message: '이메일 형식에 맞게 입력해주세요'
      })
      .transform((v) => v.replace(/ /g, ' ')),
    authNum: z
      .string()
      .min(1, { message: '인증번호를 입력해주세요' })
      .max(6, { message: '6자리 인증번호를 입력하세요' })
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
  });

export default schema;
