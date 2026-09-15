const prisma = require('../prismaClient');

exports.getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    if (!title || !date || !location) return res.status(400).json({ error: 'Title, date, and location are required' });
    const event = await prisma.event.create({ data: { title, description: description || '', date, location } });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
};