import * as z from 'zod';

export type ValidationSchema = {
  name: string;
  nickname: string;
  prifileImg: string;
  school: string;
  grade: number;
  majorCollege: string;
  minorCollege: string;
  major: string;
  minor: string;
  job: string;
  experience: string;
  introduce: string;
};

const schema = z.object({
  name: z
    .string()
    .min(1, { message: '이름을 입력해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  nickname: z
    .string()
    .min(1, { message: '닉네임을 작성해주세요' })
    .transform((v) => v.replace(/ /g, ' ')),
  proflieImg: z.string(),
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
  introduce: z.string().transform((v) => v.replace(/ /g, ' '))
});

export default schema;
