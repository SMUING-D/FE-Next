import * as z from 'zod';

export type ValidationSchema = {
  name: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
  school: string;
  major: string;
  grade: number;
  job: string;
  skill: string;
};

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/);

const schema = z
  .object({
    name: z
      .string()
      .min(1, { message: '이름을 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({
        message: '이메일 형식에 맞게 입력해주세요'
      })
      .transform((v) => v.replace(/ /g, ' ')),
    nickname: z
      .string()
      .min(1, { message: '닉네임을 작성해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    password: z
      .string()
      .min(7, { message: '최소 7자리 이상으로 입력해주세요' })
      .regex(passwordRegex, '영어 소문자, 숫자, 특수문자를 포함해주세요')
      .transform((v) => v.replace(/ /g, ' ')),
    confirmPassword: z.string().transform((v) => v.replace(/ /g, ' ')),
    school: z
      .string()
      .min(1, { message: '학교를 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    major: z
      .string()
      .min(1, { message: '전공을 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    grade: z.coerce.string().min(1, { message: '학년을 입력해주세요' }),
    job: z
      .string()
      .min(1, { message: '희망 취업 분야를 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    skill: z
      .string()
      .min(1, { message: '자격증 및 기술 스택을 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' '))
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword']
  });

export default schema;
