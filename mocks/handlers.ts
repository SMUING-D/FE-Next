import { HttpResponse, http } from 'msw';

const User = [
  {
    email: 'dara@naver.com',
    nickname: 'Dara',
    image:
      'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    token: '12312312312'
  }
];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
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
    console.log('회원가입');
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  }),
  http.get('/api/posts', ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    if (category === '전체') {
      // Handle 전체 category
      return HttpResponse.json([
        {
          id: 1,
          title: '역사 스터디 인원 모집 현재 3/5',
          category: '인문사회과학대학',
          createdAt: new Date(),
          description: '재밌는 역사 스터디에 오세요!!',
          memberCount: 4,
          imageSrc:
            'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 2,
          title: '문학과 예술 감상 스터디 참여자 모집',
          category: '인문사회과학대학',
          createdAt: new Date(),
          description: '시와 예술을 함께 감상하는 모임입니다. 참여해주세요!',
          memberCount: 8,
          imageSrc:
            'https://images.unsplash.com/photo-1633671687025-0e25709eed2b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 3,
          title: '교육학과 교수님 강의 소개',
          category: '사범대학',
          createdAt: new Date(),
          description: '교육학과에서 제공하는 흥미로운 강의에 대해 소개합니다.',
          memberCount: 10,
          imageSrc:
            'https://images.unsplash.com/photo-1542015644587-425b23f310b2?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 4,
          title: '스타트업 경험 공유 모임',
          category: '경영경제대학',
          createdAt: new Date(),
          description: '스타트업 창업 경험을 나누는 자리입니다. 함께 나누어봐요!',
          memberCount: 6,
          imageSrc:
            'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 5,
          title: '인공지능 세미나 개최 안내',
          category: '융합공과대학',
          createdAt: new Date(),
          description: '인공지능 분야에 대한 최신 동향과 세미나 일정 안내합니다.',
          memberCount: 15,
          imageSrc:
            'https://images.unsplash.com/photo-1694747994681-67791c336f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 6,
          title: '미술 전시회 개최 안내',
          category: '문화예술대학',
          createdAt: new Date(),
          description: '다가오는 미술 전시회 일정과 참여 안내입니다. 함께 즐겨보세요!',
          memberCount: 20,
          imageSrc:
            'https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }

    // For other categories, add specific logic
    if (category === '인문사회과학대학') {
      // Handle 인문사회과학대학 category
      return HttpResponse.json([
        {
          id: 2,
          title: '문학과 예술 감상 스터디 참여자 모집',
          category: '인문사회과학대학',
          createdAt: new Date(),
          description: '시와 예술을 함께 감상하는 모임입니다. 참여해주세요!',
          memberCount: 8,
          imageSrc:
            'https://images.unsplash.com/photo-1633671687025-0e25709eed2b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }

    if (category === '사범대학') {
      // Handle 사범대학 category
      return HttpResponse.json([
        {
          id: 3,
          title: '교육학과 교수님 강의 소개',
          category: '사범대학',
          createdAt: new Date(),
          description: '교육학과에서 제공하는 흥미로운 강의에 대해 소개합니다.',
          memberCount: 10,
          imageSrc:
            'https://images.unsplash.com/photo-1542015644587-425b23f310b2?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }

    if (category === '경영경제대학') {
      // Handle 경영경제대학 category
      return HttpResponse.json([
        {
          id: 4,
          title: '스타트업 경험 공유 모임',
          category: '경영경제대학',
          createdAt: new Date(),
          description: '스타트업 창업 경험을 나누는 자리입니다. 함께 나누어봐요!',
          memberCount: 6,
          imageSrc:
            'https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }

    if (category === '융합공과대학') {
      // Handle 융합공과대학 category
      return HttpResponse.json([
        {
          id: 5,
          title: '인공지능 세미나 개최 안내',
          category: '융합공과대학',
          createdAt: new Date(),
          description: '인공지능 분야에 대한 최신 동향과 세미나 일정 안내합니다.',
          memberCount: 15,
          imageSrc:
            'https://images.unsplash.com/photo-1694747994681-67791c336f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }

    if (category === '문화예술대학') {
      // Handle 문화예술대학 category
      return HttpResponse.json([
        {
          id: 6,
          title: '미술 전시회 개최 안내',
          category: '문화예술대학',
          createdAt: new Date(),
          description: '다가오는 미술 전시회 일정과 참여 안내입니다. 함께 즐겨보세요!',
          memberCount: 20,
          imageSrc:
            'https://images.unsplash.com/photo-1561229474-1f22e022dfd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]);
    }
  })
];
