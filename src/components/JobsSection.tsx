import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Java Full Stack Developer", company: "Pratyin", experience: "6 years", openings: 1, salary: "22 LPA", location: "Bangalore", posted: "16 days ago" },
  { title: "Cloud Engineer", company: "XRG", experience: "7 years", openings: 3, salary: "15 LPA", location: "Noida", posted: "28 days ago" },
  { title: "Data Engineer", company: "XRG", experience: "6+ years", openings: 1, salary: "11 LPA", location: "Remote", posted: "28 days ago" },
  { title: "MEAN Stack Developer", company: "XRG", experience: "5+ years", openings: 1, salary: "11 LPA", location: "Remote", posted: "29 days ago" },
  { title: "Database Administrator", company: "XRG", experience: "7+ years", openings: 2, salary: "13 LPA", location: "Remote", posted: "31 days ago" },
  { title: "DevOps Engineer", company: "TechCorp", experience: "4+ years", openings: 2, salary: "18 LPA", location: "Hyderabad", posted: "10 days ago" },
];

const JobsSection = () => (
  <section id="jobs" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          Latest Jobs
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Jobs You May Be <span className="text-gradient-primary">Interested In</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Bridging the gap between talent and opportunity with AI-powered matching.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-elevated p-5 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{job.company}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                <Clock className="w-3 h-3" /> {job.experience}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                <Users className="w-3 h-3" /> {job.openings} Opening{job.openings > 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                <MapPin className="w-3 h-3" /> {job.location}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
              <span className="text-sm font-semibold text-primary">{job.salary}</span>
              <span className="text-xs text-muted-foreground">{job.posted}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
          Browse All Jobs
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  </section>
);

export default JobsSection;
