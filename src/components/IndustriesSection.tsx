import { motion } from "framer-motion";
import { Car, HeartPulse, Landmark, Cpu, Cog, Zap } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive Tech", desc: "Embedded systems, ADAS, e-mobility, AI" },
  { icon: HeartPulse, name: "Pharma & Healthcare", desc: "Medical devices, imaging, API development" },
  { icon: Landmark, name: "BFSI Technology", desc: "Core banking, fintech, data science" },
  { icon: Cpu, name: "Semiconductor", desc: "5G, chip design, SoC, embedded AI" },
  { icon: Cog, name: "Product Engineering", desc: "IoT, big data, cloud ERP, AI engineering" },
  { icon: Zap, name: "Startup Solutions", desc: "SaaS, PaaS, cloud, platform engineering" },
];

const IndustriesSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
          Our Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Industries We <span className="text-gradient-accent">Serve</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-elevated p-5 group hover:border-accent/30 transition-all text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ind.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-1">{ind.name}</h3>
            <p className="text-xs text-muted-foreground">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
