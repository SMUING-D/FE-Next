import * as z from 'zod';

export type ValidationSchema = {
  email: string;
  password: string;
};

const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/);

const schema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요' })
    .email({
      message: '이메일 형식에 맞게 입력해주세요'
    })
    .transform((v) => v.replace(/ /g, ' ')),
  password: z
    .string()
    .min(7, { message: '최소 7자리 이상으로 입력해주세요' })
    .regex(passwordRegex, '영어 소문자, 숫자, 특수문자를 포함해주세요')
    .transform((v) => v.replace(/ /g, ' '))
});

export default schema;
