import { API_PATH } from '@/app/constants/path';
import { faker } from '@faker-js/faker';
import { HttpResponse, PathParams, http } from 'msw';

import { TEST_COLLEGE_DATA } from '../data';

const SuccessData = {
  isSuccess: true,
  code: 200,
  message: '성공입니다'
};

export const PostHandlers = [
  // 전체 조회
  http.get<PathParams>(`${API_PATH.POSTS}/:college`, ({ request, params }) => {
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
              content: `${cursor + 1} 재밌는 역사 스터디에 오세요!! 풀필먼트서버팀에서는 ‘부릉 당일배송/새벽배송’, ‘부릉 TMS’, ‘부릉 풀필먼트’ 서비스에 필요한 서버 기능을 개발하고 있습니다. 조금 더 자세히 설명해 드리자면 여러 화주사로부터 요청받은 상품을 빠르고 효율적으로 배송하기 위한 배차 계획 수립, 수립한 배차 계획을 기사분들에게 전달하기 위한 요청 관리, 실시간 배송 현황에 대한 화주사 전달 등 당일배송/새벽배송 서비스 운영에 필요한 데이터를 생성, 관리, 전송하는 서버와 ‘VROONG TMS Engine’을 기반으로 클라우드 환경에서 물류 프로세스 통합 관제와 제어를 위한 다양한 정보를 생성 및 제공하는 서버를 담당하고 있습니다.`,
              startDate: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              viewCount: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              startDate: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              viewCount: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                        userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              startDate: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              viewCount: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              startDate: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              viewCount: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              startDate: '2024-01-20 10:00:00',
              memberCount: 5,
              dueDate: '2024-01-21 12:30:00',
              college: '인문사회과학대학',
              viewCount: 100,
              createdAt: '2024-01-20 10:00:00',
              updatedAt: '2024-01-21 12:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              viewCount: 200,
              createdAt: '2024-01-23 14:00:00',
              updatedAt: '2024-01-21 16:30:00',
              postLike: false, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                        userId: 1,
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
              viewCount: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              viewCount: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              viewCount: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
              viewCount: 180,
              createdAt: '2024-01-20 15:00:00',
              updatedAt: '2024-01-21 17:45:00',
              postLike: true, // 좋아요 여부,
              likeCount: 1,
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
                    userId: 1,
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
                        userId: 1,
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
                    userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '인문사회과학대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '사범대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '경영경제대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '융합공과대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  usrId: 1,
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
            viewCount: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            startDate: '2024-01-20 10:00:00',
            memberCount: 5,
            dueDate: '2024-01-21 12:30:00',
            college: '문화예술대학',
            viewCount: 100,
            createdAt: '2024-01-20 10:00:00',
            updatedAt: '2024-01-21 12:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 200,
            createdAt: '2024-01-23 14:00:00',
            updatedAt: '2024-01-21 16:30:00',
            postLike: false, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                      userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
            viewCount: 180,
            createdAt: '2024-01-20 15:00:00',
            updatedAt: '2024-01-21 17:45:00',
            postLike: true, // 좋아요 여부,
            likeCount: 1,
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
                  userId: 1,
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
                      userId: 1,
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
                  userId: 1,
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
  // 게시글 상세조회
  http.get<PathParams>(`${API_PATH.POSTS}/:postId`, ({ params, request }) => {
    const url = new URL(request.url);
    const postType = url.searchParams.get('postType') || '';
    const postId = params.postId;
    if (!postId) {
    } else if (postType === 'job') {
      return HttpResponse.json({
        id: postId,
        title: '취업에 대한 썰 푼다',
        content: '카카오는 이렇더라',
        college: '인문사회과학대학',
        viewCount: 200,
        createdAt: '2024-01-20 14:00:00',
        updatedAt: '2024-01-21 16:30:00',
        postLike: false,
        postLikeCount: 1,
        userDto: {
          userId: 2,
          userName: '취업 게시글 작성자',
          profile:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        postImageList: [
          {
            id: 1,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: 2,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: 3,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: 4,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
      });
    } else if (postType === 'study') {
      return HttpResponse.json({
        id: postId,
        title: '무역 스터디 모집합니다',
        content:
          '요즘 서비스 기업은 꽤 눈이 높아졌기 때문에 취업을 위해서는 다양한 경험과 기술력을 보유해야 취업을 할 수 있습니다.\n그런데, 취준생 분들께서는 어떤 것을 공부해야 하는지?를 모르기 때문에 굉장히 어려워 하시는 분들이 많으신데요. 이 부분에 대해 도움을 드리고, 공부하실 수 있는 여건을 만들어 드리려고 합니다.',
        startDate: '2024-01-20',
        memberCount: 5,
        dueDate: '2024-01-27',
        college: '단과대명',
        viewCount: 100,
        createdAt: '2024-01-20 10:00:00',
        updatedAt: '2024-01-21 12:30:00',
        isPostLike: false,
        postLikeCount: 10,
        userDto: {
          userId: 1,
          userName: '글쓴이 이름임',
          profile:
            'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        commentList: [
          {
            id: 1,
            content: '댓글 내용',
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '댓글 작성자',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: [
              {
                id: 9,
                content: '대댓글 내용',
                commentReplyLikeCount: 20,
                isCommentReplyLike: true,
                isReport: false,
                isBan: false,
                createdAt: '2024-01-20 10:15:00',
                updatedAt: '2024-01-20 10:20:00',
                userDto: {
                  userId: 2,
                  userName: '대댓글 작성자',
                  profile:
                    'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              },
              {
                id: 10,
                content: '다른 대댓글 내용',
                commentReplyLikeCount: 30,
                createdAt: '2024-01-20 10:25:00',
                updatedAt: '2024-01-20 10:30:00',
                isCommentReplyLike: true,
                isReport: false,
                isBan: false,
                userDto: {
                  userId: 3,
                  userName: '다른 대댓글 작성자',
                  profile:
                    'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              }
            ]
          },
          {
            id: 4,
            content: '댓글 내용',
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          }
        ],
        postImageList: [
          {
            id: 1,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: 2,
            postImagePath:
              'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      });
    }
  }),
  //단과대 게시글
  http.get(`${API_PATH.POSTS}/:college`, () => {
    return HttpResponse.json(TEST_COLLEGE_DATA);
  }),
  // 게시글 작성
  http.post(`${API_PATH.POSTS}`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 삭제
  http.delete(`${API_PATH.POSTS}/:postId`, ({ params }) => {
    const postId = params.postId;
    if (postId) {
      return HttpResponse.json(SuccessData);
    }
  }),
  // 게시글 수정
  http.patch(`${API_PATH.POSTS}/:postId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 게시글 댓글 작성
  http.post(`${API_PATH.POSTS}/:postId/comments`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글 불러오기
  http.get(`${API_PATH.POSTS}/comments/:postId`, ({ request, params }) => {
    const url = new URL(request.url);
    const postId = params.postId;
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;

    if (postId) {
      return HttpResponse.json({
        commentList: [
          {
            id: cursor + 1,
            content: `${cursor} 댓글 내용`,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 2,
              userName: '댓글 작성자',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: [
              {
                id: 1,
                content: '대댓글 내용',
                commentReplyLikeCount: 20,
                isCommentReplyLike: true,
                isReport: false,
                isBan: false,
                createdAt: '2024-01-20 10:15:00',
                updatedAt: '2024-01-20 10:20:00',
                userDto: {
                  userId: 2,
                  userName: '대댓글 작성자',
                  profile:
                    'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              },
              {
                id: 2,
                content: '다른 대댓글 내용',
                commentReplyLikeCount: 30,
                createdAt: '2024-01-20 10:25:00',
                updatedAt: '2024-01-20 10:30:00',
                isCommentReplyLike: true,
                isReport: false,
                isBan: false,
                userDto: {
                  userId: 3,
                  userName: '다른 대댓글 작성자',
                  profile:
                    'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              }
            ]
          },
          {
            id: cursor + 2,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          },
          {
            id: cursor + 3,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          },
          {
            id: cursor + 4,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          },
          {
            id: cursor + 5,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          },
          {
            id: cursor + 6,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          },
          {
            id: cursor + 7,
            content: `${cursor} 다른 댓글 내용 `,
            createdAt: '2024-01-20 10:05:00',
            updatedAt: '2024-01-20 10:10:00',
            isCommentLike: true,
            isReport: false,
            isBan: false,
            commentLikeCount: 10,
            userDto: {
              userId: 1,
              userName: '박선균',
              profile:
                'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            commentReplyList: []
          }
        ]
      });
    }
  }),
  // 댓글 신고
  http.post(`${API_PATH.POSTS}/comments/:commentId/reports`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글/대댓글 좋아요
  http.post(`${API_PATH.POSTS}/comments/:commentId/likes`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 댓글/대댓글 삭제
  http.delete(`${API_PATH.POSTS}/comments/:commentId`, () => {
    return HttpResponse.json(SuccessData);
  }),
  // 대댓글 불러오기
  // http.get(`${API_PATH.POSTS}/comments/comments/:postId/:commentId`, ({ request }) => {
  //   const url = new URL(request.url);
  //   const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;
  //   return HttpResponse.json({
  //     commentReplyList: [
  //       {
  //         id: cursor + 1,
  //         content: `${cursor} 대댓글 내용`,
  //         commentReplyLikeCount: 20,
  //         isCommentReplyLike: true,
  //         isReport: false,
  //         isBan: false,
  //         createdAt: '2024-01-20 10:15:00',
  //         updatedAt: '2024-01-20 10:20:00',
  //         userDto: {
  //           userId: 2,
  //           userName: '대댓글 작성자',
  //           profile:
  //             'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //         }
  //       },
  //       {
  //         id: cursor + 2,
  //         content: `${cursor} 다른 대댓글 내용`,
  //         commentReplyLikeCount: 30,
  //         createdAt: '2024-01-20 10:25:00',
  //         updatedAt: '2024-01-20 10:30:00',
  //         isCommentReplyLike: true,
  //         isReport: false,
  //         isBan: false,
  //         userDto: {
  //           userId: 3,
  //           userName: '다른 대댓글 작성자',
  //           profile:
  //             'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //         }
  //       }
  //     ]
  //   });
  // }),
  // 게시글 대댓글 작성
  http.post(`${API_PATH.POSTS}/comments/:commentId/comments`, ({ params }) => {
    const commentId = params.commentId;
    return commentId && HttpResponse.json(SuccessData);
  })
];
