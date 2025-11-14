import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Clock, User, ArrowRight } from "lucide-react";

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const articles = [
    {
      title: "5 Ways to Scale Shopify Support Without Burning Out Your Team",
      excerpt: "Growing your Shopify store is exciting — until customer inquiries start overwhelming your inbox. Here's how to scale support sustainably.",
      category: "eCommerce",
      author: "Jesel Cura",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2ODA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      title: "How Property Managers Benefit from Virtual Assistants",
      excerpt: "Tenant communication, maintenance requests, leasing admin — discover how virtual assistants free up 30+ hours per week for property managers.",
      category: "Property Management",
      author: "Jesel Cura",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1762340274849-87b569b2f0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMG5ldHdvcmt8ZW58MXx8fHwxNzYyNjI3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Why Customer Success Should Be the Core of Every BPO Strategy",
      excerpt: "Most BPOs focus on cost savings. But the best outsourcing partners prioritize customer success. Here's why it matters.",
      category: "Customer Experience",
      author: "Jesel Cura",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2MjY3MTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "The Real Cost of Back-Office Operations: In-House vs. Outsourced",
      excerpt: "A complete breakdown of the true costs of managing back-office operations in-house versus outsourcing to a BPO partner.",
      category: "Operations",
      author: "Jesel Cura",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBvcGVyYXRpb25zJTIwdGVhbXxlbnwxfHx8fDE3NjI3MTQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "How to Build a Global Team That Actually Works",
      excerpt: "Best practices for managing distributed teams across time zones, cultures, and communication preferences. Lessons from 10 years of global ops.",
      category: "Remote Work",
      author: "Jesel Cura",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjI2NTkyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Data-Driven CX: Turning Customer Feedback Into Action",
      excerpt: "How to use analytics, CSAT tracking, and sentiment analysis to improve customer experience and drive business growth.",
      category: "Analytics",
      author: "Jesel Cura",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2ODA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Outsourcing Myths Debunked: What Founders Get Wrong About BPO",
      excerpt: "\"It's too expensive.\" \"Quality will suffer.\" \"I'll lose control.\" We debunk the most common misconceptions about outsourcing.",
      category: "Industry Insights",
      author: "Jesel Cura",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNjkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "From Chaos to Clarity: Streamlining Customer Support Workflows",
      excerpt: "A step-by-step guide to building efficient customer support workflows that scale with your business.",
      category: "Customer Experience",
      author: "Jesel Cura",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1594501252028-2bb7b21d01b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjcwMDM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "The Founder's Guide to Hiring Your First Virtual Assistant",
      excerpt: "What to look for, how to onboard, and how to set up your VA for success. A practical guide for first-time outsourcers.",
      category: "Remote Work",
      author: "Jesel Cura",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1758873272808-5580ed7deb44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB0ZWFtJTIwdmlkZW8lMjBjYWxsfGVufDF8fHx8MTc2MjcxNTE5NHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = [
    "All", 
    "eCommerce", 
    "Property Management",
    "Customer Experience", 
    "Operations", 
    "Remote Work", 
    "Analytics",
    "Industry Insights"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
              Outsourcing Best Practices & Remote Team Management
            </Badge>
            <h1 className="text-[#1C1B20] mb-6">
              Insights for <span className="gradient-text">modern operations</span>
            </h1>
            <p className="text-xl text-[#6D6A73] leading-relaxed">
              Expert advice, industry trends, and practical guides for scaling your business operations. 
              Written by Jesel Cura and the SageStone Inc team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[#E7E2EE] bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "gradient-bg text-white" 
                  : "border-[#E7E2EE] text-[#6D6A73] hover:border-[#B14EFF] hover:text-[#8E3AFF]"
                }
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles[0].featured && (
        <section className="py-16 bg-[#F9F8FB]">
          <div className="max-w-7xl mx-auto px-6">
            <Badge className="mb-6 bg-white text-[#8E3AFF] border-[#B14EFF]/30">
              Featured Article
            </Badge>
            <Card className="overflow-hidden border-[#E7E2EE] hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <ImageWithFallback
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B20]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-[#8E3AFF] border-0">
                      {articles[0].category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-[#1C1B20] mb-4">{articles[0].title}</h2>
                  <p className="text-lg text-[#6D6A73] mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-[#6D6A73]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="gradient-bg text-white glow-button transition-lift hover-lift min-w-[44px] min-h-[44px]" aria-label={`Read article: ${articles[0].title}`}>
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="overflow-hidden border-[#E7E2EE] hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-[#8E3AFF] border-0">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#1C1B20] mb-3 group-hover:text-[#8E3AFF] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#6D6A73] mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E7E2EE]">
                    <div className="flex items-center gap-4 text-sm text-[#6D6A73]">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 text-sm text-[#8E3AFF] hover:text-[#B14EFF] flex items-center gap-1 group">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] min-w-[44px] min-h-[44px]"
              aria-label="Load more articles"
            >
              Load more articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Stay <span className="opacity-90">in the loop</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest insights on scaling operations, customer success, and remote team management delivered monthly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              required
              aria-required="true"
              className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/95 focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button type="submit" className="bg-white !text-[#8E3AFF] hover:bg-white/90 min-w-[44px] min-h-[44px]" aria-label="Subscribe to newsletter">
              <span className="text-[#8E3AFF]">Subscribe</span>
            </Button>
          </form>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6D6A73]">
              <strong>SageStone Inc Blog & Insights:</strong> Expert articles on outsourcing best practices, customer experience tips, 
              remote team management, Shopify support, property management operations, and scaling strategies for growing businesses. 
              Written by Jesel Cura and industry experts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
