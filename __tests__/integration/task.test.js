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

  it('Should be delete a task', async () => {
    const response = await request(app).delete(
      '/tasks/5d8aceb8e72e3f69c5c8bb3e'
    );

    expect(response.body.message).toBe('Removido com sucesso');
  });

  it('Should be get all tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.body.length).toBeGreaterThan(0);
  });
});
