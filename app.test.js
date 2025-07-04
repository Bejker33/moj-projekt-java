const request = require('supertest');
const app = require('./app');

describe('POST /register', () => {
  it('should register user with valid data', async () => {
    const res = await request(app)
      .post('/register')
      .send({ name: 'Anna', email: 'anna@example.com', password: 'haslo123', age: 25 });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Rejestracja udana!');
  });

  it('should return errors for invalid data', async () => {
    const res = await request(app)
      .post('/register')
      .send({ name: 'A', email: 'invalid', password: 'short', age: 15 });

    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toContain('Imię musi mieć co najmniej 2 znaki');
    expect(res.body.errors).toContain('Nieprawidłowy adres email');
    expect(res.body.errors).toContain('Hasło musi mieć co najmniej 8 znaków i zawierać cyfrę');
    expect(res.body.errors).toContain('Musisz mieć co najmniej 18 lat');
  });
});
