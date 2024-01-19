import { API_PATH } from '@/app/constants/path';
import { HttpResponse, http } from 'msw';

export const StudyHandlers = [
  // 스터디 등록.
  http.post(`${API_PATH.STUDIES}/users/:userId`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: 200,
      message: '성공합니다.'
    });
  }),
  // 스터디 조회
  http.get(`${API_PATH.STUDIES}/:studyId`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: 200,
      message: '성공하였습니다',
      studyDto: {
        title: '스터디 모집',
        content: '스터디 모집입니다.',
        startDate: '2020-01-01',
        memberCount: 3,
        dueDate: '2020-03-03',
        college: '융합공과대학',
        studyImageDtoList: [
          {
            studyImageId: 1,
            studyImagePath: '/img/asdf.jpg'
          },
          {
            studyImageId: 2,
            studyImagePath: '/img/qwerty.jpg'
          }
        ],
        commentList: [
          // 댓글
          {
            id: 1,
            stars: 5,
            content: '저 참여하고 싶어요!',
            studyId: 1,
            createdAt: '2023-07-10 03:41:57',
            updatedAt: '2023-07-10 03:41:57',
            userDto: {
              user_name: 'ㅁㅁ',
              profile: '/profile/asdf.jpg'
            },
            commentReplyList: [
              // 대댓글
              {
                id: 2,
                likes: 5,
                content: '참여하려면 어떻게 해야할까요?',
                studyId: 1,
                createdAt: '2023-07-10 03:41:57',
                updatedAt: '2023-07-10 03:41:57',
                userDto: {
                  userName: 'ㅁㅁ',
                  profile: '/profile/asdf.jpg' // 예시
                }
              },
              {
                id: 3,
                likes: 5,
                content: '최고에요요',
                studyId: 1,
                createdAt: '2023-07-10 03:41:57',
                updatedAt: '2023-07-10 03:41:57',
                userDto: {
                  userName: 'ㅁㅁ',
                  profile: '/profile/asdf.jpg' // 예시
                }
              }
            ]
          }
        ],
        updateAt: '2020-02-02'
      }
    });
  }),
  // 스터디 전체 조회
  http.get(`${API_PATH.STUDIES}`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: 200,
      message: '성공하였습니다',
      studyListDto: [
        {
          studyDto: {
            studyId: 1,
            title: '스터디 모집',
            content: '스터디 모집입니다.',
            startDate: '2020-01-01',
            memberCount: 3,
            dueDate: '2020-03-03',
            college: '융합공과대학',
            studyImageDtoList: [
              {
                studyImageId: 1,
                studyImagePath: '/img/asdf.jpg'
              },
              {
                studyImageId: 2,
                studyImagePath: '/img/qwerty.jpg'
              }
            ],
            updateAt: '2020-02-02'
          }
        },
        {
          studyDto: {
            studyId: {
              studyId: 2,
              title: '스터디 모집',
              content: '스터디 모집입니다.',
              startDate: '2020-01-01',
              memberCount: 3,
              dueDate: '2020-03-03',
              college: '융합공과대학',
              studyImageDtoList: [
                {
                  studyImageId: 1,
                  studyImagePath: '/img/asdf.jpg'
                },
                {
                  studyImageId: 2,
                  studyImagePath: '/img/qwerty.jpg'
                }
              ],
              updateAt: '2020-02-02'
            }
          }
        }
      ]
    });
  }),
  // 스터디 삭제
  http.delete(`${API_PATH.STUDIES}/:studyId`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 수정
  http.patch(`${API_PATH.STUDIES}/:studyId`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 매칭
  http.post(`${API_PATH.STUDIES}/users`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 댓글 달기
  http.post(`${API_PATH.STUDIES}/:studyId/comments`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 댓글 삭제
  http.delete(`${API_PATH.STUDIES}/:studyId/comments/:commentId`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 댓글 수정
  http.patch(`${API_PATH.STUDIES}/:studyId/comments/:commentId`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 댓글 좋아요
  http.patch(`${API_PATH.STUDIES}/comments/:commentId/likes`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 댓글 신고
  http.patch(`${API_PATH.STUDIES}/comments/:commentId/reports`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 대댓글 달기
  http.post(`${API_PATH.STUDIES}/comments/:commentId/comments`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 대댓글 삭제
  http.delete(`${API_PATH.STUDIES}/comments/:commentId/comments`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 대댓글 수정
  http.patch(`${API_PATH.STUDIES}/comments/:commentId/comments`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 대댓글 좋아요
  http.patch(`${API_PATH.STUDIES}/comments/comments/:commentId/likes`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  }),
  // 스터디 대댓글 신고
  http.patch(`${API_PATH.STUDIES}/comments/comments/:commentId/reports`, () => {
    return HttpResponse.json({
      isSuccess: 'true',
      code: 200,
      message: '성공합니다'
    });
  })
];
