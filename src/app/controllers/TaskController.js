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
    await Task.create({
      name,
      customer,
      due_date,
      legal_date,
    });

    return res.json({ message: 'Tarefa criada com sucesso' });
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new TaskController();
