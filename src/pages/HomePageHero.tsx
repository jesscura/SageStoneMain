/**
 * HomePageHero - conversion-focused hero for SageStone Inc
 */

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import HeroImage from "../assets/HeroImage.jpg";

interface WindowWithAnalytics {
  gtag?: (...args: unknown[]) => void;
  posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
}

function track(eventName: string, properties?: Record<string, unknown>): void {
  try {
    const win = typeof window !== "undefined" ? (window as unknown as WindowWithAnalytics) : null;
    if (win?.gtag) {
      win.gtag("event", eventName, properties);
    }
    if (win?.posthog?.capture) {
      win.posthog.capture(eventName, properties);
    }
  } catch {
    // No-op if analytics are not configured.
  }
}

interface HomePageHeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export function HomePageHero({ onPrimaryClick, onSecondaryClick }: HomePageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const cardStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const handlePrimaryClick = () => {
    track("hero_primary_cta_click", { location: "home_hero" });
    onPrimaryClick();
  };

  const handleSecondaryClick = () => {
    track("hero_secondary_cta_click", { location: "home_hero" });
    onSecondaryClick();
  };

  const floatingMetrics = [
    { label: "Reliable support systems", value: null as string | null, icon: Users, color: "#B14EFF" },
    { label: "Built for daily execution", value: "Operations Support", icon: TrendingUp, color: "#FF72E1" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-bg-secondary)] to-[var(--dark-bg)]">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #B14EFF 1px, transparent 1px), linear-gradient(to bottom, #B14EFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--color-primary-400)]/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[var(--color-primary-400)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[var(--color-primary-400)]/10 text-[var(--color-primary-400)] border-[var(--color-primary-400)]/30 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" aria-hidden="true" />
                Virtual Assistant Services & Operations Support
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-white mb-6 text-4xl lg:text-5xl font-bold leading-tight">
              Virtual Assistant Services and Business Operations Support for Growing Companies
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-[var(--dark-text-muted)] leading-relaxed mb-10">
              SageStone helps businesses scale with virtual assistants, customer support, e-commerce operations,
              social media support, website maintenance, and business operations services.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-[var(--color-primary-400)] hover:bg-primary text-white font-semibold transition-all hover:scale-105 min-w-[44px] min-h-[44px]"
                aria-label="Book a free operations consultation with SageStone"
              >
                Book a Free Operations Consultation
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleSecondaryClick}
                className="border-[var(--color-primary-400)] text-[var(--color-primary-400)] hover:bg-[var(--color-primary-400)]/10 transition-all min-w-[44px] min-h-[44px]"
                aria-label="Learn more about SageStone services"
              >
                Learn more
              </Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-[var(--dark-text-muted)]/80">
              Built for small businesses, e-commerce brands, real estate teams, agencies, startups, and operators.
            </motion.p>
          </motion.div>

          <motion.div variants={cardStagger} initial="hidden" animate="visible" className="relative">
            <motion.div variants={fadeInScale} className="relative rounded-3xl overflow-hidden border border-[var(--dark-surface)] bg-gradient-to-br from-[var(--dark-bg-secondary)] via-[var(--dark-bg)] to-[var(--dark-bg-secondary)]">
              <div className="aspect-[4/5] lg:aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback src={HeroImage} alt="Virtual assistant and business operations support for growing companies" className="w-full h-full object-cover" eager />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)]/90 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-400)] to-primary rounded-full blur-3xl opacity-30" aria-hidden="true" />
            </motion.div>

            <motion.div variants={cardStagger} className="absolute -bottom-4 -left-4 lg:left-auto lg:-right-6 lg:bottom-16 space-y-3">
              {floatingMetrics.map((metric, index) => (
                <motion.div key={index} variants={fadeInScale}>
                  <Card className="p-3 lg:p-4 bg-[var(--dark-bg-secondary)]/95 backdrop-blur-md border-[var(--dark-surface)] shadow-xl min-w-[160px] lg:min-w-[180px]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${metric.color}20` }}>
                        <metric.icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: metric.color }} aria-hidden="true" />
                      </div>
                      <div>
                        {metric.value ? (
                          <>
                            <p className="text-xs text-[var(--dark-text-muted)]/70">{metric.label}</p>
                            <p className="text-lg lg:text-xl font-bold text-white">{metric.value}</p>
                          </>
                        ) : (
                          <p className="text-sm lg:text-base font-semibold text-white">{metric.label}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
