import logo from "figma:asset/6d38b07fe447faa80ae1170d286b77773d2ec3dc.png";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const serviceLinks = [
    { label: "Virtual Assistant Services", page: "virtual-assistant-services" },
    { label: "Customer Support Outsourcing", page: "customer-support-outsourcing" },
    { label: "E-Commerce Virtual Assistant", page: "ecommerce-virtual-assistant" },
    { label: "Real Estate Virtual Assistant", page: "real-estate-virtual-assistant" },
    { label: "Social Media Management", page: "social-media-management-services" },
    { label: "Business Operations Support", page: "business-operations-support" },
    { label: "Website Maintenance", page: "web-design-maintenance" }
  ];

  return (
    <footer className="bg-[var(--dark-bg)] text-white border-t border-[var(--dark-surface)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <ImageWithFallback
              src={logo}
              alt="SageStone Inc logo"
              className="h-10 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <h2 className="text-white text-lg mb-2">SageStone Inc</h2>
            <p className="text-sm text-[var(--dark-text-muted)] mb-6 max-w-xs">
              Accountable people. Global operations. We help businesses scale smarter with virtual assistant services, customer support, and business operations support.
            </p>

            <div className="flex items-center gap-4 mb-6" role="list" aria-label="Social media links">
              <a href="https://www.linkedin.com/company/sagestonelab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--color-primary-400)] flex items-center justify-center transition-colors" aria-label="Follow SageStone Inc on LinkedIn" role="listitem">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/sagestonelab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--color-primary-400)] flex items-center justify-center transition-colors" aria-label="Follow SageStone Inc on Twitter" role="listitem">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/@sagestonelab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[var(--dark-surface)] hover:bg-[var(--color-primary-400)] flex items-center justify-center transition-colors" aria-label="Subscribe to SageStone Inc on YouTube" role="listitem">
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            <div className="space-y-2 text-sm text-[var(--dark-text-muted)]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-primary-400)]" aria-hidden="true" />
                <span>hello@sagestoneinc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary-400)]" aria-hidden="true" />
                <span>USA & Philippines</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-solutions">Services</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-solutions">
              {serviceLinks.map((link) => (
                <li key={link.page}>
                  <button onClick={() => onNavigate(link.page)} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-company">Company</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-company">
              <li><button onClick={() => onNavigate("about")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate("how-it-works")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate("case-studies")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate("careers")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigate("contact")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4" id="footer-resources">Resources</h3>
            <ul className="space-y-3 text-sm" aria-labelledby="footer-resources">
              <li><button onClick={() => onNavigate("pricing")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate("blog")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate("industries")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Industries</button></li>
              <li><button onClick={() => onNavigate("services")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">All Services</button></li>
              <li><button onClick={() => onNavigate("contact")} className="text-[var(--dark-text-muted)] hover:text-[var(--color-primary-400)] transition-colors">Get a Quote</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--dark-surface)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--dark-text-muted)]">
          <p>© 2025 SageStone Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate("privacy")} className="hover:text-[var(--color-primary-400)] transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate("terms")} className="hover:text-[var(--color-primary-400)] transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
