import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
              dp
            </div>
            <span className="font-display font-semibold text-foreground">DIJIT Program</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered talent platform connecting skilled professionals with top companies.
          </p>
        </div>

        {[
          { title: "Platform", links: ["Jobs", "Courses", "Companies", "Blog"] },
          { title: "Company", links: ["About", "Services", "Contact", "Careers"] },
          { title: "Legal", links: ["Privacy Policy", "Terms", "Cookie Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 max-w-sm">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="w-full h-10 pl-10 pr-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 DIJIT Program. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
