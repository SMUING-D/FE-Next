import { HttpResponse, http } from 'msw';

const User = [{ id: 'dara', nickname: 'Dara', image: '', token: '12312312312' }];

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
  })
];
