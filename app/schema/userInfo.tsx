import * as z from 'zod';

export type ValidationSchema = {
  username: string;
  nickname: string;
  profileImg?: File | string;
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

// const MAX_FILE_SIZE = 1024 * 1024 * 5;
// const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
// const ACCEPTED_IMAGE_TYPES = ['jpeg', 'jpg', 'png', 'webp'];

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
  profileImg: z.union([
    z.object({
      // 오브젝트 형식일 경우
    }),
    z.string() // 문자열 형식일 경우
  ])
  // .object({
  // adImage: z
  //   .any()
  //   .refine((files) => {
  //     return files?.[0]?.size <= MAX_FILE_SIZE;
  //   }, 'Max image size is 5MB.')
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //     'Only .jpg, .jpeg, .png and .webp formats are supported.'
  //   )
  // })
});

export default schema;
