import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="glow-dot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-elevated border-glow p-10 md:p-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
          Unlock Your Future with <span className="text-gradient-primary">DIJIT Program</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Where skills meet opportunities. Get trained by industry experts, gain hands-on experience, and step confidently into your dream job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 px-8 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-xl font-semibold">
            Browse Jobs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="h-12 px-8 border-primary/30 text-primary hover:bg-primary/10 rounded-xl">
            Explore Courses
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
