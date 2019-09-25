import request from 'supertest';
import app from '../../src/app';

describe('Task', () => {
  it('Should be able register one task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        name: 'estudar node',
        customer: 'ronaldo',
        due_date: '2019-09-25',
        legal_date: '2019-09-29',
      });

    expect(response.body).toHaveProperty('_id');
  });
});
