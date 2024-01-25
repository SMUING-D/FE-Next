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
  http.get(`${API_PATH.POSTS}/:college`, ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    // const search = url.searchParams.get('search');

    if (category === '전체') {
      return HttpResponse.json({
        isSuccess: true,
        code: 200,
        message: '성공하였습니다',
        college: {
          studyList: [
            {
              id: cursor + 1,
              title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 10:05:00',
                  updatedAt: '2024-01-20 10:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 10:15:00',
                      updatedAt: '2024-01-20 10:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 10:25:00',
                      updatedAt: '2024-01-20 10:30:00',
                      userDto: {
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
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 11:00:00',
              memberCount: 8,
              dueDate: '2024-01-20 11:00:00',
              college: '인문사회과학대학',
              view_count: 150,
              createdAt: '2024-01-20 11:00:00',
              updatedAt: '2024-01-21 13:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 11:05:00',
                  updatedAt: '2024-01-20 11:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 11:15:00',
                      updatedAt: '2024-01-20 11:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 11:25:00',
                  updatedAt: '2024-01-20 11:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ],
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '경영경제대학',
              view_count: 200,
              createdAt: '2024-01-20 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 14:05:00',
                  updatedAt: '2024-01-20 14:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 14:15:00',
                      updatedAt: '2024-01-20 14:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 14:25:00',
                      updatedAt: '2024-01-20 14:30:00',
                      userDto: {
                        userName: '다른 대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2} 취업 정보`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              college: '융합공과대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 15:05:00',
                  updatedAt: '2024-01-20 15:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 15:15:00',
                      updatedAt: '2024-01-20 15:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 15:25:00',
                  updatedAt: '2024-01-20 15:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ]
        }
      });
    }
    if (category === '인문사회과학대학') {
      return HttpResponse.json({
        isSuccess: true,
        code: 200,
        message: '성공하였습니다',
        college: {
          studyList: [
            {
              id: cursor + 1,
              title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 10:05:00',
                  updatedAt: '2024-01-20 10:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 10:15:00',
                      updatedAt: '2024-01-20 10:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 10:25:00',
                      updatedAt: '2024-01-20 10:30:00',
                      userDto: {
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
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 11:00:00',
              memberCount: 8,
              dueDate: '2024-01-20 11:00:00',
              college: '인문사회과학대학',
              view_count: 150,
              createdAt: '2024-01-20 11:00:00',
              updatedAt: '2024-01-21 13:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 11:05:00',
                  updatedAt: '2024-01-20 11:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 11:15:00',
                      updatedAt: '2024-01-20 11:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 11:25:00',
                  updatedAt: '2024-01-20 11:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ],
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '인문사회과학대학',
              view_count: 200,
              createdAt: '2024-01-20 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 14:05:00',
                  updatedAt: '2024-01-20 14:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 14:15:00',
                      updatedAt: '2024-01-20 14:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 14:25:00',
                      updatedAt: '2024-01-20 14:30:00',
                      userDto: {
                        userName: '다른 대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2} 취업 정보`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              college: '인문사회과학대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 15:05:00',
                  updatedAt: '2024-01-20 15:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 15:15:00',
                      updatedAt: '2024-01-20 15:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 15:25:00',
                  updatedAt: '2024-01-20 15:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ]
        }
      });
    }
    if (category === '경영경제대학') {
      return HttpResponse.json({
        isSuccess: true,
        code: 200,
        message: '성공하였습니다',
        college: {
          studyList: [
            {
              id: cursor + 1,
              title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '경영경제대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 10:05:00',
                  updatedAt: '2024-01-20 10:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 10:15:00',
                      updatedAt: '2024-01-20 10:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 10:25:00',
                      updatedAt: '2024-01-20 10:30:00',
                      userDto: {
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
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 11:00:00',
              memberCount: 8,
              dueDate: '2024-01-20 11:00:00',
              college: '경영경제대학',
              view_count: 150,
              createdAt: '2024-01-20 11:00:00',
              updatedAt: '2024-01-21 13:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 11:05:00',
                  updatedAt: '2024-01-20 11:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 11:15:00',
                      updatedAt: '2024-01-20 11:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 11:25:00',
                  updatedAt: '2024-01-20 11:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ],
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '경영경제대학',
              view_count: 200,
              createdAt: '2024-01-20 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 14:05:00',
                  updatedAt: '2024-01-20 14:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 14:15:00',
                      updatedAt: '2024-01-20 14:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 14:25:00',
                      updatedAt: '2024-01-20 14:30:00',
                      userDto: {
                        userName: '다른 대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2} 취업 정보`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              college: '경영경제대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 15:05:00',
                  updatedAt: '2024-01-20 15:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 15:15:00',
                      updatedAt: '2024-01-20 15:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 15:25:00',
                  updatedAt: '2024-01-20 15:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ]
        }
      });
    }
    if (category === '융합공과대학') {
      return HttpResponse.json({
        isSuccess: true,
        code: 200,
        message: '성공하였습니다',
        college: {
          studyList: [
            {
              id: cursor + 1,
              title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '융합공과대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 10:05:00',
                  updatedAt: '2024-01-20 10:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 10:15:00',
                      updatedAt: '2024-01-20 10:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 10:25:00',
                      updatedAt: '2024-01-20 10:30:00',
                      userDto: {
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
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 11:00:00',
              memberCount: 8,
              dueDate: '2024-01-20 11:00:00',
              college: '융합공과대학',
              view_count: 150,
              createdAt: '2024-01-20 11:00:00',
              updatedAt: '2024-01-21 13:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 11:05:00',
                  updatedAt: '2024-01-20 11:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 11:15:00',
                      updatedAt: '2024-01-20 11:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 11:25:00',
                  updatedAt: '2024-01-20 11:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ],
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '융합공과대학',
              view_count: 200,
              createdAt: '2024-01-20 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 14:05:00',
                  updatedAt: '2024-01-20 14:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 14:15:00',
                      updatedAt: '2024-01-20 14:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 14:25:00',
                      updatedAt: '2024-01-20 14:30:00',
                      userDto: {
                        userName: '다른 대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2} 취업 정보`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              college: '융합공과대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 15:05:00',
                  updatedAt: '2024-01-20 15:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 15:15:00',
                      updatedAt: '2024-01-20 15:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 15:25:00',
                  updatedAt: '2024-01-20 15:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ]
        }
      });
    }
    if (category === '문화예술대학') {
      return HttpResponse.json({
        isSuccess: true,
        code: 200,
        message: '성공하였습니다',
        college: {
          studyList: [
            {
              id: cursor + 1,
              title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '문화예술대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 10:05:00',
                  updatedAt: '2024-01-20 10:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 10:15:00',
                      updatedAt: '2024-01-20 10:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 10:25:00',
                      updatedAt: '2024-01-20 10:30:00',
                      userDto: {
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
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 11:00:00',
              memberCount: 8,
              dueDate: '2024-01-20 11:00:00',
              college: '문화예술대학',
              view_count: 150,
              createdAt: '2024-01-20 11:00:00',
              updatedAt: '2024-01-21 13:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 11:05:00',
                  updatedAt: '2024-01-20 11:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 11:15:00',
                      updatedAt: '2024-01-20 11:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 11:25:00',
                  updatedAt: '2024-01-20 11:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ],
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '문화예술대학',
              view_count: 200,
              createdAt: '2024-01-20 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 14:05:00',
                  updatedAt: '2024-01-20 14:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 14:15:00',
                      updatedAt: '2024-01-20 14:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/qwerty.jpg'
                      }
                    },
                    {
                      id: 2,
                      content: '다른 대댓글 내용',
                      createdAt: '2024-01-20 14:25:00',
                      updatedAt: '2024-01-20 14:30:00',
                      userDto: {
                        userName: '다른 대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: cursor + 2,
              title: `${cursor + 2} 취업 정보`,
              content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
              college: '문화예술대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부
              commentList: [
                {
                  id: 1,
                  content: '댓글 내용',
                  createdAt: '2024-01-20 15:05:00',
                  updatedAt: '2024-01-20 15:10:00',
                  userDto: {
                    userName: '댓글 작성자',
                    profile: '/profile/asdf.jpg'
                  },
                  commentReplyList: [
                    {
                      id: 1,
                      content: '대댓글 내용',
                      createdAt: '2024-01-20 15:15:00',
                      updatedAt: '2024-01-20 15:20:00',
                      userDto: {
                        userName: '대댓글 작성자',
                        profile: '/profile/zxcv.jpg'
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  content: '다른 댓글 내용',
                  createdAt: '2024-01-20 15:25:00',
                  updatedAt: '2024-01-20 15:30:00',
                  userDto: {
                    userName: '다른 댓글 작성자',
                    profile: '/profile/qwerty.jpg'
                  }
                }
              ]
            }
          ]
        }
      });
    }
  }),
  // 게시글 전체조회
  http.post(`${API_PATH.POSTS}`, () => {
    return HttpResponse.json(JOB_POSTS);
  }),
  // 게시글 상세조회
  http.get(`${API_PATH.POSTS}/:jobId`, () => {
    return HttpResponse.json(JOB_POST_DETAIL);
  }),
  // 게시글 작성
  http.post(`${API_PATH.POSTS}`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 삭제
  http.delete(`${API_PATH.POSTS}/:jobId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 수정
  http.patch(`${API_PATH.POSTS}/:jobId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 댓글 작성
  http.post(`${API_PATH.POSTS}/:postId/comments`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 신고
  http.post(`${API_PATH.POSTS}/comments/:commentId/reports`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 좋아요
  http.post(`${API_PATH.POSTS}/comments/:commentId/likes`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 삭제
  http.delete(`${API_PATH.POSTS}/comments/:commentId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 작성
  http.post(`${API_PATH.POSTS}/comments/:reComments/comments`, ({ request }) => {
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');
    return postId && HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 좋아요
  http.post(`${API_PATH.POSTS}/comments/comments/:commentId/likes`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 신고
  http.post(`${API_PATH.POSTS}/comments/comments/:commentId/reports`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 대댓글 삭제
  http.delete(`${API_PATH.POSTS}/comments/comments/:commentId`, () => {
    return HttpResponse.json(SuccessData);
  })
];
