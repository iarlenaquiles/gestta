import request from 'supertest';
import app from '../../src/app';

describe('Get One Task', () => {
  it('Should be get one task', async () => {
    const response = await request(app).get('/tasks/5d8ad7580f00934730455995');

    expect(response.body[0]).toHaveProperty('_id');
  });

  it('Should be get task OK', async () => {
    const response = await request(app).get('/tasks/5d8ad6d4eb1c1e41c7ce992f');

    expect(response.body[0].status).toBe('OK');
  });

  it('Should be get task OVERDUE', async () => {
    const response = await request(app).get('/tasks/5d8ad625450dc23af0261e27');

    expect(response.body[0].status).toBe('OVERDUE');
  });

  it('Should be get task FINE', async () => {
    const response = await request(app).get('/tasks/5d8acfb9d77fd774e29d8ee0');

    expect(response.body[0].status).toBe('FINE');
  });
});
