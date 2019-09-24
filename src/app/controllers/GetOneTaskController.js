import Task from '../schemas/Task';

class GetOneTaskController {
  async index(req, res) {
    const { taskId } = req.params;
    const tasks = await Task.find({ _id: taskId }).sort({ status: 'asc' });
    tasks.map(task => {
      if (task.legal_date < new Date() && task.fine) {
        task.status = 'FINE';
      } else if (task.due_date < new Date()) {
        task.status = 'OVERDUE';
      } else {
        task.status = 'OK';
      }

      task.save();
    });
    return res.json(tasks);
  }
}

export default new GetOneTaskController();
