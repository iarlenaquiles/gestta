import request from 'supertest';
import app from '../../src/app';

describe('File', () => {
  it('Should be able upload a file', async () => {
    const response = await request(app)
      .post('/files/5d8ad152e2f40805521bb161')
      .attach(
        'file',
        '/home/iarlenaquiles/node/gestta/temp/uploads/9fee8bb08572e984bcb7b100c3e1c3e7.jpg'
      );

    expect(response.body.documents.length).toBeGreaterThan(0);
  });

  it('Should be able upload a file on task not exists', async () => {
    const response = await request(app)
      .post('/files/5d8ad152e2f')
      .attach(
        'file',
        '/home/iarlenaquiles/node/gestta/temp/uploads/9fee8bb08572e984bcb7b100c3e1c3e7.jpg'
      );

    expect(response.body.error).toBe('Internal server error');
  });

  it('Should be able delete a file', async () => {
    const response = await request(app).delete(
      '/files/5d8ae1053405f3171a0a9a24/task/5d8ad152e2f40805521bb161'
    );

    expect(response.body.message).toBe('documento removido da task');
  });

  it('Should not be able delete a file', async () => {
    const response = await request(app).delete(
      '/files/5d8ae3ab3c7/task/5d8ad152e2f40805521bb161'
    );

    expect(response.body.error).toBe('Internal server error');
  });
});
