import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

import { nomalUser, postData } from '../data';

const User = [
  {
    email: 'dara@naver.com',
    nickname: 'Dara',
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    token: '12312312312'
  },
  {
    email: faker.internet.email,
    nickname: 'dydals3440',
    image: faker.image.avatarGitHub,
    token: faker.internet.password
  }
];

export const handlers = [
  http.post('/api/login', () => {
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  }),
  http.get('/api/resource', () => {
    // And respond with a "text/plain" response
    // with a "Hello world!" text response body.
    return HttpResponse.json('차다인');
  }),
  http.post('/api/register', () => {
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  }),
  http.get('/api/posts', async ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category') || '전체';
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;

    if (category === '전체') {
      // Handle 전체 category
      return HttpResponse.json([
        {
          postId: cursor + 1,
          User: User[1],
          title: `${cursor + 1}역사 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 1} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        },
        {
          postId: cursor + 2,
          User: User[1],
          title: `${cursor + 2}수학 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 2} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        },
        {
          postId: cursor + 3,
          User: User[1],
          title: `${cursor + 3}코테 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 3} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        },
        {
          postId: cursor + 4,
          User: User[1],
          title: `${cursor + 4}리액트 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 4} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        },
        {
          postId: cursor + 5,
          User: User[1],
          title: `${cursor + 5}Type Script 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }

    // For other categories, add specific logic
    if (category === '인문사회과학대학') {
      // Handle 인문사회과학대학 category
      return HttpResponse.json([
        {
          postId: cursor + 5,
          User: User[1],
          title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }

    if (category === '사범대학') {
      // Handle 사범대학 category
      return HttpResponse.json([
        {
          postId: cursor + 5,
          User: User[1],
          title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }

    if (category === '경영경제대학') {
      // Handle 경영경제대학 category
      return HttpResponse.json([
        {
          postId: cursor + 5,
          User: User[1],
          title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }

    if (category === '융합공과대학') {
      // Handle 융합공과대학 category
      return HttpResponse.json([
        {
          postId: cursor + 5,
          User: User[1],
          title: `${cursor + 5}역사 스터디 인원 모집 현재 3/5`,
          type: 'recruit',
          category: '인문사회과학대학',
          createdAt: new Date(),
          content: `${cursor + 5} 재밌는 역사 스터디에 오세요!!`,
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }

    if (category === '문화예술대학') {
      // Handle 문화예술대학 category
      return HttpResponse.json([
        {
          postId: 5,
          User: User[1],
          title: '미술 스터디 인원 모집 현재 3/5',
          type: 'recruit',
          category: '문화예술대학',
          createdAt: new Date(),
          content: '재밌는 미술 스터디에 오세요',
          memberCount: 4,
          dueDate: new Date(),
          place: '상명대학교 L507 학술정보관',
          isOnline: '오프라인 | 온라인',
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
          Comments: [
            {
              commentId: 1,
              User: User[2],
              content: '재밌당',
              createdAt: new Date(),
              likes: 10,
              reports: 1
            }
          ]
        }
      ]);
    }
  }),
  http.get('/api/preview/posts', () => {
    return HttpResponse.json(postData);
  }),
  http.get('/api/detail/posts', ({ request }) => {
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');
    const selectedPost = postId && postData.find((post) => post.postId === parseInt(postId));
    if (selectedPost) {
      return HttpResponse.json(selectedPost);
    }
  }),
  http.get('/api/recruitments/:postId', () => {
    return HttpResponse.json({
      id: 1,
      title: '역사 스터디 인원 모집 현재 3/5',
      category: '인문사회과학대학',
      createdAt: new Date(),
      description:
        '안녕하세요! 인문사회과학대학 XX학부 XX학년에 재학중인 XXX입니다. 이번에 000 쪽으로 취업을 준비하며, 혼자 공부하는데 동기부여가 많이 부족한 것 같아 다같이 해보면 좋을듯 하여 팀원을 모집하게 되었습니다. 이런 좋은 서비스가 있다는 것을 처음알았네요!! 참여 인원 구합니다!! 많이 신청해주세요!!',
      memberCount: 4,
      imageSrc:
        'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    });
  }),
  http.get('/api/user/info/:userId', ({ params }) => {
    const userId = params.userId;
    return userId && HttpResponse.json(nomalUser);
  }),
  http.put('/api/edit/user/info', () => {
    return HttpResponse.json(nomalUser);
  }),
  http.put('/api/change/password', () => {
    return HttpResponse.json(true);
  })
];
