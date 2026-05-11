import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { SEO } from "../components/SEO";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

type ServiceConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  related: Array<{ label: string; page: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const baseFaqs = [
  {
    question: "What types of businesses does SageStone Inc support?",
    answer: "SageStone Inc supports small businesses, e-commerce brands, real estate teams, agencies, startups, and growing companies that need reliable operational support."
  },
  {
    question: "Can SageStone Inc support ongoing monthly work?",
    answer: "Yes. SageStone Inc can support ongoing administrative, customer support, marketing, e-commerce, and operations tasks depending on business needs."
  },
  {
    question: "How do we get started?",
    answer: "Start by contacting SageStone Inc to discuss your goals, current workflow, required support, and the best way to structure the engagement."
  }
];

const services: Record<string, ServiceConfig> = {
  "virtual-assistant-services": {
    slug: "virtual-assistant-services",
    title: "Virtual Assistant Services",
    metaTitle: "Virtual Assistant Services for Growing Businesses | SageStone Inc",
    metaDescription: "Delegate administrative, operational, customer support, e-commerce, and marketing tasks to reliable virtual assistants from SageStone Inc.",
    h1: "Virtual Assistant Services for Growing Businesses",
    eyebrow: "Reliable virtual support",
    intro: "Delegate recurring administrative, operational, customer-facing, and marketing coordination work to a trained virtual assistant team built around your workflows.",
    sections: [
      { title: "What our virtual assistants can handle", items: ["Inbox and calendar management", "CRM updates and lead follow-up", "Customer support coordination", "Research, reporting, and documentation"] },
      { title: "Who this service is for", items: ["Founders and operators with too many daily tasks", "Agencies that need reliable execution support", "Small teams that need flexible monthly capacity", "Businesses preparing to scale without hiring full-time staff"] },
      { title: "Administrative and operations support", items: ["Scheduling and task coordination", "Process documentation", "Data entry and quality checks", "Vendor and client communication support"] },
      { title: "Customer support assistance", items: ["Ticket triage", "Response templates and helpdesk workflows", "Escalation support", "Customer follow-up tracking"] },
      { title: "E-commerce and order support", items: ["Order tracking", "Return and exchange coordination", "Product listing support", "Customer inquiry handling"] },
      { title: "Social media and marketing support", items: ["Content scheduling", "Engagement tracking", "Campaign coordination", "Basic reporting"] },
      { title: "Why choose SageStone Inc", items: ["Structured onboarding", "Clear reporting", "Flexible support capacity", "Operations-minded execution"] }
    ],
    related: [
      { label: "customer support outsourcing", page: "customer-support-outsourcing" },
      { label: "e-commerce virtual assistant services", page: "ecommerce-virtual-assistant" },
      { label: "business operations support", page: "business-operations-support" }
    ],
    faqs: [
      {
        question: "What tasks can a virtual assistant handle?",
        answer: "Virtual assistants can help with inbox management, scheduling, customer support, CRM updates, order support, research, reporting, documentation, and social media coordination."
      },
      ...baseFaqs
    ]
  },
  "customer-support-outsourcing": {
    slug: "customer-support-outsourcing",
    title: "Customer Support Outsourcing",
    metaTitle: "Customer Support Outsourcing Services | SageStone Inc",
    metaDescription: "SageStone Inc provides outsourced customer support services to help businesses improve response times, manage tickets, and support customers with care.",
    h1: "Customer Support Outsourcing Services",
    eyebrow: "Responsive customer care",
    intro: "Improve coverage, response consistency, and customer experience with outsourced support workflows designed around your brand voice and escalation process.",
    sections: [
      { title: "Reliable customer support for growing teams", items: ["Dedicated support coverage", "Brand-aligned response handling", "Ticket queue management", "Consistent customer follow-through"] },
      { title: "Channels supported", items: ["Email support", "Live chat support", "Voice coordination when required", "Helpdesk and CRM workflows"] },
      { title: "Ticket management", items: ["Ticket triage and tagging", "Priority routing", "Status updates", "Resolution tracking"] },
      { title: "Response time and quality control", items: ["Template refinement", "QA review support", "SLA-focused operations", "Customer satisfaction monitoring"] },
      { title: "Escalation workflows", items: ["Defined handoff rules", "Issue categorization", "Internal team coordination", "Follow-up documentation"] },
      { title: "Reporting and performance tracking", items: ["Volume reports", "Response time summaries", "Recurring issue visibility", "Operational improvement recommendations"] }
    ],
    related: [
      { label: "virtual assistant services", page: "virtual-assistant-services" },
      { label: "e-commerce virtual assistant services", page: "ecommerce-virtual-assistant" },
      { label: "business operations support", page: "business-operations-support" }
    ],
    faqs: [
      { question: "Can SageStone Inc help manage customer tickets?", answer: "Yes. SageStone Inc can help triage, respond to, escalate, and track customer tickets based on your helpdesk workflow and brand guidelines." },
      ...baseFaqs
    ]
  },
  "ecommerce-virtual-assistant": {
    slug: "ecommerce-virtual-assistant",
    title: "E-Commerce Virtual Assistant",
    metaTitle: "E-Commerce Virtual Assistant Services | SageStone Inc",
    metaDescription: "Get e-commerce virtual assistant support for order management, customer inquiries, product updates, CRM tasks, and back-office operations.",
    h1: "E-Commerce Virtual Assistant Services",
    eyebrow: "E-commerce operations support",
    intro: "Keep your store operations moving with support for orders, customer inquiries, catalog updates, reporting, and back-office e-commerce workflows.",
    sections: [
      { title: "Support for e-commerce operations", items: ["Daily operations coordination", "Store task management", "Customer communication support", "Back-office execution"] },
      { title: "Order and fulfillment support", items: ["Order status checks", "Fulfillment coordination", "Return and exchange tracking", "Shipping issue follow-up"] },
      { title: "Customer inquiries and ticket support", items: ["Product questions", "Order updates", "Refund and return inquiries", "Escalation documentation"] },
      { title: "Product listing and catalog assistance", items: ["Product data entry", "Listing updates", "Catalog cleanup", "Inventory coordination"] },
      { title: "CRM and reporting support", items: ["Customer record updates", "Order issue reporting", "Recurring problem tracking", "Operational summaries"] },
      { title: "Tools and platforms supported", items: ["Shopify and e-commerce admin workflows", "Helpdesks and inbox tools", "CRMs and spreadsheets", "Project management systems"] }
    ],
    related: [
      { label: "customer support outsourcing", page: "customer-support-outsourcing" },
      { label: "virtual assistant services", page: "virtual-assistant-services" },
      { label: "social media management services", page: "social-media-management-services" }
    ],
    faqs: [
      { question: "Can SageStone Inc support Shopify or online store operations?", answer: "Yes. SageStone Inc can support common e-commerce workflows such as order coordination, customer inquiries, product updates, returns, CRM tasks, and reporting." },
      ...baseFaqs
    ]
  },
  "real-estate-virtual-assistant": {
    slug: "real-estate-virtual-assistant",
    title: "Real Estate Virtual Assistant",
    metaTitle: "Real Estate Virtual Assistant Services | SageStone Inc",
    metaDescription: "SageStone Inc helps real estate professionals with administrative support, lead management, CRM updates, listing coordination, and client communication.",
    h1: "Real Estate Virtual Assistant Services",
    eyebrow: "Support for real estate teams",
    intro: "Give your real estate team more capacity with virtual assistant support for lead follow-up, CRM maintenance, listing coordination, calendars, and client communication.",
    sections: [
      { title: "Virtual assistant support for real estate teams", items: ["Administrative coordination", "Lead pipeline support", "Listing task management", "Client communication assistance"] },
      { title: "Lead management and follow-up", items: ["Lead capture review", "Follow-up reminders", "Pipeline status updates", "Appointment coordination"] },
      { title: "CRM updates", items: ["Contact record maintenance", "Deal stage updates", "Notes and activity logging", "Data cleanup"] },
      { title: "Listing coordination", items: ["Checklist tracking", "Document coordination", "Vendor follow-up", "Marketing task support"] },
      { title: "Calendar and inbox management", items: ["Showing coordination", "Meeting scheduling", "Inbox triage", "Task reminders"] },
      { title: "Client communication support", items: ["Status update drafting", "Follow-up coordination", "Inquiry routing", "Escalation documentation"] }
    ],
    related: [
      { label: "virtual assistant services", page: "virtual-assistant-services" },
      { label: "business operations support", page: "business-operations-support" },
      { label: "customer support outsourcing", page: "customer-support-outsourcing" }
    ],
    faqs: [
      { question: "What can a real estate virtual assistant help with?", answer: "A real estate virtual assistant can help with CRM updates, lead follow-up, listing coordination, scheduling, inbox management, client communication, and administrative workflows." },
      ...baseFaqs
    ]
  },
  "social-media-management-services": {
    slug: "social-media-management-services",
    title: "Social Media Management Services",
    metaTitle: "Social Media Management Services | SageStone Inc",
    metaDescription: "SageStone Inc supports businesses with social media scheduling, content coordination, engagement tracking, and marketing operations.",
    h1: "Social Media Management Services",
    eyebrow: "Marketing operations support",
    intro: "Stay consistent across social channels with support for content scheduling, coordination, engagement tracking, and marketing operations workflows.",
    sections: [
      { title: "Social media support for busy teams", items: ["Content calendar coordination", "Publishing support", "Asset organization", "Campaign task tracking"] },
      { title: "Content scheduling", items: ["Post scheduling", "Caption coordination", "Publishing checklist management", "Approval workflow support"] },
      { title: "Community engagement support", items: ["Comment monitoring", "Message routing", "Engagement tracking", "Escalation notes"] },
      { title: "Reporting and coordination", items: ["Performance summaries", "Campaign status updates", "Content inventory tracking", "Recurring task management"] },
      { title: "Platform support", items: ["Instagram and Facebook workflows", "LinkedIn coordination", "TikTok content task support", "Scheduling and reporting tools"] }
    ],
    related: [
      { label: "virtual assistant services", page: "virtual-assistant-services" },
      { label: "e-commerce virtual assistant services", page: "ecommerce-virtual-assistant" },
      { label: "web design and website maintenance services", page: "web-design-maintenance" }
    ],
    faqs: [
      { question: "Does SageStone Inc create social media strategy?", answer: "SageStone Inc can support social media operations such as scheduling, coordination, tracking, and engagement workflows. Strategy scope can be discussed during onboarding based on your business needs." },
      ...baseFaqs
    ]
  },
  "business-operations-support": {
    slug: "business-operations-support",
    title: "Business Operations Support",
    metaTitle: "Business Operations Support Services | SageStone Inc",
    metaDescription: "SageStone Inc helps companies streamline back-office work, documentation, reporting, workflows, customer operations, and administrative processes.",
    h1: "Business Operations Support Services",
    eyebrow: "Back-office and workflow support",
    intro: "Streamline recurring operational work with support for documentation, reporting, workflow coordination, admin tasks, and customer operations.",
    sections: [
      { title: "Operational support for growing businesses", items: ["Recurring workflow coordination", "Task ownership", "Back-office assistance", "Internal team support"] },
      { title: "Admin and back-office workflows", items: ["Data entry", "Document management", "Inbox and calendar support", "Billing and reporting coordination"] },
      { title: "Process documentation", items: ["SOP drafting support", "Checklist maintenance", "Workflow mapping", "Knowledge base updates"] },
      { title: "Reporting and coordination", items: ["Weekly summaries", "Metric tracking", "Project status updates", "Operational issue logging"] },
      { title: "Team support", items: ["Cross-functional coordination", "Meeting prep", "Follow-up management", "Internal communication support"] }
    ],
    related: [
      { label: "virtual assistant services", page: "virtual-assistant-services" },
      { label: "customer support outsourcing", page: "customer-support-outsourcing" },
      { label: "web design and website maintenance services", page: "web-design-maintenance" }
    ],
    faqs: [
      { question: "What is business operations support?", answer: "Business operations support covers recurring administrative, documentation, reporting, workflow, customer operations, and coordination tasks that keep a company running efficiently." },
      ...baseFaqs
    ]
  },
  "web-design-maintenance": {
    slug: "web-design-maintenance",
    title: "Web Design and Maintenance",
    metaTitle: "Web Design and Website Maintenance Services | SageStone Inc",
    metaDescription: "SageStone Inc provides website design, content updates, maintenance support, and ongoing web operations for growing businesses.",
    h1: "Web Design and Website Maintenance Services",
    eyebrow: "Website operations support",
    intro: "Keep your website current and conversion-ready with support for design updates, page edits, landing page coordination, and ongoing web operations.",
    sections: [
      { title: "Website support for business teams", items: ["Website update coordination", "Content changes", "Landing page support", "Web operations assistance"] },
      { title: "Design and content updates", items: ["Page copy updates", "Image swaps", "CTA updates", "Basic layout coordination"] },
      { title: "Maintenance and monitoring", items: ["Routine review support", "Broken-link checks", "Content QA", "Update documentation"] },
      { title: "Landing page support", items: ["Campaign page coordination", "Conversion-focused copy placement", "Form and CTA review", "Launch checklists"] },
      { title: "Website operations", items: ["Content calendars", "SEO task coordination", "Analytics handoff support", "Page improvement tracking"] }
    ],
    related: [
      { label: "business operations support", page: "business-operations-support" },
      { label: "social media management services", page: "social-media-management-services" },
      { label: "virtual assistant services", page: "virtual-assistant-services" }
    ],
    faqs: [
      { question: "Can SageStone Inc help maintain an existing website?", answer: "Yes. SageStone Inc can support website content updates, maintenance coordination, landing page changes, QA checks, and web operations tasks for growing businesses." },
      ...baseFaqs
    ]
  }
};

const serviceRoutes = Object.values(services);

function createBreadcrumbSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sagestoneinc.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: `https://www.sagestoneinc.com/${service.slug}/`
      }
    ]
  };
}

function createServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "SageStone Inc",
      url: "https://www.sagestoneinc.com"
    },
    areaServed: "Worldwide",
    url: `https://www.sagestoneinc.com/${service.slug}/`
  };
}

function createFaqSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const service = services[slug] || services["virtual-assistant-services"];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://www.sagestoneinc.com/${service.slug}/`}
        ogTitle={service.metaTitle}
        ogDescription={service.metaDescription}
        twitterTitle={service.metaTitle}
        twitterDescription={service.metaDescription}
        structuredData={[createServiceSchema(service), createBreadcrumbSchema(service), createFaqSchema(service)]}
      />

      <main className="min-h-screen bg-[var(--dark-bg)] text-white">
        <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)]">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #B14EFF 1px, transparent 1px), linear-gradient(to bottom, #B14EFF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">
                {service.eyebrow}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">{service.h1}</h1>
              <p className="text-xl text-[var(--dark-text-muted)] leading-relaxed mb-8 max-w-3xl">{service.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => onNavigate("contact")} size="lg" className="bg-[var(--color-primary-400)] hover:bg-primary text-white font-semibold min-w-[44px] min-h-[44px]">
                  Book a Free Operations Consultation
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
                <Button onClick={() => onNavigate("services")} size="lg" variant="outline" className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]">
                  View all services
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-[var(--dark-bg)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {service.sections.map((section) => (
                <Card key={section.title} className="p-6 bg-[var(--dark-bg-secondary)]/60 border-[var(--dark-surface)] h-full">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-400)]/15 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl text-white mb-4">{section.title}</h2>
                  <ul className="space-y-3 text-[var(--dark-text-muted)]">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-[var(--color-primary-400)] mt-1" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[var(--dark-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <Badge className="mb-4 bg-white/10 text-white border-white/20">Related services</Badge>
                <h2 className="text-3xl text-white mb-4">Build a complete support system</h2>
                <p className="text-[var(--dark-text-muted)] mb-6">Many teams combine this service with related operations support to cover more of the customer journey and back-office workload.</p>
                <div className="flex flex-wrap gap-3">
                  {service.related.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => onNavigate(item.page)}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-surface)] px-4 py-3 text-sm text-[var(--color-primary-400)] hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 transition-colors min-h-[44px]"
                    >
                      {item.label}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
              <Card className="p-8 bg-[var(--dark-bg)]/70 border-[var(--dark-surface)]">
                <h2 className="text-2xl text-white mb-4">Ready to discuss your support needs?</h2>
                <p className="text-[var(--dark-text-muted)] mb-6">Share your goals, recurring tasks, tools, and current bottlenecks. SageStone Inc will help define the right support structure.</p>
                <Button onClick={() => onNavigate("contact")} className="bg-[var(--color-primary-400)] hover:bg-primary text-white font-semibold min-w-[44px] min-h-[44px]">
                  Discuss Your Support Needs
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gradient-to-b from-[var(--dark-bg-secondary)] to-[var(--dark-bg)]">
          <div className="max-w-4xl mx-auto px-6">
            <Badge className="mb-4 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">FAQs</Badge>
            <h2 className="text-3xl text-white mb-8">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="bg-[var(--dark-bg-secondary)]/60 border border-[var(--dark-surface)] rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[var(--color-primary-400)] hover:no-underline text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--dark-text-muted)] pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
}

export { serviceRoutes };
