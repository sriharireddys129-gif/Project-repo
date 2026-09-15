const prisma = require('../prismaClient');

exports.getMetrics = async (req, res) => {
  try {
    const totalPosts = await prisma.post.count();
    const totalIssues = await prisma.issue.count();
    const totalEvents = await prisma.event.count();
    const totalRecommendations = await prisma.recommendation.count();

    res.json({
      totalPosts,
      totalIssues,
      totalEvents,
      totalRecommendations
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
};
