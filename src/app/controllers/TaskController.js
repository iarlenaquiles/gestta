import { subHours, startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Task from '../schemas/Task';

class TaskController {
  async index(req, res) {
    return res.json();
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
