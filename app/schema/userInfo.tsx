import * as z from 'zod';

export type ValidationSchema = {
  username: string;
  nickname: string;
  profileImg?: File;
  school: string;
  grade: number;
  majorColleg?: string;
  minorCollege?: string;
  major: string;
  minor?: string;
  job?: string;
  experience?: string;
  introduce?: string;
};

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const schema = z.object({
  username: z
    .string()
    .min(1, { message: '이름을 입력해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  nickname: z
    .string()
    .min(1, { message: '닉네임을 작성해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  school: z
    .string()
    .min(1, { message: '학교를 입력해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  grade: z.coerce.string().min(1, { message: '학년을 입력해주세요' }),
  major: z
    .string()
    .min(1, { message: '본전공을 입력해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  majorCollege: z
    .string()
    .min(1, { message: '단과대를 입력해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  minor: z.string().transform((v) => v.replace(/ /g, ' ')),
  minorCollege: z.string().transform((v) => v.replace(/ /g, ' ')),
  job: z.string().transform((v) => v.replace(/ /g, ' ')),
  experience: z.string().transform((v) => v.replace(/ /g, ' ')),
  introduce: z.string().transform((v) => v.replace(/ /g, ' ')),
  profileImg: z
    .any()
    .refine((file) => {
      return !file[0] || file[0]?.size <= MAX_FILE_SIZE;
    }, '파일의 최대 크기는 5MB입니다.')
    .refine(
      (file) => !file[0] || ACCEPTED_IMAGE_MIME_TYPES.includes(file[0]?.type),
      '.jpg .jpeg .png .webp 형식의 파일만 지원합니다.'
    )
});

export default schema;
