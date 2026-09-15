const prisma = require('../prismaClient');

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await prisma.recommendation.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
};

exports.createRecommendation = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !description || !category) return res.status(400).json({ error: 'Title, description, and category are required' });
    const recommendation = await prisma.recommendation.create({ data: { title, description, category } });
    res.status(201).json(recommendation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create recommendation' });
  }
};