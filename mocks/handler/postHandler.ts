import { API_PATH } from '@/app/constants/path';
import { JOB_POSTS, JOB_POST_DETAIL } from '@/app/constants/postData';
import { HttpResponse, http } from 'msw';

// const User = [
//   {
//     email: 'dara@naver.com',
//     nickname: 'Dara',
//     image:
//       'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     token: '12312312312'
//   },
//   {
//     email: faker.internet.email,
//     nickname: 'dydals3440',
//     image: faker.image.avatarGitHub,
//     token: faker.internet.password
//   }
// ];

const SuccessData = {
  isSuccess: true,
  code: 200,
  message: '성공입니다'
};

export const PostHandlers = [
  // 전체 조회
  http.get(`${API_PATH.POSTS}`, ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    // const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    // const search = url.searchParams.get('search');

    if (category === '전체') {
      return HttpResponse.json();
    }
    if (category === '인문사회과학대학') {
    }
    if (category === '경영경제대학') {
    }
    if (category === '융합공과대학') {
    }
    if (category === '문화예술대학') {
    }
  }),
  // 게시글 전체조회
  http.post(`${API_PATH.JOBS}`, () => {
    return HttpResponse.json(JOB_POSTS);
  }),
  // 게시글 상세조회
  http.get(`${API_PATH.JOBS}/:jobId`, () => {
    return HttpResponse.json(JOB_POST_DETAIL);
  }),
  // 게시글 작성
  http.post(`${API_PATH.JOBS}`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 삭제
  http.delete(`${API_PATH.JOBS}/:jobId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 수정
  http.patch(`${API_PATH.JOBS}/:jobId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 댓글 작성
  http.post(`${API_PATH.JOBS}/:postId/comments`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 신고
  http.post(`${API_PATH.JOBS}/comments/:commentId/reports`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 좋아요
  http.post(`${API_PATH.JOBS}/comments/:commentId/likes`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 삭제
  http.delete(`${API_PATH.JOBS}/comments/:commentId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 작성
  http.post(`${API_PATH.JOBS}/comments/:reComments/comments`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 좋아요
  http.post(`${API_PATH.JOBS}/comments/comments/:commentId/likes`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 신고
  http.post(`${API_PATH.JOBS}/comments/comments/:commentId/reports`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 삭제
  http.delete(`${API_PATH.JOBS}/comments/comments/:commentId`, () => {
    return HttpResponse.json(SuccessData);
  })
];
