import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck, Cloud, GitBranch, Sparkles, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  { icon: Code2, name: "Full Stack Development", desc: "React.js, Node.js, MongoDB" },
  { icon: Database, name: "Data Science & ML", desc: "Python, TensorFlow, Tableau" },
  { icon: ShieldCheck, name: "Cybersecurity", desc: "Ethical hacking, CEH, CompTIA" },
  { icon: Cloud, name: "Cloud Computing", desc: "AWS, Azure, Google Cloud" },
  { icon: GitBranch, name: "DevOps", desc: "Docker, Kubernetes, CI/CD" },
  { icon: Sparkles, name: "AI & Machine Learning", desc: "Deep learning, NLP, PyTorch" },
  { icon: Globe, name: "Web Development", desc: "HTML, CSS, React, Angular" },
  { icon: Smartphone, name: "Mobile App Dev", desc: "React Native, Flutter, Swift" },
];

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          Training Programs
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Your Gateway to a <span className="text-gradient-primary">Successful Career</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Industry-relevant training designed to make you job-ready with hands-on experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card-elevated p-5 group hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-1">{c.name}</h3>
            <p className="text-xs text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          View All Courses
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  </section>
);

export default CoursesSection;
