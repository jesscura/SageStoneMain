import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HomePageHero } from "./HomePageHero";
import { SEO } from "../components/SEO";
import { 
  ArrowRight, 
  TrendingUp,
  DollarSign,
  Clock,
  Headphones,
  UserCheck,
  ShoppingBag,
  FileText,
  Home,
  Star,
  Zap,
  Users,
  Bot,
  HelpCircle
} from "lucide-react";

const aboutImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzI5NDAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const homepageStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SageStone Inc",
    url: "https://www.sagestoneinc.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SageStone Inc",
    url: "https://www.sagestoneinc.com",
    description: "SageStone Inc provides virtual assistant services, customer support, e-commerce support, social media management, web maintenance, and business operations support.",
    areaServed: "Worldwide"
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Headphones,
      title: "Customer Support Outsourcing",
      description: "24/7 omnichannel support via chat, email, and voice. Never miss a customer inquiry.",
      color: "#B14EFF",
      page: "customer-support-outsourcing"
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Virtual Assistant Services",
      description: "Store updates, orders, fulfillment, and returns handled by e-commerce support specialists.",
      color: "#8E3AFF",
      page: "ecommerce-virtual-assistant"
    },
    {
      icon: FileText,
      title: "Business Operations Support",
      description: "Data entry, workflow documentation, QA, and reporting done accurately and on time.",
      color: "#FF72E1",
      page: "business-operations-support"
    },
    {
      icon: UserCheck,
      title: "Virtual Assistant Services",
      description: "Inbox management, scheduling, CRM updates, and admin tasks handled efficiently.",
      color: "#B14EFF",
      page: "virtual-assistant-services"
    },
    {
      icon: Home,
      title: "Real Estate Virtual Assistant Support",
      description: "Lead follow-up, CRM updates, listing coordination, and client communication support.",
      color: "#8E3AFF",
      page: "real-estate-virtual-assistant"
    },
    {
      icon: Bot,
      title: "Social Media and Web Support",
      description: "Social media coordination, content updates, web maintenance, and marketing operations support.",
      color: "#FF72E1",
      page: "social-media-management-services"
    }
  ];

  const testimonials = [
    {
      quote: "SageStone reduced our eCommerce support response times by 42%. Their team feels like part of our company.",
      author: "Amanda Foster",
      role: "Founder, Flourish Boutique",
      metric: "42% faster response"
    },
    {
      quote: "Every process they streamline means one less fire for me to put out. I can finally focus on growth.",
      author: "Carlos Mendez",
      role: "Director, Summit Properties",
      metric: "35% cost reduction"
    },
    {
      quote: "From onboarding to daily support, the team at SageStone has been exceptional. Real accountability.",
      author: "Priya Sharma",
      role: "COO, CloudSync",
      metric: "14 days to launch"
    }
  ];

  const whoWeServe = [
    { title: "Shopify Merchants", description: "Scale your store with dedicated e-commerce support", icon: ShoppingBag },
    { title: "SaaS Startups", description: "Build operations without building overhead", icon: Zap },
    { title: "Real Estate Firms", description: "Property coordination and tenant communication", icon: Home },
    { title: "Service Companies", description: "Customer success and admin management", icon: Users }
  ];

  const faqs = [
    {
      question: "What services does SageStone Inc provide?",
      answer: "SageStone Inc provides virtual assistant services, customer support outsourcing, e-commerce support, real estate virtual assistant support, social media management, web maintenance, and business operations support."
    },
    {
      question: "What types of businesses does SageStone Inc support?",
      answer: "SageStone Inc supports small businesses, e-commerce brands, real estate teams, agencies, startups, and growing companies that need reliable operational support."
    },
    {
      question: "Can SageStone Inc support ongoing monthly work?",
      answer: "Yes. SageStone Inc can support ongoing administrative, customer support, marketing, e-commerce, and operations tasks depending on business needs."
    },
    {
      question: "Do you work with e-commerce stores?",
      answer: "Yes. SageStone Inc can support common e-commerce workflows such as order coordination, customer inquiries, product updates, returns, CRM tasks, and reporting."
    },
    {
      question: "What tasks can a virtual assistant handle?",
      answer: "Virtual assistants can help with inbox management, scheduling, customer support, CRM updates, order support, research, reporting, documentation, and social media coordination."
    },
    {
      question: "How do I get started with SageStone Inc?",
      answer: "Start by contacting SageStone Inc to discuss your goals, current workflow, required support, and the best way to structure the engagement."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Virtual Assistant Services, Customer Support & Business Operations | SageStone Inc"
        description="SageStone Inc helps businesses scale with virtual assistants, customer support, e-commerce operations, social media support, web maintenance, and business operations services."
        keywords="virtual assistant services, customer support outsourcing, e-commerce virtual assistant, real estate virtual assistant, social media management services, business operations support, website maintenance services"
        canonical="https://www.sagestoneinc.com/"
        ogTitle="Virtual Assistant Services, Customer Support & Business Operations | SageStone Inc"
        ogDescription="SageStone Inc helps businesses scale with virtual assistants, customer support, e-commerce operations, social media support, web maintenance, and business operations services."
        twitterTitle="Virtual Assistant Services, Customer Support & Business Operations | SageStone Inc"
        twitterDescription="SageStone Inc helps businesses scale with virtual assistants, customer support, e-commerce operations, social media support, web maintenance, and business operations services."
        structuredData={[...homepageStructuredData, faqStructuredData]}
      />
      <div className="min-h-screen bg-[var(--dark-bg)]">
        <HomePageHero onPrimaryClick={() => onNavigate("contact")} onSecondaryClick={scrollToHowItWorks} />

        <section className="py-6 bg-[var(--dark-bg-secondary)]/50 border-y border-[var(--dark-surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              <div className="text-center"><div className="flex items-center gap-2 text-white mb-1"><TrendingUp className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" /><span className="text-2xl font-bold text-[var(--color-primary-400)]">+18%</span></div><p className="text-xs text-[var(--dark-text-muted)]">CSAT Improvement</p></div>
              <div className="hidden md:block w-px h-12 bg-[var(--dark-surface)]" aria-hidden="true" />
              <div className="text-center"><div className="flex items-center gap-2 text-white mb-1"><DollarSign className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" /><span className="text-2xl font-bold text-[var(--color-primary-400)]">−35%</span></div><p className="text-xs text-[var(--dark-text-muted)]">Cost Reduction</p></div>
              <div className="hidden md:block w-px h-12 bg-[var(--dark-surface)]" aria-hidden="true" />
              <div className="text-center"><div className="flex items-center gap-2 text-white mb-1"><Clock className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" /><span className="text-2xl font-bold text-[var(--color-primary-400)]">2 weeks</span></div><p className="text-xs text-[var(--dark-text-muted)]">To Launch</p></div>
              <div className="hidden md:block w-px h-12 bg-[var(--dark-surface)]" aria-hidden="true" />
              <div className="text-center"><div className="flex items-center gap-2 text-white mb-1"><Users className="w-5 h-5 text-[var(--color-primary-400)]" aria-hidden="true" /><span className="text-2xl font-bold text-[var(--color-primary-400)]">50+</span></div><p className="text-xs text-[var(--dark-text-muted)]">Global Brands</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-white mb-4">Who we serve</h2>
              <p className="text-xl text-[var(--dark-text-muted)]">Growing brands that need operations support without the overhead</p>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeServe.map((segment, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                  <Card className="p-6 bg-[var(--dark-bg-secondary)]/50 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 transition-all duration-300 text-center h-full group">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--color-primary-400)]/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"><segment.icon className="w-7 h-7 text-[var(--color-primary-400)]" aria-hidden="true" /></div>
                    <h3 className="text-white mb-2">{segment.title}</h3>
                    <p className="text-sm text-[var(--dark-text-muted)]">{segment.description}</p>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/20">Our Services</Badge>
              <h2 className="text-white mb-4">Outsourced operations built for <span className="text-[var(--color-primary-400)]">scale</span></h2>
              <p className="text-xl text-[var(--dark-text-muted)]">We build support systems that help businesses run smarter, not harder.</p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                  <Card className="p-6 bg-[var(--dark-bg-secondary)]/60 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/50 hover:bg-[var(--dark-bg-secondary)]/80 transition-all duration-300 group h-full" style={{ borderTopColor: service.color, borderTopWidth: '2px' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${service.color}20` }}><service.icon className="w-6 h-6" style={{ color: service.color }} aria-hidden="true" /></div>
                    <h3 className="text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-[var(--dark-text-muted)] mb-4">{service.description}</p>
                    <button onClick={() => onNavigate(service.page)} className="text-sm text-[var(--color-primary-400)] hover:text-primary flex items-center gap-1 group/btn min-w-[44px] min-h-[44px]" aria-label={`Learn more about ${service.title}`}>
                      Get a Tailored Plan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
              <Button onClick={() => onNavigate("services")} variant="outline" className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]" aria-label="View all services">View all services</Button>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-[var(--dark-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-white mb-4">Built on <span className="text-[var(--color-primary-400)]">real results</span></h2><p className="text-xl text-[var(--dark-text-muted)]">Proven metrics from real client partnerships</p></ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollAnimation animation="fadeInUp" delay={0}><Card className="p-8 text-center bg-[var(--dark-bg)]/50 border-[var(--dark-surface)] relative overflow-hidden h-full"><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-400)]/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" /><TrendingUp className="w-12 h-12 text-[var(--color-primary-400)] mx-auto mb-4" aria-hidden="true" /><div className="text-5xl font-bold text-[var(--color-primary-400)] mb-2">+18%</div><h3 className="text-white mb-2">CSAT Uplift</h3><p className="text-sm text-[var(--dark-text-muted)]">Average customer satisfaction improvement with dedicated support teams</p></Card></ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={100}><Card className="p-8 text-center bg-[var(--dark-bg)]/50 border-[var(--dark-surface)] relative overflow-hidden h-full"><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" /><DollarSign className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" /><div className="text-5xl font-bold text-[var(--color-primary-400)] mb-2">−35%</div><h3 className="text-white mb-2">Cost to Serve</h3><p className="text-sm text-[var(--dark-text-muted)]">Reduction in operational costs without compromising quality</p></Card></ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={200}><Card className="p-8 text-center bg-[var(--dark-bg)]/50 border-[var(--dark-surface)] relative overflow-hidden h-full"><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-16 -mt-16" aria-hidden="true" /><Clock className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" /><div className="text-5xl font-bold text-[var(--color-primary-400)] mb-2">2 weeks</div><h3 className="text-white mb-2">Onboarding</h3><p className="text-sm text-[var(--dark-text-muted)]">From kickoff to fully operational team, ready to support your growth</p></Card></ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gradient-to-b from-[var(--dark-bg-secondary)] to-[var(--dark-bg)]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-16"><Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Client Success</Badge><h2 className="text-white mb-4">Your success story <span className="text-[var(--color-primary-400)]">starts here</span></h2><p className="text-xl text-[var(--dark-text-muted)]">Real results from real partnerships</p></ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={index * 100}>
                  <Card className="p-6 bg-[var(--dark-bg-secondary)]/50 backdrop-blur-sm border-[var(--dark-surface)] hover:border-[var(--color-primary-400)]/30 transition-all h-full">
                    <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />))}</div>
                    <div className="mb-4 px-4 py-2 bg-[var(--color-primary-400)]/10 rounded-lg border border-[var(--color-primary-400)]/20"><p className="text-sm text-[var(--color-primary-400)] font-medium">{testimonial.metric}</p></div>
                    <blockquote className="text-white mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div><p className="text-white font-medium">{testimonial.author}</p><p className="text-sm text-[var(--dark-text-muted)]">{testimonial.role}</p></div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation animation="fadeInUp" className="text-center mt-12"><Button onClick={() => onNavigate("case-studies")} variant="outline" className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]" aria-label="Read more success stories">Read more success stories</Button></ScrollAnimation>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-[var(--dark-bg)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fadeInLeft"><div className="relative"><div className="relative rounded-3xl overflow-hidden border border-[var(--dark-surface)]"><ImageWithFallback src={aboutImage} alt="SageStone team delivering business operations and virtual assistant support" className="w-full aspect-[4/3] object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/80 to-transparent" aria-hidden="true" /></div><div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-primary-400)]/30 rounded-full blur-2xl" aria-hidden="true" /></div></ScrollAnimation>
              <ScrollAnimation animation="fadeInRight"><Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30">About Us</Badge><h2 className="text-white mb-4">Your trusted partner for <span className="text-[var(--color-primary-400)]">business growth</span></h2><p className="text-lg text-[var(--dark-text-muted)] leading-relaxed mb-6">SageStone Inc is a global operations partner dedicated to helping businesses scale support, administrative work, e-commerce tasks, and back-office processes efficiently.</p><p className="text-lg text-[var(--dark-text-muted)] leading-relaxed mb-8">With experienced professionals and a commitment to consistent execution, we help clients create reliable support systems that fit their daily operations.</p><Button onClick={() => onNavigate("about")} variant="outline" className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 min-w-[44px] min-h-[44px]" aria-label="Learn more about us">Learn more about us<ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Button></ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gradient-to-b from-[var(--color-primary-600)] via-[var(--color-secondary-300)] to-[var(--color-secondary-100)]">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp" className="text-center mb-16"><Badge className="mb-4 bg-white/20 text-white border-white/30"><HelpCircle className="w-3 h-3 mr-1" aria-hidden="true" />Frequently Asked Questions</Badge><h2 className="text-white mb-4">Got questions? We've got <span className="text-[var(--color-secondary-100)]">answers</span></h2><p className="text-xl text-white/90">Everything you need to know about working with SageStone Inc</p></ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={100}><Accordion type="single" collapsible className="space-y-4">{faqs.map((faq, index) => (<AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 hover:border-white/40 transition-colors"><AccordionTrigger className="text-white hover:text-[var(--color-secondary-100)] hover:no-underline text-left py-6">{faq.question}</AccordionTrigger><AccordionContent className="text-white/80 pb-6 leading-relaxed">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={200} className="text-center mt-12"><p className="text-white/80 mb-4">Still have questions?</p><Button onClick={() => onNavigate("contact")} className="bg-white hover:bg-white/90 text-[var(--color-primary-600)] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]" aria-label="Contact us with your questions">Book a Free Operations Consultation<ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Button></ScrollAnimation>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gradient-to-r from-[var(--color-primary-400)] via-primary to-[var(--color-primary-400)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-6 text-center"><ScrollAnimation animation="fadeInUp"><h2 className="text-white mb-6">Let's build your remote operations team</h2><p className="text-xl text-white/90 mb-8">Tell us what your business needs. We'll reply within one business day.</p><div className="flex flex-wrap justify-center gap-4"><Button size="lg" onClick={() => onNavigate("contact")} className="bg-white hover:bg-white/90 text-[var(--color-primary-400)] font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]" aria-label="Get virtual assistant support">Get Virtual Assistant Support<ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" /></Button><Button size="lg" onClick={() => onNavigate("how-it-works")} variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white/10 min-w-[44px] min-h-[44px]" aria-label="See how it works">See how it works</Button></div></ScrollAnimation></div>
        </section>

        <section className="py-12 bg-[var(--dark-bg)] border-t border-[var(--dark-surface)]">
          <div className="max-w-7xl mx-auto px-6"><div className="text-center"><p className="text-sm text-[var(--dark-text-muted)]"><strong className="text-white">SageStone Inc</strong> — virtual assistant services, customer support outsourcing, e-commerce virtual assistant support, business operations support, social media management, and website maintenance services for growing companies.</p></div></div>
        </section>
      </div>
    </>
  );
}
