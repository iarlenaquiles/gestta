import request from 'supertest';
import app from '../../src/app';

describe('Get One Task', () => {
  it('Should be get one task', async () => {
    const response = await request(app).get('/tasks/5d8ad7580f00934730455995');

    expect(response.body[0]).toHaveProperty('_id');
  });
});
