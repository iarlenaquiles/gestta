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
    const taskSave = await task.save();

    return res.json(taskSave);
  }

  async delete(req, res) {
    const { taskId, docId } = req.params;

    const task = await Task.findById(taskId);
    const doc = await File.findById(docId);

    if (task.documents.includes(doc._id)) {
      task.documents.splice(doc._id, 1);
      task.save();

      doc.deleteOne({ _id: docId });
      return res.json({ message: 'documento removido da task' });
    }
    return res.json({ message: 'documento nao encontrado' });
  }
}

export default new FileController();
