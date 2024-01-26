import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

import { nomalUser } from '../data';

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
