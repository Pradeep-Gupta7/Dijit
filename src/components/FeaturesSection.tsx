import { motion } from "framer-motion";
import { Brain, Rocket, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Matching",
    description: "Machine learning algorithms match candidates to roles based on skills, experience, and company fit.",
  },
  {
    icon: Rocket,
    title: "Train & Deploy",
    description: "We train job seekers on tech stacks aligned with client requirements and deploy them directly into projects.",
  },
  {
    icon: Shield,
    title: "Managed Services",
    description: "Pre-vetted, remote-ready developers through a managed service model for plug-and-play staffing.",
  },
  {
    icon: BarChart3,
    title: "Live Dashboard",
    description: "Post jobs, review candidates, conduct interviews, and monitor hiring funnels in real time.",
  },
];

const FeaturesSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="glow-dot -top-32 left-1/2 -translate-x-1/2" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
          DIJIT Job Marketplace
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          AI-Powered Platform for the <span className="text-gradient-accent">Future of Hiring</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-6 text-center group hover:border-accent/30 transition-all"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <f.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
