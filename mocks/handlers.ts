import { http, HttpResponse } from 'msw';

const User = [{ id: 'dara', nickname: 'Dara', image: '', token: '12312312312' }];

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    });
  })
];
