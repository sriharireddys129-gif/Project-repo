const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getTasks = async (_req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
  } catch (_error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

exports.createTask = async (req, res) => {
  const title = req.body.title?.trim();
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const newTask = await prisma.task.create({ data: { title } });
    res.status(201).json(newTask);
  } catch (_error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(req.params.id) },
      data: { completed: Boolean(req.body.completed) },
    });
    res.json(updatedTask);
  } catch (_error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};