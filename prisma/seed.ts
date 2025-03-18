import { PrismaClient } from '@prisma/client';
import { hash } from 'crypto';

const prisma = new PrismaClient();

// A simple hashing function for passwords (in a real app, use bcrypt)
async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simple hash for development only - use proper hashing in production
    const hashedPassword = hash('sha256', Buffer.from('moisanalytics-salt'))
      .update(password)
      .digest('hex');
    resolve(hashedPassword);
  });
}

async function main() {
  console.log('Starting database seed...');

  // Clear existing data
  await prisma.$transaction([
    prisma.report.deleteMany(),
    prisma.testimonial.deleteMany(),
    prisma.contactSubmission.deleteMany(),
    prisma.project.deleteMany(),
    prisma.service.deleteMany(),
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  console.log('Cleared existing data');

  // Create admin user
  const adminPassword = await hashPassword('admin123');
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@moisanalytics.nl',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  console.log('Created admin user');

  // Create services
  const services = [
    {
      title: 'Data Analysis',
      slug: 'data-analysis',
      description: 'Transform raw data into actionable insights with our professional data analysis services.',
      content: 'Our data analysis services help businesses make sense of their complex data. We use statistical methods and specialized tools to identify patterns, trends, and correlations in your data, providing you with clear, actionable insights.',
      icon: 'BarChart2',
      featured: true,
      order: 1,
    },
    {
      title: 'Data Visualization',
      slug: 'data-visualization',
      description: 'Present your data in compelling visual formats that make complex information easy to understand.',
      content: 'Our data visualization experts create intuitive dashboards, charts, and interactive graphics that transform complex data into clear visual stories. We help you communicate insights effectively to stakeholders at all levels.',
      icon: 'PieChart',
      featured: true,
      order: 2,
    },
    {
      title: 'Business Intelligence',
      slug: 'business-intelligence',
      description: 'Get comprehensive business intelligence solutions to drive informed decision-making across your organization.',
      content: 'Our business intelligence solutions provide a comprehensive view of your organization's performance. We build integrated systems that gather, analyze, and present data from multiple sources, helping you make strategic decisions with confidence.',
      icon: 'TrendingUp',
      featured: true,
      order: 3,
    },
    {
      title: 'Predictive Analytics',
      slug: 'predictive-analytics',
      description: 'Anticipate future trends and outcomes with our advanced predictive analytics methodologies.',
      content: 'Our predictive analytics services use advanced statistical techniques and machine learning to forecast future trends and behaviors. We help you anticipate market changes, customer needs, and business opportunities before they happen.',
      icon: 'TrendingUp',
      featured: false,
      order: 4,
    },
    {
      title: 'Data Consulting',
      slug: 'data-consulting',
      description: 'Strategic data consulting to help your organization develop and implement effective data strategies.',
      content: 'Our data consulting services provide expert guidance on data strategy, architecture, governance, and analytics. We help you build a data-driven culture and implement systems that align with your business objectives.',
      icon: 'Users',
      featured: false,
      order: 5,
    },
  ];

  for (const service of services) {
    await prisma.service.create({
      data: service,
    });
  }

  console.log('Created services');

  // Create projects (case studies)
  const dataAnalysisService = await prisma.service.findUnique({
    where: { slug: 'data-analysis' },
  });

  const dataVisualizationService = await prisma.service.findUnique({
    where: { slug: 'data-visualization' },
  });

  const projects = [
    {
      title: 'Retail Chain Sales Optimization',
      slug: 'retail-chain-sales-optimization',
      summary: 'Helped a major Dutch retail chain increase sales by 15% through data-driven optimization.',
      description: 'A leading retail chain with 50+ locations across the Netherlands struggled with inconsistent sales performance. We analyzed their sales, inventory, and customer data to identify optimization opportunities. Our analysis revealed key patterns in product placement, pricing strategies, and regional preferences that were affecting sales.',
      client: 'Dutch Retail Group',
      outcome: 'Implementation of our data-driven recommendations led to a 15% increase in overall sales within 6 months and a 22% increase in customer satisfaction scores.',
      featured: true,
      published: true,
      serviceId: dataAnalysisService?.id,
    },
    {
      title: 'Financial Services Dashboard',
      slug: 'financial-services-dashboard',
      summary: 'Created an interactive executive dashboard for a financial services company, improving decision-making speed by 40%.',
      description: 'A financial services company needed a way to visualize complex market data and internal performance metrics for executive decision-making. We designed and implemented a custom dashboard that integrated multiple data sources and presented key insights in an intuitive, interactive format.',
      client: 'Amsterdam Financial Group',
      outcome: 'The new dashboard reduced the time required for weekly executive analysis by 40% and improved the accuracy of strategic decisions, resulting in a 12% increase in portfolio performance.',
      featured: true,
      published: true,
      serviceId: dataVisualizationService?.id,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log('Created projects');

  // Create testimonials
  const testimonials = [
    {
      name: 'Jan de Vries',
      position: 'CTO',
      company: 'Dutch Retail Group',
      content: 'Mois Analytics transformed our approach to data. Their insights helped us optimize our operations and significantly increase our sales. Their team was professional, thorough, and delivered beyond our expectations.',
      rating: 5,
      featured: true,
    },
    {
      name: 'Sophie Bakker',
      position: 'Head of Strategy',
      company: 'Amsterdam Financial Group',
      content: 'The dashboard created by Mois Analytics has become an essential tool for our executive team. It presents complex data in a clear, actionable format that has improved our decision-making process tremendously.',
      rating: 5,
      featured: true,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }

  console.log('Created testimonials');

  console.log('Database seeding completed successfully');
}

main()
  .catch((e) => {
    console.error('Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
