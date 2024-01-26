import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

import { TEST_USER_DATA } from '../data';

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

export const AuthHandlers = [
  http.post('/api/login', () => {
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  }),
  // 인증번호 보내기
  http.post('/api/auth/email/send', ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    return email && HttpResponse.json('10101');
  }),
  // 인증번호 받아서 검증
  http.post('/api/auth/email/verify', ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    const authNum = url.searchParams.get('authNum');
    return authNum === '10101' && email ? HttpResponse.json(true) : HttpResponse.json(false);
  }),
  http.post('/api/register', () => {
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  }),
  http.get('/api/user/info/:userId', ({ params }) => {
    const userId = params.userId;
    return userId && HttpResponse.json(TEST_USER_DATA);
  }),
  http.put('/api/edit/user/info', () => {
    return HttpResponse.json(TEST_USER_DATA);
  }),
  http.put('/api/change/password', () => {
    return HttpResponse.json(true);
  })
];
