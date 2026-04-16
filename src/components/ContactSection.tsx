import { motion } from "framer-motion";
import { MessageCircle, Phone, BookOpen } from "lucide-react";

const cards = [
  { icon: MessageCircle, title: "Chat to Us", desc: "Chat to us online if you have any questions.", action: "Start Chat" },
  { icon: Phone, title: "Our Support", desc: "Our support agent will help you with your needs.", action: "Contact Us" },
  { icon: BookOpen, title: "Read Our Blog", desc: "Visit our blog for news and career tips.", action: "Read Blog" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Need Any <span className="text-gradient-primary">Help?</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-6 text-center group hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
            <span className="text-sm font-medium text-primary">{c.action} →</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
