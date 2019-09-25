import request from 'supertest';
import app from '../../src/app';

describe('Task', () => {
  it('Should be able register one task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        name: 'estudar node',
        customer: 'ronaldo',
        due_date: '2019-09-30',
        legal_date: '2019-10-05',
      });

    expect(response.body).toHaveProperty('_id');
  });

  it('Should be delete a task', async () => {
    const response = await request(app).delete(
      '/tasks/5d8acfa0264d4073662d191f'
    );

    expect(response.body.message).toBe('Removido com sucesso');
  });

  it('Should be get all tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Should be get task OK', async () => {
    const response = await request(app).get('/tasks');

    expect(response.body[1].status).toBe('OK');
  });

  it('Should be get task OVERDUE', async () => {
    const response = await request(app).get('/tasks');

    expect(response.body[response.body.length - 1].status).toBe('OVERDUE');
  });

  it('Should be get task FINE', async () => {
    const response = await request(app).get('/tasks');

    expect(response.body[0].status).toBe('FINE');
  });
});
