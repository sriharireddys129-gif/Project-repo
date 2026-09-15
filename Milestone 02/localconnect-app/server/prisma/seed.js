const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // Posts
  await prisma.post.createMany({
    data: [
      { content: 'Garage sale announcement - This Saturday at 123 Maple St!' },
      { content: 'Lost dog notice - Golden Retriever named "Buddy" last seen near the park.' },
      { content: 'Community meeting - Tuesday at 7 PM in the community center.' },
    ],
  });

  // Issues
  await prisma.issue.createMany({
    data: [
      { title: 'Broken streetlight', description: 'Corner of 4th and Oak is Pitch black.' },
      { title: 'Garbage overflow', description: 'Park bins haven\'t been emptied in a week.' },
    ],
  });

  // Community events
  await prisma.event.createMany({
    data: [
      { title: 'Park cleanup morning', description: 'Bring gloves and help refresh the shared park.', date: 'Saturday, 9:00 AM', location: 'Maple Street Park' },
      { title: 'Neighborhood welcome meetup', description: 'Meet new neighbors over tea and snacks.', date: 'Sunday, 4:00 PM', location: 'Community Center' },
    ],
  });

  await prisma.recommendation.createMany({
    data: [
      { title: 'Green Leaf Plumbing', description: 'Quick, dependable repairs and clear pricing.', category: 'Home services' },
      { title: 'Maple Corner Bakery', description: 'Fresh bread and a welcoming place for morning coffee.', category: 'Food' },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
