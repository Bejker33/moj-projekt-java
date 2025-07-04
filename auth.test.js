const request = require('supertest');
const app = require('./app');

describe('POST /login', () => {
  it('should login successfully with correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'Secret123' });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Zalogowano pomyślnie');
  });

  it('should fail login with invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'wrong' });

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Nieprawidłowe dane logowania');
  });
});
