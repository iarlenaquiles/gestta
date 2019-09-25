import Task from '../schemas/Task';

class TaskController {
  async index(req, res) {
    const tasks = await Task.find({}).sort({ status: 'asc' });
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

  async store(req, res) {
    const { name, customer, due_date, legal_date } = req.body;
    const task = await Task.create({
      name,
      customer,
      due_date,
      legal_date,
    });

    return res.json(task);
  }

  async delete(req, res) {
    const { taskId } = req.params;

    await Task.deleteOne({ _id: taskId });
    return res.json({ message: 'Removido com sucesso' });
  }
}

export default new TaskController();
