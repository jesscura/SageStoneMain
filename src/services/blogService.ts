// Blog CMS Service
// This service provides a unified interface for fetching blog content
// It can be configured to work with various headless CMS providers

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage?: string;
  readTime: string;
  image: string;
  publishedAt: string;
  featured?: boolean;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// CMS Configuration type - credentials should be provided via environment variables
// when connecting to a real CMS provider
export interface CMSConfig {
  provider: 'contentful' | 'sanity' | 'strapi' | 'static';
  // Contentful specific config
  contentfulSpaceId?: string;
  contentfulAccessToken?: string;
  contentfulEnvironment?: string;
  // Sanity specific config
  sanityProjectId?: string;
  sanityDataset?: string;
  // Strapi specific config
  strapiUrl?: string;
  strapiToken?: string;
}

// Get config from environment variables or use defaults
function getCMSConfig(): CMSConfig {
  // Check for Contentful environment variables
  const contentfulSpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const contentfulAccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  const contentfulEnvironment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master';

  if (contentfulSpaceId && contentfulAccessToken) {
    return {
      provider: 'contentful',
      contentfulSpaceId,
      contentfulAccessToken,
      contentfulEnvironment,
    };
  }

  // Check for Sanity environment variables
  const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const sanityDataset = import.meta.env.VITE_SANITY_DATASET;

  if (sanityProjectId && sanityDataset) {
    return {
      provider: 'sanity',
      sanityProjectId,
      sanityDataset,
    };
  }

  // Check for Strapi environment variables
  const strapiUrl = import.meta.env.VITE_STRAPI_URL;
  const strapiToken = import.meta.env.VITE_STRAPI_TOKEN;

  if (strapiUrl) {
    return {
      provider: 'strapi',
      strapiUrl,
      strapiToken,
    };
  }

  // Default to static content for demo purposes
  return {
    provider: 'static',
  };
}

// Contentful response types
interface ContentfulSys {
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface ContentfulAsset {
  sys: ContentfulSys;
  fields: {
    title?: string;
    file?: {
      url: string;
      details?: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
}

// Contentful linked asset reference (when resolved with includes)
interface ContentfulAssetLink {
  sys: {
    type: 'Link';
    linkType: 'Asset';
    id: string;
  };
}

interface ContentfulBlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage?: ContentfulAssetLink;
  readTime?: string;
  featuredImage?: ContentfulAssetLink;
  featured?: boolean;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
}

interface ContentfulEntry<T> {
  sys: ContentfulSys;
  fields: T;
}

interface ContentfulResponse<T> {
  items: ContentfulEntry<T>[];
  total: number;
  skip: number;
  limit: number;
  includes?: {
    Asset?: ContentfulAsset[];
  };
}

// Static blog posts for fallback/demo
const staticPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'scale-shopify-support-without-burning-out-team',
    title: '5 Ways to Scale Shopify Support Without Burning Out Your Team',
    excerpt: 'Growing your Shopify store is exciting — until customer inquiries start overwhelming your inbox. Here\'s how to scale support sustainably.',
    content: `
      <h2>The Challenge of Scaling Support</h2>
      <p>Growing your Shopify store is exciting — until customer inquiries start overwhelming your inbox. As your business scales, so do the demands on your support team. Without the right systems in place, you risk burning out your team and letting customer experience suffer.</p>
      
      <h2>1. Implement Tiered Support</h2>
      <p>Not all inquiries require the same level of expertise. Create a tiered system where simple questions (shipping status, return policies) are handled by Tier 1 agents, while complex issues escalate to specialists.</p>
      
      <h2>2. Invest in Self-Service Resources</h2>
      <p>A comprehensive FAQ, knowledge base, and order tracking system can reduce ticket volume by 30-40%. Customers often prefer finding answers themselves if the resources are easy to navigate.</p>
      
      <h2>3. Leverage Automation Wisely</h2>
      <p>Use chatbots and automated responses for common queries, but always provide a clear path to human support. The goal is to augment your team, not replace the human touch that builds customer loyalty.</p>
      
      <h2>4. Outsource Strategically</h2>
      <p>Partner with a BPO that understands eCommerce. A well-trained external team can handle overflow during peak seasons, night shifts, and routine inquiries — freeing your core team to focus on complex issues and strategy.</p>
      
      <h2>5. Monitor and Optimize Continuously</h2>
      <p>Track metrics like first response time, resolution time, and CSAT scores. Use this data to identify bottlenecks and continuously improve your processes.</p>
      
      <h2>Conclusion</h2>
      <p>Scaling support doesn't mean sacrificing quality or burning out your team. With the right combination of technology, process, and partnership, you can deliver exceptional customer experiences at any scale.</p>
    `,
    category: 'eCommerce',
    author: 'Jesel Cura',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2ODA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-15T10:00:00Z',
    featured: true,
    tags: ['Shopify', 'Customer Support', 'Scaling', 'eCommerce'],
    metaTitle: '5 Ways to Scale Shopify Support | SageStone Inc Blog',
    metaDescription: 'Learn how to scale your Shopify customer support without burning out your team. Expert tips on tiered support, automation, and strategic outsourcing.',
  },
  {
    id: '2',
    slug: 'how-property-managers-benefit-from-virtual-assistants',
    title: 'How Property Managers Benefit from Virtual Assistants',
    excerpt: 'Tenant communication, maintenance requests, leasing admin — discover how virtual assistants free up 30+ hours per week for property managers.',
    content: `
      <h2>The Property Manager's Dilemma</h2>
      <p>Property managers wear many hats: leasing agent, maintenance coordinator, tenant relations specialist, and administrator. With portfolios growing and tenant expectations rising, something has to give — or does it?</p>
      
      <h2>Tasks Perfect for Virtual Assistants</h2>
      <ul>
        <li><strong>Tenant Communication:</strong> Responding to routine inquiries, sending reminders, and coordinating move-ins/move-outs</li>
        <li><strong>Maintenance Coordination:</strong> Logging requests, dispatching vendors, and following up on completion</li>
        <li><strong>Leasing Admin:</strong> Processing applications, scheduling tours, and preparing lease documents</li>
        <li><strong>Accounting Support:</strong> Rent collection follow-ups, invoice processing, and reporting</li>
      </ul>
      
      <h2>The Results Speak for Themselves</h2>
      <p>Property managers who work with dedicated VAs report saving 30+ hours per week, reducing response times by 60%, and improving tenant satisfaction scores significantly.</p>
      
      <h2>Finding the Right Fit</h2>
      <p>Look for VAs with property management experience, excellent communication skills, and familiarity with industry tools like AppFolio, Buildium, or Yardi. A good BPO partner will handle training and quality assurance.</p>
    `,
    category: 'Property Management',
    author: 'Jesel Cura',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-10T10:00:00Z',
    tags: ['Property Management', 'Virtual Assistants', 'Productivity'],
    metaTitle: 'Virtual Assistants for Property Managers | SageStone Inc',
    metaDescription: 'Discover how property managers save 30+ hours per week with virtual assistants. Learn which tasks to delegate and how to find the right VA for your portfolio.',
  },
  {
    id: '3',
    slug: 'customer-success-core-of-bpo-strategy',
    title: 'Why Customer Success Should Be the Core of Every BPO Strategy',
    excerpt: 'Most BPOs focus on cost savings. But the best outsourcing partners prioritize customer success. Here\'s why it matters.',
    content: `
      <h2>Beyond Cost Savings</h2>
      <p>When most companies think about outsourcing, they think about cost savings. And while reducing costs is important, it shouldn't be the primary driver of your BPO strategy.</p>
      
      <h2>The Customer Success Mindset</h2>
      <p>Customer success-focused BPOs measure their value not by how much they save you, but by how much value they create for your customers — and by extension, your business.</p>
      
      <h2>Key Differentiators</h2>
      <ul>
        <li><strong>Proactive vs. Reactive:</strong> Anticipating customer needs instead of just responding to tickets</li>
        <li><strong>Outcome-Focused:</strong> Measuring success by customer retention and satisfaction, not just handle time</li>
        <li><strong>Continuous Improvement:</strong> Regularly analyzing data to identify opportunities for improvement</li>
        <li><strong>Partnership Approach:</strong> Acting as an extension of your team, aligned with your goals</li>
      </ul>
      
      <h2>The ROI of Customer Success</h2>
      <p>Companies that prioritize customer success see 18% higher CSAT scores, 25% lower churn rates, and significantly higher customer lifetime value. The right BPO partner can help you achieve these results.</p>
    `,
    category: 'Customer Experience',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2MjY3MTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-05T10:00:00Z',
    tags: ['Customer Success', 'BPO', 'Strategy'],
    metaTitle: 'Customer Success in BPO Strategy | SageStone Inc',
    metaDescription: 'Learn why the best BPO partners prioritize customer success over cost savings, and how this approach delivers better ROI for your business.',
  },
  {
    id: '4',
    slug: 'real-cost-back-office-operations',
    title: 'The Real Cost of Back-Office Operations: In-House vs. Outsourced',
    excerpt: 'A complete breakdown of the true costs of managing back-office operations in-house versus outsourcing to a BPO partner.',
    content: `
      <h2>Understanding True Costs</h2>
      <p>When comparing in-house versus outsourced operations, most companies only look at direct labor costs. But the true cost includes much more.</p>
      
      <h2>Hidden Costs of In-House Operations</h2>
      <ul>
        <li><strong>Recruiting and Hiring:</strong> Job postings, interviews, background checks, onboarding</li>
        <li><strong>Training and Development:</strong> Initial training, ongoing education, certifications</li>
        <li><strong>Benefits and Overhead:</strong> Health insurance, PTO, office space, equipment</li>
        <li><strong>Management Time:</strong> Supervision, performance reviews, HR issues</li>
        <li><strong>Technology:</strong> Software licenses, hardware, IT support</li>
        <li><strong>Turnover Costs:</strong> Recruiting replacements, knowledge loss, productivity gaps</li>
      </ul>
      
      <h2>The Outsourcing Advantage</h2>
      <p>A good BPO partner absorbs many of these costs and spreads them across multiple clients, achieving economies of scale. You pay a predictable monthly rate while they handle recruiting, training, management, and technology.</p>
      
      <h2>Making the Right Choice</h2>
      <p>The decision isn't always about cost. Consider factors like control, flexibility, scalability, and strategic focus. The best choice depends on your specific situation and goals.</p>
    `,
    category: 'Operations',
    author: 'Jesel Cura',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBvcGVyYXRpb25zJTIwdGVhbXxlbnwxfHx8fDE3NjI3MTQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-01T10:00:00Z',
    tags: ['Operations', 'Cost Analysis', 'Outsourcing'],
    metaTitle: 'In-House vs Outsourced Operations Cost Analysis | SageStone Inc',
    metaDescription: 'Complete breakdown of the true costs of in-house vs outsourced back-office operations. Understand hidden costs and make informed decisions.',
  },
  {
    id: '5',
    slug: 'build-global-team-that-works',
    title: 'How to Build a Global Team That Actually Works',
    excerpt: 'Best practices for managing distributed teams across time zones, cultures, and communication preferences. Lessons from 10 years of global ops.',
    content: `
      <h2>The Global Team Challenge</h2>
      <p>Building a distributed team that works well together isn't just about hiring talented people in different locations. It requires intentional effort around communication, culture, and processes.</p>
      
      <h2>Key Success Factors</h2>
      
      <h3>1. Async-First Communication</h3>
      <p>Design your workflows to work asynchronously. Use clear documentation, recorded videos, and detailed handoffs. Reserve synchronous meetings for relationship-building and complex problem-solving.</p>
      
      <h3>2. Cultural Intelligence</h3>
      <p>Invest in understanding different work cultures. What's considered direct communication in one culture might be rude in another. Create space for team members to share their preferences and norms.</p>
      
      <h3>3. Clear Processes and Documentation</h3>
      <p>When you can't tap someone on the shoulder to ask a question, documentation becomes critical. Create playbooks, FAQs, and decision trees that empower team members to work independently.</p>
      
      <h3>4. Intentional Team Building</h3>
      <p>Remote teams need more deliberate effort to build relationships. Schedule virtual social events, celebrate wins together, and create opportunities for casual conversation.</p>
      
      <h2>The Payoff</h2>
      <p>Well-managed global teams offer significant advantages: access to diverse talent pools, follow-the-sun support coverage, and fresh perspectives that drive innovation.</p>
    `,
    category: 'Remote Work',
    author: 'Jesel Cura',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-20T10:00:00Z',
    tags: ['Remote Work', 'Team Building', 'Global Teams'],
    metaTitle: 'Building Effective Global Teams | SageStone Inc',
    metaDescription: 'Learn best practices for managing distributed teams across time zones and cultures. 10 years of lessons from global operations experts.',
  },
  {
    id: '6',
    slug: 'data-driven-cx-turning-feedback-into-action',
    title: 'Data-Driven CX: Turning Customer Feedback Into Action',
    excerpt: 'How to use analytics, CSAT tracking, and sentiment analysis to improve customer experience and drive business growth.',
    content: `
      <h2>The Data Opportunity</h2>
      <p>Every customer interaction generates valuable data. The question is: are you using it effectively to improve your customer experience?</p>
      
      <h2>Building Your CX Analytics Framework</h2>
      
      <h3>1. Track the Right Metrics</h3>
      <p>Go beyond basic metrics like ticket volume. Track CSAT, NPS, Customer Effort Score, first contact resolution rate, and time to resolution. Each tells a different part of the story.</p>
      
      <h3>2. Implement Sentiment Analysis</h3>
      <p>Use AI-powered tools to analyze the sentiment of customer communications. Identify trends in positive and negative feedback, and track how sentiment changes over time.</p>
      
      <h3>3. Close the Feedback Loop</h3>
      <p>Collecting data is only valuable if you act on it. Create processes to regularly review insights, identify improvement opportunities, and implement changes.</p>
      
      <h3>4. Share Insights Across Teams</h3>
      <p>Customer feedback shouldn't live only in the support team. Share insights with product, marketing, and leadership to drive company-wide improvements.</p>
      
      <h2>From Insights to Action</h2>
      <p>The most successful companies treat CX data as a strategic asset, using it to make informed decisions about products, processes, and priorities.</p>
    `,
    category: 'Analytics',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-15T10:00:00Z',
    tags: ['Analytics', 'Customer Experience', 'Data'],
    metaTitle: 'Data-Driven Customer Experience | SageStone Inc',
    metaDescription: 'Learn how to use analytics, CSAT tracking, and sentiment analysis to improve customer experience and drive business growth.',
  },
  {
    id: '7',
    slug: 'outsourcing-myths-debunked',
    title: 'Outsourcing Myths Debunked: What Founders Get Wrong About BPO',
    excerpt: '"It\'s too expensive." "Quality will suffer." "I\'ll lose control." We debunk the most common misconceptions about outsourcing.',
    content: `
      <h2>Myth #1: Outsourcing Is Only for Big Companies</h2>
      <p><strong>Reality:</strong> Modern BPO partners offer flexible solutions that scale with your needs. Startups and SMBs can start with a single VA and grow from there.</p>
      
      <h2>Myth #2: Quality Will Suffer</h2>
      <p><strong>Reality:</strong> Quality depends on your partner, not the model. The right BPO invests heavily in recruiting, training, and QA — often delivering better results than an in-house team with less experience.</p>
      
      <h2>Myth #3: I'll Lose Control</h2>
      <p><strong>Reality:</strong> Good BPO partners provide full visibility through dashboards, regular reporting, and open communication. You maintain strategic control while they handle execution.</p>
      
      <h2>Myth #4: It's Too Expensive</h2>
      <p><strong>Reality:</strong> When you factor in all costs (recruiting, training, benefits, overhead, management time), outsourcing often costs 35-50% less than building an in-house team.</p>
      
      <h2>Myth #5: Customers Will Know and Won't Like It</h2>
      <p><strong>Reality:</strong> Well-trained outsourced teams can be indistinguishable from in-house staff. What customers care about is getting their issues resolved quickly and professionally.</p>
      
      <h2>Making It Work</h2>
      <p>The key to successful outsourcing is finding the right partner — one who understands your business, shares your values, and treats your customers like their own.</p>
    `,
    category: 'Industry Insights',
    author: 'Jesel Cura',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-10T10:00:00Z',
    tags: ['BPO', 'Outsourcing', 'Myths'],
    metaTitle: 'Outsourcing Myths Debunked | SageStone Inc',
    metaDescription: 'We debunk the most common misconceptions about BPO and outsourcing. Learn what founders often get wrong about working with external teams.',
  },
  {
    id: '8',
    slug: 'streamlining-customer-support-workflows',
    title: 'From Chaos to Clarity: Streamlining Customer Support Workflows',
    excerpt: 'A step-by-step guide to building efficient customer support workflows that scale with your business.',
    content: `
      <h2>Signs Your Workflow Needs Work</h2>
      <ul>
        <li>Tickets falling through the cracks</li>
        <li>Inconsistent responses to similar issues</li>
        <li>Long resolution times for simple problems</li>
        <li>Team members unclear on priorities</li>
        <li>Customers having to repeat themselves</li>
      </ul>
      
      <h2>Building Better Workflows</h2>
      
      <h3>Step 1: Map Your Current State</h3>
      <p>Document every type of inquiry you receive and how it's currently handled. Identify bottlenecks, redundancies, and gaps.</p>
      
      <h3>Step 2: Categorize and Prioritize</h3>
      <p>Create clear categories for inquiries and define priority levels. Ensure everyone knows how to classify and escalate tickets.</p>
      
      <h3>Step 3: Build Decision Trees</h3>
      <p>Create flowcharts that guide agents through common scenarios. This ensures consistency and reduces training time for new team members.</p>
      
      <h3>Step 4: Implement Automation</h3>
      <p>Automate routing, tagging, and responses for common inquiries. Use templates and macros to speed up manual responses.</p>
      
      <h3>Step 5: Measure and Iterate</h3>
      <p>Track key metrics and continuously improve. The best workflows evolve based on data and feedback.</p>
    `,
    category: 'Customer Experience',
    author: 'Jesel Cura',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-05T10:00:00Z',
    tags: ['Customer Support', 'Workflows', 'Efficiency'],
    metaTitle: 'Streamlining Customer Support Workflows | SageStone Inc',
    metaDescription: 'A step-by-step guide to building efficient customer support workflows that scale with your business. From chaos to clarity.',
  },
  {
    id: '9',
    slug: 'founders-guide-hiring-first-virtual-assistant',
    title: 'The Founder\'s Guide to Hiring Your First Virtual Assistant',
    excerpt: 'What to look for, how to onboard, and how to set up your VA for success. A practical guide for first-time outsourcers.',
    content: `
      <h2>When It's Time to Hire</h2>
      <p>You're ready for a VA when administrative tasks are consuming time you should spend on strategy and growth. If you're spending hours on inbox management, scheduling, or data entry, it's time.</p>
      
      <h2>Defining the Role</h2>
      <p>Before hiring, document exactly what tasks you want to delegate. Be specific about tools, processes, and expected outcomes. A clear job description attracts better candidates.</p>
      
      <h2>What to Look For</h2>
      <ul>
        <li><strong>Communication Skills:</strong> Clear, professional written and verbal communication</li>
        <li><strong>Self-Management:</strong> Ability to work independently with minimal supervision</li>
        <li><strong>Technical Aptitude:</strong> Comfort with learning new tools and software</li>
        <li><strong>Reliability:</strong> Consistent availability and responsiveness</li>
        <li><strong>Problem-Solving:</strong> Initiative to handle unexpected situations</li>
      </ul>
      
      <h2>Setting Up for Success</h2>
      <ul>
        <li>Create detailed SOPs for key tasks</li>
        <li>Set up secure access to necessary tools</li>
        <li>Establish communication protocols</li>
        <li>Define KPIs and check-in cadence</li>
        <li>Start with a trial period</li>
      </ul>
      
      <h2>The BPO Advantage</h2>
      <p>Working with a BPO partner simplifies this process. They handle recruiting, vetting, training, and management — giving you a pre-qualified, supported VA from day one.</p>
    `,
    category: 'Remote Work',
    author: 'Jesel Cura',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-01T10:00:00Z',
    tags: ['Virtual Assistants', 'Hiring', 'Founders'],
    metaTitle: 'How to Hire Your First Virtual Assistant | SageStone Inc',
    metaDescription: 'A practical guide for founders hiring their first VA. What to look for, how to onboard, and how to set your virtual assistant up for success.',
  },
  {
    id: '10',
    slug: 'roi-of-outsourcing-customer-support-2025',
    title: 'The ROI of Outsourcing Customer Support in 2025: A Complete Guide',
    excerpt: 'Is outsourcing customer support worth it? We break down the real numbers, hidden costs, and expected returns to help you make an informed decision.',
    content: `
      <h2>Understanding the True Value of Outsourced Support</h2>
      <p>In 2025, customer support outsourcing has evolved far beyond simple cost-cutting. Smart businesses are using BPO partnerships to drive growth, improve customer satisfaction, and gain competitive advantages. But what's the real ROI?</p>
      
      <h2>The Numbers That Matter</h2>
      <p>Based on our work with hundreds of clients, here's what typical businesses see when outsourcing customer support:</p>
      
      <h3>Cost Savings</h3>
      <ul>
        <li><strong>35-50% reduction</strong> in total cost of support operations</li>
        <li><strong>Zero recruitment costs</strong> (training, hiring, HR)</li>
        <li><strong>No infrastructure expenses</strong> (office space, equipment, software)</li>
        <li><strong>Flexible scaling</strong> without severance or hiring delays</li>
      </ul>
      
      <h3>Performance Improvements</h3>
      <ul>
        <li><strong>+18% CSAT improvement</strong> with properly trained teams</li>
        <li><strong>-40% faster response times</strong> with 24/7 coverage</li>
        <li><strong>+25% first contact resolution</strong> with specialized agents</li>
      </ul>
      
      <h2>Calculating Your Potential ROI</h2>
      <p>To calculate your potential ROI, consider these factors:</p>
      <ol>
        <li><strong>Current fully-loaded cost per agent</strong> (salary, benefits, overhead, management time)</li>
        <li><strong>Hidden costs</strong> (turnover, training new hires, quality issues)</li>
        <li><strong>Opportunity cost</strong> (time spent managing support instead of growing business)</li>
        <li><strong>Revenue impact</strong> (improved support → higher retention → more revenue)</li>
      </ol>
      
      <h2>When Outsourcing Makes the Most Sense</h2>
      <p>Consider outsourcing if you're experiencing:</p>
      <ul>
        <li>Rapid growth outpacing your support capacity</li>
        <li>Need for 24/7 or extended hours coverage</li>
        <li>Seasonal fluctuations in support volume</li>
        <li>High turnover in your support team</li>
        <li>Desire to focus leadership on core business</li>
      </ul>
      
      <h2>Maximizing Your BPO ROI</h2>
      <p>The key to maximizing ROI is choosing the right partner. Look for:</p>
      <ul>
        <li>Industry-specific experience</li>
        <li>Strong training and QA programs</li>
        <li>Transparent pricing and reporting</li>
        <li>Cultural alignment with your brand</li>
        <li>Flexibility in team size and scope</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>When done right, outsourcing customer support delivers significant ROI beyond simple cost savings. The best BPO partnerships improve customer satisfaction, free up leadership time, and enable faster scaling — all while reducing costs by 35% or more.</p>
    `,
    category: 'Operations',
    author: 'Jesel Cura',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-20T10:00:00Z',
    featured: false,
    tags: ['ROI', 'Customer Support', 'Outsourcing', 'Cost Savings'],
    metaTitle: 'ROI of Outsourcing Customer Support 2025 | Complete Guide | SageStone Inc',
    metaDescription: 'Calculate the real ROI of outsourcing customer support. Learn about 35-50% cost savings, 18% CSAT improvement, and how to maximize returns from BPO partnerships.',
  },
  {
    id: '11',
    slug: 'ecommerce-customer-service-best-practices',
    title: '10 eCommerce Customer Service Best Practices for 2025',
    excerpt: 'Master the art of eCommerce customer service with these proven strategies that increase retention, reduce returns, and boost your store\'s reputation.',
    content: `
      <h2>Why eCommerce Customer Service Matters More Than Ever</h2>
      <p>In the competitive world of online retail, customer service is your secret weapon. With 96% of customers saying service is important to their brand loyalty, getting it right is essential for success.</p>
      
      <h2>1. Offer Omnichannel Support</h2>
      <p>Customers expect to reach you on their preferred channel — email, chat, social media, or phone. Ensure consistent quality across all channels and make it easy for customers to switch between them without losing context.</p>
      
      <h2>2. Speed Is Everything</h2>
      <p>In eCommerce, first response time matters. Aim for:</p>
      <ul>
        <li><strong>Live chat:</strong> Under 1 minute</li>
        <li><strong>Email:</strong> Under 4 hours</li>
        <li><strong>Social media:</strong> Under 1 hour</li>
      </ul>
      
      <h2>3. Personalize Every Interaction</h2>
      <p>Use customer data to personalize support. Reference their order history, preferences, and past interactions. A personalized experience feels premium and builds loyalty.</p>
      
      <h2>4. Empower Self-Service</h2>
      <p>Build comprehensive FAQs, order tracking systems, and knowledge bases. 67% of customers prefer self-service over speaking to a representative for simple issues.</p>
      
      <h2>5. Master Returns and Exchanges</h2>
      <p>Returns are inevitable in eCommerce. Make the process painless with clear policies, prepaid labels, and quick processing. A good returns experience often leads to repeat purchases.</p>
      
      <h2>6. Proactive Communication</h2>
      <p>Don't wait for problems. Send proactive updates about shipping delays, back-in-stock notifications, and order confirmations. Customers appreciate being kept in the loop.</p>
      
      <h2>7. Train on Product Knowledge</h2>
      <p>Your support team should know your products inside and out. This enables them to make recommendations, answer detailed questions, and solve problems faster.</p>
      
      <h2>8. Collect and Act on Feedback</h2>
      <p>Implement CSAT surveys, NPS tracking, and post-purchase reviews. More importantly, analyze this data and make improvements based on customer input.</p>
      
      <h2>9. Handle Negative Reviews Professionally</h2>
      <p>Respond to negative reviews publicly and professionally. Offer to make things right. Many customers update their reviews after a positive resolution.</p>
      
      <h2>10. Invest in Your Team</h2>
      <p>Whether in-house or outsourced, invest in ongoing training, quality assurance, and team development. Happy support agents deliver better customer experiences.</p>
      
      <h2>Conclusion</h2>
      <p>Great customer service isn't just about solving problems — it's about building relationships that drive repeat purchases and referrals. Implement these best practices and watch your customer loyalty soar.</p>
    `,
    category: 'eCommerce',
    author: 'Jesel Cura',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-18T10:00:00Z',
    tags: ['eCommerce', 'Customer Service', 'Best Practices', 'Shopify'],
    metaTitle: '10 eCommerce Customer Service Best Practices 2025 | SageStone Inc',
    metaDescription: 'Master eCommerce customer service with 10 proven best practices. Learn how to increase retention, reduce returns, and boost your store\'s reputation.',
  },
  {
    id: '12',
    slug: 'virtual-assistant-vs-employee-comparison',
    title: 'Virtual Assistant vs Full-Time Employee: Which is Right for Your Business?',
    excerpt: 'A comprehensive comparison of hiring a virtual assistant versus a full-time employee. Costs, benefits, and when each option makes the most sense.',
    content: `
      <h2>The Modern Hiring Dilemma</h2>
      <p>As businesses grow, founders face a critical decision: should I hire a full-time employee or work with a virtual assistant? Both options have distinct advantages, and the right choice depends on your specific situation.</p>
      
      <h2>Cost Comparison</h2>
      
      <h3>Full-Time Employee</h3>
      <ul>
        <li>Base salary: $40,000 - $60,000+ annually</li>
        <li>Benefits (health, PTO, retirement): 20-30% of salary</li>
        <li>Equipment and workspace: $3,000 - $10,000</li>
        <li>Recruiting costs: $4,000 - $7,000 per hire</li>
        <li>Training and onboarding: 2-4 weeks of reduced productivity</li>
        <li><strong>Total first-year cost: $55,000 - $85,000+</strong></li>
      </ul>
      
      <h3>Virtual Assistant</h3>
      <ul>
        <li>Monthly cost: $1,000 - $3,000 depending on hours and expertise</li>
        <li>No benefits required</li>
        <li>No equipment or workspace costs</li>
        <li>No recruiting — handled by BPO partner</li>
        <li>Faster onboarding: typically 1-2 weeks</li>
        <li><strong>Total annual cost: $12,000 - $36,000</strong></li>
      </ul>
      
      <h2>When to Choose a Virtual Assistant</h2>
      <ul>
        <li>You need administrative support but not full-time hours</li>
        <li>Tasks are well-defined and can be done remotely</li>
        <li>You need flexibility to scale up or down</li>
        <li>Budget constraints require cost efficiency</li>
        <li>You want to test a role before committing to a full-time hire</li>
      </ul>
      
      <h2>When to Hire Full-Time</h2>
      <ul>
        <li>The role requires constant in-person presence</li>
        <li>You need someone deeply embedded in company culture</li>
        <li>The position involves sensitive information requiring direct oversight</li>
        <li>You have consistent 40+ hours of work weekly</li>
        <li>Career development and long-term retention are priorities</li>
      </ul>
      
      <h2>The Hybrid Approach</h2>
      <p>Many successful businesses use both: full-time employees for core functions and virtual assistants for administrative, support, and specialized tasks. This combination optimizes costs while maintaining operational excellence.</p>
      
      <h2>Making the Right Choice</h2>
      <p>Consider these questions:</p>
      <ol>
        <li>How many hours per week does this role require?</li>
        <li>Can the tasks be done remotely?</li>
        <li>Is the workload consistent or variable?</li>
        <li>What's your budget for this role?</li>
        <li>How quickly do you need someone started?</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all answer. Virtual assistants offer flexibility and cost savings for many roles, while full-time employees provide depth and integration for core positions. The smartest businesses strategically use both.</p>
    `,
    category: 'Remote Work',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-16T10:00:00Z',
    tags: ['Virtual Assistant', 'Hiring', 'Cost Comparison', 'Remote Work'],
    metaTitle: 'Virtual Assistant vs Employee: Complete Cost Comparison | SageStone Inc',
    metaDescription: 'Compare the costs and benefits of hiring a virtual assistant vs full-time employee. Includes detailed cost breakdowns and decision factors.',
  },
  {
    id: '13',
    slug: 'shopify-store-automation-guide',
    title: 'The Ultimate Guide to Shopify Store Automation in 2025',
    excerpt: 'Automate your Shopify store operations to save 20+ hours per week. From order processing to customer support, learn what to automate and how.',
    content: `
      <h2>Why Automation Is Essential for Shopify Success</h2>
      <p>Running a Shopify store involves countless repetitive tasks. Smart automation frees you to focus on growth while ensuring consistent, error-free operations.</p>
      
      <h2>Top Areas to Automate</h2>
      
      <h3>1. Order Processing and Fulfillment</h3>
      <ul>
        <li>Automatic order routing to fulfillment centers</li>
        <li>Inventory level syncing across channels</li>
        <li>Shipping label generation and tracking updates</li>
        <li>Low stock alerts and automatic reordering</li>
      </ul>
      
      <h3>2. Customer Communication</h3>
      <ul>
        <li>Order confirmation and shipping notification emails</li>
        <li>Abandoned cart recovery sequences</li>
        <li>Review request emails post-delivery</li>
        <li>Welcome sequences for new subscribers</li>
      </ul>
      
      <h3>3. Customer Support</h3>
      <ul>
        <li>Chatbots for common questions (shipping status, returns)</li>
        <li>Auto-tagging and routing of support tickets</li>
        <li>Canned responses for frequent inquiries</li>
        <li>Self-service order tracking portals</li>
      </ul>
      
      <h3>4. Marketing Automation</h3>
      <ul>
        <li>Social media post scheduling</li>
        <li>Customer segmentation and personalized campaigns</li>
        <li>Win-back campaigns for lapsed customers</li>
        <li>Birthday and anniversary promotions</li>
      </ul>
      
      <h2>Recommended Automation Tools</h2>
      <ul>
        <li><strong>Klaviyo:</strong> Email and SMS marketing automation</li>
        <li><strong>Gorgias:</strong> Customer support automation</li>
        <li><strong>Zapier:</strong> Connect apps and automate workflows</li>
        <li><strong>ShipStation:</strong> Shipping and fulfillment automation</li>
        <li><strong>Tidio:</strong> AI chatbots for customer service</li>
      </ul>
      
      <h2>What NOT to Automate</h2>
      <p>Not everything should be automated. Keep human touch for:</p>
      <ul>
        <li>Complex customer complaints requiring empathy</li>
        <li>VIP customer relationships</li>
        <li>Product recommendations requiring expertise</li>
        <li>Crisis management and PR situations</li>
      </ul>
      
      <h2>The Human + Automation Approach</h2>
      <p>The best results come from combining automation with skilled human support. Automate the routine to free your team for high-value interactions that build loyalty and drive sales.</p>
      
      <h2>Getting Started</h2>
      <ol>
        <li>Audit your current processes and identify repetitive tasks</li>
        <li>Prioritize automations by time savings and impact</li>
        <li>Start with one area and perfect it before expanding</li>
        <li>Monitor results and adjust automation rules</li>
        <li>Train your team on the new workflows</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Strategic automation is a game-changer for Shopify merchants. Combined with dedicated support for complex tasks, automation helps you scale efficiently while maintaining the personal touch your customers love.</p>
    `,
    category: 'eCommerce',
    author: 'Jesel Cura',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-12T10:00:00Z',
    tags: ['Shopify', 'Automation', 'eCommerce', 'Productivity'],
    metaTitle: 'Shopify Store Automation Guide 2025 | Save 20+ Hours Weekly | SageStone Inc',
    metaDescription: 'Complete guide to Shopify store automation. Learn what to automate, best tools to use, and how to save 20+ hours per week on your eCommerce operations.',
  },
  {
    id: '14',
    slug: 'scaling-startup-operations-without-breaking-bank',
    title: 'Scaling Startup Operations Without Breaking the Bank',
    excerpt: 'How early-stage startups can build scalable operations on a budget. Smart strategies for founders who need to move fast without overspending.',
    content: `
      <h2>The Startup Scaling Challenge</h2>
      <p>Every startup founder faces the same dilemma: you need to scale operations to support growth, but you're working with limited resources. The solution isn't to spend more — it's to spend smarter.</p>
      
      <h2>Strategy 1: Outsource Before You Hire</h2>
      <p>Instead of rushing to hire full-time employees, start with outsourced support:</p>
      <ul>
        <li>Test roles and workflows before committing to full-time salaries</li>
        <li>Scale up or down based on actual demand</li>
        <li>Access specialized expertise without specialist salaries</li>
        <li>Convert to full-time hires once you validate the need</li>
      </ul>
      
      <h2>Strategy 2: Document Everything</h2>
      <p>Good documentation is cheap infrastructure. Create:</p>
      <ul>
        <li>Standard operating procedures (SOPs) for all recurring tasks</li>
        <li>Decision trees for common situations</li>
        <li>Training materials for new team members</li>
        <li>Playbooks for handling edge cases</li>
      </ul>
      
      <h2>Strategy 3: Automate the Repeatable</h2>
      <p>Invest in automation for tasks that:</p>
      <ul>
        <li>Happen frequently (daily or weekly)</li>
        <li>Follow predictable patterns</li>
        <li>Don't require human judgment</li>
        <li>Are prone to human error</li>
      </ul>
      
      <h2>Strategy 4: Build for Flexibility</h2>
      <p>Choose tools and partners that scale with you:</p>
      <ul>
        <li>Pay-as-you-go pricing models</li>
        <li>Month-to-month contracts</li>
        <li>Easy integration with your tech stack</li>
        <li>Clear upgrade paths as you grow</li>
      </ul>
      
      <h2>Strategy 5: Focus on Customer Value</h2>
      <p>Every dollar spent should drive customer value:</p>
      <ul>
        <li>Invest in customer-facing improvements first</li>
        <li>Delay back-office optimization until necessary</li>
        <li>Measure ROI on every operational expense</li>
        <li>Cut costs that don't impact customer experience</li>
      </ul>
      
      <h2>The SageStone Approach</h2>
      <p>Many of our startup clients use us as their operational backbone during growth phases. We provide:</p>
      <ul>
        <li>Flexible team sizes that grow with you</li>
        <li>No long-term contracts required</li>
        <li>Immediate capacity without hiring delays</li>
        <li>Expertise across multiple functions</li>
      </ul>
      
      <h2>Real Results</h2>
      <p>Startups working with SageStone typically see:</p>
      <ul>
        <li>2-week launch time for new teams</li>
        <li>35% cost savings vs. in-house hiring</li>
        <li>Ability to scale quickly during growth spurts</li>
        <li>More time for founders to focus on product and sales</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Scaling operations doesn't require breaking the bank. With the right strategies — outsourcing, documentation, automation, and flexibility — startups can build robust operations that support growth without draining resources.</p>
    `,
    category: 'Operations',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-08T10:00:00Z',
    tags: ['Startups', 'Operations', 'Scaling', 'Budget'],
    metaTitle: 'Scaling Startup Operations on a Budget | SageStone Inc',
    metaDescription: 'Learn how early-stage startups can build scalable operations without overspending. Smart strategies for outsourcing, automation, and flexible growth.',
  },
];

// Blog service class with CMS integration
class BlogService {
  private config: CMSConfig;
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutes cache
  // Contentful API max limit per request (used for pagination)
  private static readonly CONTENTFUL_MAX_LIMIT = 1000;

  constructor() {
    this.config = getCMSConfig();
  }

  // Get current CMS provider for debugging/display
  getProvider(): string {
    return this.config.provider;
  }

  // Helper to check if cache is valid
  private isCacheValid(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    return Date.now() - cached.timestamp < this.cacheTimeout;
  }

  // Helper to get cached data
  private getCached<T>(key: string): T | null {
    if (this.isCacheValid(key)) {
      return this.cache.get(key)?.data as T;
    }
    return null;
  }

  // Helper to set cache
  private setCache(key: string, data: unknown): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  // Fetch from Contentful API
  private async fetchFromContentful<T>(
    contentType: string,
    query: Record<string, string | number | boolean> = {}
  ): Promise<ContentfulResponse<T>> {
    const { contentfulSpaceId, contentfulAccessToken, contentfulEnvironment } = this.config;
    
    const params = new URLSearchParams({
      content_type: contentType,
      ...Object.fromEntries(
        Object.entries(query).map(([k, v]) => [k, String(v)])
      ),
    });

    const url = `https://cdn.contentful.com/spaces/${contentfulSpaceId}/environments/${contentfulEnvironment}/entries?${params}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${contentfulAccessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Contentful API error: ${response.status}`);
    }

    return response.json();
  }

  // Transform Contentful entry to BlogPost
  private transformContentfulEntry(
    entry: ContentfulEntry<ContentfulBlogPostFields>,
    includes?: { Asset?: ContentfulAsset[] }
  ): BlogPost {
    const { fields, sys } = entry;
    
    // Get image URL from included assets
    let imageUrl = '';
    if (fields.featuredImage && includes?.Asset) {
      const asset = includes.Asset.find(
        (a) => a.sys.id === fields.featuredImage?.sys.id
      );
      if (asset?.fields?.file?.url) {
        imageUrl = asset.fields.file.url.startsWith('//')
          ? `https:${asset.fields.file.url}`
          : asset.fields.file.url;
      }
    }

    // Get author image URL
    let authorImageUrl = '';
    if (fields.authorImage && includes?.Asset) {
      const asset = includes.Asset.find(
        (a) => a.sys.id === fields.authorImage?.sys.id
      );
      if (asset?.fields?.file?.url) {
        authorImageUrl = asset.fields.file.url.startsWith('//')
          ? `https:${asset.fields.file.url}`
          : asset.fields.file.url;
      }
    }

    return {
      id: sys.id,
      slug: fields.slug,
      title: fields.title,
      excerpt: fields.excerpt,
      content: fields.content,
      category: fields.category,
      author: fields.author,
      authorImage: authorImageUrl || undefined,
      readTime: fields.readTime || '5 min read',
      image: imageUrl,
      publishedAt: fields.publishedAt || sys.createdAt,
      featured: fields.featured || false,
      tags: fields.tags || [],
      metaTitle: fields.metaTitle,
      metaDescription: fields.metaDescription,
    };
  }

  // Fetch all blog posts
  async getPosts(options?: {
    category?: string;
    limit?: number;
    offset?: number;
    featured?: boolean;
  }): Promise<{ posts: BlogPost[]; total: number }> {
    // If using Contentful, fetch from API
    if (this.config.provider === 'contentful') {
      try {
        const cacheKey = `posts-${JSON.stringify(options)}`;
        const cached = this.getCached<{ posts: BlogPost[]; total: number }>(cacheKey);
        if (cached) return cached;

        const query: Record<string, string | number | boolean> = {
          order: '-fields.publishedAt,-sys.createdAt',
          include: 2, // Include linked assets
        };

        if (options?.limit) {
          query.limit = options.limit;
        }
        if (options?.offset) {
          query.skip = options.offset;
        }
        if (options?.category && options.category !== 'All') {
          query['fields.category'] = options.category;
        }
        if (options?.featured !== undefined) {
          query['fields.featured'] = options.featured;
        }

        const response = await this.fetchFromContentful<ContentfulBlogPostFields>(
          'blogPost',
          query
        );

        const posts = response.items.map((item) =>
          this.transformContentfulEntry(item, response.includes)
        );

        const result = { posts, total: response.total };
        this.setCache(cacheKey, result);
        return result;
      } catch (error) {
        console.error('Error fetching from Contentful, falling back to static:', error);
        // Fall through to static content
      }
    }

    // Use static posts as fallback
    let filteredPosts = [...staticPosts];

    if (options?.featured !== undefined) {
      filteredPosts = filteredPosts.filter((p) => p.featured === options.featured);
    }

    if (options?.category && options.category !== 'All') {
      filteredPosts = filteredPosts.filter((p) => p.category === options.category);
    }

    // Sort by date (newest first)
    filteredPosts.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    const total = filteredPosts.length;
    const offset = options?.offset ?? 0;
    const limit = options?.limit ?? filteredPosts.length;

    return {
      posts: filteredPosts.slice(offset, offset + limit),
      total,
    };
  }

  // Fetch a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (this.config.provider === 'contentful') {
      try {
        const cacheKey = `post-slug-${slug}`;
        const cached = this.getCached<BlogPost>(cacheKey);
        if (cached) return cached;

        const response = await this.fetchFromContentful<ContentfulBlogPostFields>(
          'blogPost',
          { 'fields.slug': slug, include: 2, limit: 1 }
        );

        if (response.items.length === 0) {
          return null;
        }

        const post = this.transformContentfulEntry(
          response.items[0],
          response.includes
        );
        this.setCache(cacheKey, post);
        return post;
      } catch (error) {
        console.error('Error fetching from Contentful:', error);
        // Fall through to static content
      }
    }

    const post = staticPosts.find((p) => p.slug === slug);
    return post || null;
  }

  // Fetch a single blog post by ID
  async getPostById(id: string): Promise<BlogPost | null> {
    if (this.config.provider === 'contentful') {
      try {
        const cacheKey = `post-id-${id}`;
        const cached = this.getCached<BlogPost>(cacheKey);
        if (cached) return cached;

        const response = await this.fetchFromContentful<ContentfulBlogPostFields>(
          'blogPost',
          { 'sys.id': id, include: 2, limit: 1 }
        );

        if (response.items.length === 0) {
          return null;
        }

        const post = this.transformContentfulEntry(
          response.items[0],
          response.includes
        );
        this.setCache(cacheKey, post);
        return post;
      } catch (error) {
        console.error('Error fetching from Contentful:', error);
        // Fall through to static content
      }
    }

    const post = staticPosts.find((p) => p.id === id);
    return post || null;
  }

  // Get all categories with post counts
  async getCategories(): Promise<BlogCategory[]> {
    // Fetch all posts using pagination to ensure accurate category counts
    // Contentful API has a max limit of 1000 per request, default is 100
    const allPosts: BlogPost[] = [];
    const batchSize = BlogService.CONTENTFUL_MAX_LIMIT;
    let offset = 0;
    let total: number | null = null;

    do {
      const { posts, total: fetchedTotal } = await this.getPosts({ limit: batchSize, offset });
      allPosts.push(...posts);
      // Set total only once from the first request for consistency
      if (total === null) {
        total = fetchedTotal;
      }
      // Break if no posts returned to prevent infinite loop
      if (posts.length === 0) break;
      offset += batchSize;
    } while (offset < total);
    
    const categoryMap = new Map<string, number>();

    allPosts.forEach((post) => {
      const count = categoryMap.get(post.category) || 0;
      categoryMap.set(post.category, count + 1);
    });

    const categories: BlogCategory[] = [
      { id: 'all', name: 'All', slug: 'all', count: allPosts.length },
    ];

    categoryMap.forEach((count, name) => {
      categories.push({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        count,
      });
    });

    return categories;
  }

  // Search posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    if (this.config.provider === 'contentful') {
      try {
        const response = await this.fetchFromContentful<ContentfulBlogPostFields>(
          'blogPost',
          { 
            query, // Contentful full-text search
            include: 2,
          }
        );

        return response.items.map((item) =>
          this.transformContentfulEntry(item, response.includes)
        );
      } catch (error) {
        console.error('Error searching Contentful:', error);
        // Fall through to static content
      }
    }

    const lowerQuery = query.toLowerCase();
    return staticPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }

  // Get related posts
  async getRelatedPosts(postId: string, limit: number = 3): Promise<BlogPost[]> {
    const currentPost = await this.getPostById(postId);
    if (!currentPost) return [];

    // For Contentful, fetch posts in the same category
    if (this.config.provider === 'contentful') {
      try {
        // Contentful query syntax: 'sys.id[ne]' excludes a single ID
        // See: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/inequality-operator
        const response = await this.fetchFromContentful<ContentfulBlogPostFields>(
          'blogPost',
          {
            'fields.category': currentPost.category,
            'sys.id[ne]': postId,
            limit: limit,
            include: 2,
          }
        );

        const related = response.items.map((item) =>
          this.transformContentfulEntry(item, response.includes)
        );

        // If not enough posts in the same category, fetch more
        // Note: Contentful uses 'sys.id[nin]' for "not in" array queries
        // See: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/array-with-multiple-values
        if (related.length < limit) {
          const additionalResponse = await this.fetchFromContentful<ContentfulBlogPostFields>(
            'blogPost',
            {
              'sys.id[nin]': [postId, ...related.map(p => p.id)].join(','),
              limit: limit - related.length,
              include: 2,
            }
          );

          related.push(
            ...additionalResponse.items.map((item) =>
              this.transformContentfulEntry(item, additionalResponse.includes)
            )
          );
        }

        return related;
      } catch (error) {
        console.error('Error fetching related posts from Contentful:', error);
        // Fall through to static content
      }
    }

    // Find posts in the same category, excluding the current post
    const related = staticPosts
      .filter((p) => p.id !== postId && p.category === currentPost.category)
      .slice(0, limit);

    // If not enough related posts, add from other categories
    if (related.length < limit) {
      const additional = staticPosts
        .filter((p) => p.id !== postId && !related.includes(p))
        .slice(0, limit - related.length);
      related.push(...additional);
    }

    return related;
  }

  // Clear cache (useful for manual refresh)
  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const blogService = new BlogService();

// Export hook for React components
export function useBlogService() {
  return blogService;
}
