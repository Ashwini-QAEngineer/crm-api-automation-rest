import axios from 'axios';

const BASE = 'https://reqres.in/api';

describe('CRM REST API Tests', () => {
  test('GET /users returns 200 and user list', async () => {
    const res = await axios.get(`${BASE}/users?page=1`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data.data)).toBe(true);
    expect(res.data.data.length).toBeGreaterThan(0);
  });

  test('GET /users/:id returns single user', async () => {
    const res = await axios.get(`${BASE}/users/2`);
    expect(res.status).toBe(200);
    expect(res.data.data).toHaveProperty('id', 2);
    expect(res.data.data).toHaveProperty('email');
  });

  test('POST /users creates user and returns 201', async () => {
    const res = await axios.post(`${BASE}/users`, {
      name: 'Ashwini', job: 'QA Automation Engineer'
    });
    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty('id');
    expect(res.data.name).toBe('Ashwini');
  });

  test('DELETE /users/:id returns 204', async () => {
    const res = await axios.delete(`${BASE}/users/2`);
    expect(res.status).toBe(204);
  });
});
