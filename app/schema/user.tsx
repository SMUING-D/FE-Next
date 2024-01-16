import * as z from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

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
    password: z
      .string()
      .min(7, { message: '최소 7자리 이상으로 입력해주세요' })
      .regex(passwordRegex, '영어 소문자, 숫자, 특수문자를 포함해주세요')
      .transform((v) => v.replace(/ /g, ' ')),
    confirmPassword: z.string().transform((v) => v.replace(/ /g, ' ')),
    name: z
      .string()
      .min(1, { message: '이름을 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    nickname: z
      .string()
      .min(1, { message: '닉네임을 작성해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    profileImg: z
      .any()
      .refine((file) => {
        return !file || !file[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(file[0]?.type);
      }, '.jpg .jpeg .png .webp 형식의 파일만 지원합니다.')
      .refine((file) => {
        return !file || !file[0] || file[0]?.size <= MAX_FILE_SIZE;
      }, '파일의 최대 크기는 5MB입니다.'),
    studentId: z
      .string()
      .min(1, { message: '학번을 작성해주세요' })
      .refine((value) => value.length === 9, {
        message: '학번은 정확히 9자리여야 합니다.'
      }),
    grade: z.coerce.string().min(1, { message: '학년을 입력해주세요' }),
    school: z
      .string()
      .min(1, { message: '학교를 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    major: z
      .string()
      .min(1, { message: '전공을 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    college: z
      .string()
      .min(1, { message: '단과대를 입력해주세요' })
      .transform((v) => v.replace(/ /g, ' ')),
    subMajor: z.string().transform((v) => v.replace(/ /g, ' ')),
    desiredEmployment: z.string().transform((v) => v.replace(/ /g, ' ')),
    skill: z.string().transform((v) => v.replace(/ /g, ' '))
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword']
  });

export default schema;
