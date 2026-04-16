import { motion } from "framer-motion";
import { Target, Crown, Settings } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Talent Acquisition",
    description: "Innovative sourcing techniques combined with thorough market understanding to deliver candidates who fit seamlessly into your team.",
  },
  {
    icon: Crown,
    title: "Executive Search & Board Hiring",
    description: "Recruiting senior-level executives through robust role and skill mapping, plus CXO mapping for internal restructuring.",
  },
  {
    icon: Settings,
    title: "Recruitment Process Outsourcing",
    description: "End-to-end recruitment management from candidate sourcing to onboarding, allowing your team to focus on core business.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Talent Acquisition & <span className="text-gradient-primary">Recruitment</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprehensive solutions to meet diverse hiring needs across industries.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-8 group hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
