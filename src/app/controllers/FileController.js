import File from '../schemas/Files';
import Task from '../schemas/Task';

class FileController {
  async store(req, res) {
    const { taskId } = req.params;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(400).json({ error: 'Task não existe' });
    }

    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });

    task.documents.push(file._id);
    await task.save();

    return res.json(task);
  }
}

export default new FileController();
