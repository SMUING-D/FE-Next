const TEST_POST_DATA = {
  id: 1,
  title: '취업에 대한 썰 푼다',
  content: '카카오는 이렇더라',
  college: '인문사회과학대학',
  viewCount: 200,
  createdAt: '2024-01-20 14:00:00',
  updatedAt: '2024-01-21 16:30:00',
  postLike: false,
  likeCount: 1,
  userDto: {
    userId: 5,
    userName: '취업 게시글 작성자',
    profile:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  Images: [
    {
      imageId: 1,
      link: 'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      imageId: 2,
      link: 'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      imageId: 3,
      link: 'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      imageId: 4,
      link: 'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  commentList: [
    {
      id: 5,
      content: '댓글 내용',
      createdAt: '2024-01-20 14:05:00',
      updatedAt: '2024-01-20 14:10:00',
      userDto: {
        userId: 4,
        userName: '댓글 작성자',
        profile:
          'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      commentReplyList: [
        {
          id: 12,
          content: '대댓글 내용',
          createdAt: '2024-01-20 14:15:00',
          updatedAt: '2024-01-20 14:20:00',
          userDto: {
            userId: 1,
            userName: '대댓글 작성자',
            profile:
              'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        },
        {
          id: 13,
          content: '다른 대댓글 내용',
          createdAt: '2024-01-20 14:25:00',
          updatedAt: '2024-01-20 14:30:00',
          userDto: {
            userId: 10,
            userName: '다른 대댓글 작성자',
            profile:
              'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        }
      ]
    }
  ]
};

const TEST_COLLEGE_DATA = {
  //college 명
  college: {
    studyList: [
      {
        id: 1,
        title: '스터디 제목',
        content: '스터디 내용',
        start_date: '시작일자',
        memberCount: 5,
        dueDate: '마감일자',
        college: '대학명',
        viewCount: 100,
        createdAt: '2024-01-20 10:00:00',
        updatedAt: '2024-01-21 12:30:00',
        postLike: false,
        userDto: {
          userId: 1,
          userName: '댓글 작성자',
          profile: '/profile/asdf.jpg'
        },

        commentList: [
          {
            id: 1,
            content: '댓글 내용',
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            userDto: {
              userId: 1,
              userName: '댓글 작성자',
              profile: '/profile/asdf.jpg'
            },
            commentReplyList: [
              {
                id: 9,
                content: '대댓글 내용',
                createdAt: '2024-01-20 10:15:00',
                updatedAt: '2024-01-20 10:20:00',
                userDto: {
                  userId: 2,
                  userName: '대댓글 작성자',
                  profile: '/profile/qwerty.jpg'
                }
              },
              {
                id: 10,
                content: '다른 대댓글 내용',
                createdAt: '2024-01-20 10:25:00',
                updatedAt: '2024-01-20 10:30:00',
                userDto: {
                  userId: 3,
                  userName: '다른 대댓글 작성자',
                  profile: '/profile/zxcv.jpg'
                }
              }
            ]
          },
          {
            id: 2,
            content: '다른 댓글 내용',
            createdAt: '2024-01-20 10:35:00',
            updatedAt: '2024-01-20 10:40:00',
            userDto: {
              userId: 2,
              userName: '다른 댓글 작성자',
              profile: '/profile/qwerty.jpg'
            }
          }
        ]
      },
      {
        id: 2,
        title: '다른 스터디 제목',
        content: '다른 스터디 내용',
        startDate: '다른 시작일자',
        memberCount: 8,
        dueDate: '다른 마감일자',
        college: '대학명',
        viewCount: 150,
        createdAt: '2024-01-20 11:00:00',
        updatedAt: '2024-01-21 13:45:00',
        postLike: true,
        userDto: {
          userId: 3,
          userName: '다른 게시글 작성자',
          profile: '/profile/qwerty.jpg'
        },
        commentList: [
          {
            id: 3,
            content: '댓글 내용',
            createdAt: '2024-01-20 11:05:00',
            updatedAt: '2024-01-20 11:10:00',
            userDto: {
              userId: 1,
              userName: '댓글 작성자',
              profile: '/profile/asdf.jpg'
            },
            commentReplyList: [
              {
                id: 11,
                content: '대댓글 내용',
                createdAt: '2024-01-20 11:15:00',
                updatedAt: '2024-01-20 11:20:00',
                userDto: {
                  userId: 2,
                  userName: '대댓글 작성자',
                  profile: '/profile/zxcv.jpg'
                }
              }
            ]
          },
          {
            id: 4,
            content: '다른 댓글 내용',
            createdAt: '2024-01-20 11:25:00',
            updatedAt: '2024-01-20 11:30:00',
            userDto: {
              userId: 3,
              userName: '다른 댓글 작성자',
              profile: '/profile/qwerty.jpg'
            }
          }
        ]
      }
    ],
    jobList: [
      {
        id: 1,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        college: '대학명',
        viewCount: 200,
        createdAt: '2024-01-20 14:00:00',
        updatedAt: '2024-01-21 16:30:00',
        postLike: false,
        userDto: {
          userId: 5,
          userName: '취업 게시글 작성자',
          profile: '/profile/qwerty.jpg'
        },
        commentList: [
          {
            id: 5,
            content: '댓글 내용',
            createdAt: '2024-01-20 14:05:00',
            updatedAt: '2024-01-20 14:10:00',
            userDto: {
              userId: 4,
              userName: '댓글 작성자',
              profile: '/profile/asdf.jpg'
            },
            commentReplyList: [
              {
                id: 12,
                content: '대댓글 내용',
                createdAt: '2024-01-20 14:15:00',
                updatedAt: '2024-01-20 14:20:00',
                userDto: {
                  userId: 1,
                  userName: '대댓글 작성자',
                  profile: '/profile/qwerty.jpg'
                }
              },
              {
                id: 13,
                content: '다른 대댓글 내용',
                createdAt: '2024-01-20 14:25:00',
                updatedAt: '2024-01-20 14:30:00',
                userDto: {
                  userId: 10,
                  userName: '다른 대댓글 작성자',
                  profile: '/profile/zxcv.jpg'
                }
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: '다른 취업 글 제목',
        content: '다른 취업 글 내용',
        college: '대학명',
        viewCount: 180,
        createdAt: '2024-01-20 15:00:00',
        updatedAt: '2024-01-21 17:45:00',
        postLike: true,
        userDto: {
          userId: 17,
          userName: '다른 댓글 작성자',
          profile: '/profile/qwerty.jpg'
        },
        commentList: [
          {
            id: 7,
            content: '댓글 내용',
            createdAt: '2024-01-20 15:05:00',
            updatedAt: '2024-01-20 15:10:00',
            userDto: {
              userId: 11,
              userName: '댓글 작성자',
              profile: '/profile/asdf.jpg'
            },
            commentReplyList: [
              {
                id: 14,
                content: '대댓글 내용',
                createdAt: '2024-01-20 15:15:00',
                updatedAt: '2024-01-20 15:20:00',
                userDto: {
                  userId: 15,
                  userName: '대댓글 작성자',
                  profile: '/profile/zxcv.jpg'
                }
              }
            ]
          },
          {
            id: 8,
            content: '다른 댓글 내용',
            createdAt: '2024-01-20 15:25:00',
            updatedAt: '2024-01-20 15:30:00',
            userDto: {
              userId: 17,
              userName: '다른 댓글 작성자',
              profile: '/profile/qwerty.jpg'
            }
          }
        ]
      }
    ]
  }
};

const TEST_USER_DATA = {
  userId: 2,
  role: 'USER',
  student_id: 202010677,
  nickname: 'djssyd',
  username: '접시',
  profileImg:
    'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: '202010677@sangmyung.kr',
  school: '상명대학교',
  major: '경영학과',
  minor: '글로벌경영학과',
  grade: 'FOUR',
  introduce:
    '지금과 같습니다. 현재와 다른 이벤트들이 넘쳤던 시기지만. 적용되는 진리는 하나이죠. 피터린치가 한 말중에... "사람들은 바뀌지 않고, 과거에도 같은 일이 있었고, 지금도 그렇고, 미래에도 그럴 것이다" 라는 말은 의미심장하게 다가옵니다. 한 문장 한 문장을 곱씹게 되어 스스로에게도 많이 도움이 되는 영상이었습니다. 많은 분들께 도움이 되시길 진심으로 바랍니다.',
  majorCollege: '경영경제대학',
  minorCollege: '경영경제대학',
  job: '개발자',
  experience: '1~3년'
};

export { TEST_POST_DATA, TEST_COLLEGE_DATA, TEST_USER_DATA };
