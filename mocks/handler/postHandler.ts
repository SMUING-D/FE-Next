import { API_PATH } from '@/app/constants/path';
import { JOB_POSTS, JOB_POST_DETAIL } from '@/app/constants/postData';
import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

const SuccessData = {
  isSuccess: true,
  code: 200,
  message: '성공입니다'
};

export const PostHandlers = [
  // 전체 조회
  http.get(`${API_PATH.POSTS}/:college`, ({ request, params }) => {
    const url = new URL(request.url);
    const college = params.college;
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
    const listType = (url.searchParams.get('listType') as string) || '';

    if (college === 'chss') {
      if (listType === 'study') {
        return HttpResponse.json({
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
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
              id: cursor + 3,
              title: `${cursor + 3}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
              id: cursor + 4,
              title: `${cursor + 4}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
              id: cursor + 5,
              title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
              content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
              start_date: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              view_count: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
            }
          ]
        });
      }

      if (listType === 'info') {
        return HttpResponse.json({
          jobList: [
            {
              id: cursor + 1,
              title: `${cursor + 1} 취업 정보 게시글`,
              content: `${cursor + 1} 취업하기 실타`,
              college: '인문사회과학대학',
              view_count: 200,
              createdAt: '2024-01-23 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
              postLike: true, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
            },
            {
              id: cursor + 3,
              title: `${cursor + 3} 취업 정보`,
              content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
              college: '인문사회과학대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
            },
            {
              id: cursor + 4,
              title: `${cursor + 4} 취업 정보`,
              content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
              college: '인문사회과학대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
            },
            {
              id: cursor + 5,
              title: `${cursor + 5} 취업 정보`,
              content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
              college: '인문사회과학대학',
              view_count: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              Images: [
                {
                  imageId: 1,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 2,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 3,
                  link: faker.image.urlLoremFlickr()
                },
                {
                  imageId: 4,
                  link: faker.image.urlLoremFlickr()
                }
              ],
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
        });
      }
    }
    if (college === 'coe') {
      return HttpResponse.json({
        studyList: [
          {
            id: cursor + 1,
            title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 3,
            title: `${cursor + 3}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 4,
            title: `${cursor + 4}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '인문사회과학대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 5,
            title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          }
        ],
        jobList: [
          {
            id: cursor + 1,
            title: `${cursor + 1} 취업 정보 게시글`,
            content: `${cursor + 1} 취업하기 실타`,
            college: '사범대학',
            view_count: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            college: '사범대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 3,
            title: `${cursor + 3} 취업 정보`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            college: '사범대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 4,
            title: `${cursor + 4} 취업 정보`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            college: '사범대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 5,
            title: `${cursor + 5} 취업 정보`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            college: '사범대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
      });
    }
    if (college === 'cobe') {
      return HttpResponse.json({
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
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 3,
            title: `${cursor + 3}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 4,
            title: `${cursor + 4}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 5,
            title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          }
        ],
        jobList: [
          {
            id: cursor + 1,
            title: `${cursor + 1} 취업 정보 게시글`,
            content: `${cursor + 1} 취업하기 실타`,
            college: '경영경제대학',
            view_count: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 3,
            title: `${cursor + 3} 취업 정보`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            college: '경영경제대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 4,
            title: `${cursor + 4} 취업 정보`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            college: '경영경제대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 5,
            title: `${cursor + 5} 취업 정보`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            college: '경영경제대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
      });
    }
    if (college === 'coce') {
      return HttpResponse.json({
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
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 3,
            title: `${cursor + 3}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 4,
            title: `${cursor + 4}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 5,
            title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          }
        ],
        jobList: [
          {
            id: cursor + 1,
            title: `${cursor + 1} 취업 정보 게시글`,
            content: `${cursor + 1} 취업하기 실타`,
            college: '융합공과대학',
            view_count: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 3,
            title: `${cursor + 3} 취업 정보`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            college: '융합공과대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 4,
            title: `${cursor + 4} 취업 정보`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            college: '융합공과대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 5,
            title: `${cursor + 5} 취업 정보`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            college: '융합공과대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
      });
    }
    if (college === 'coca') {
      return HttpResponse.json({
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
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 3,
            title: `${cursor + 3}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 4,
            title: `${cursor + 4}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            id: cursor + 5,
            title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            start_date: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            view_count: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          }
        ],
        jobList: [
          {
            id: cursor + 1,
            title: `${cursor + 1} 취업 정보 게시글`,
            content: `${cursor + 1} 취업하기 실타`,
            college: '문화예술대학',
            view_count: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 3,
            title: `${cursor + 3} 취업 정보`,
            content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
            college: '문화예술대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 4,
            title: `${cursor + 4} 취업 정보`,
            content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
            college: '문화예술대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
          },
          {
            id: cursor + 5,
            title: `${cursor + 5} 취업 정보`,
            content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
            college: '문화예술대학',
            view_count: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            Images: [
              {
                imageId: 1,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 2,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 3,
                link: faker.image.urlLoremFlickr()
              },
              {
                imageId: 4,
                link: faker.image.urlLoremFlickr()
              }
            ],
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
      });
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
