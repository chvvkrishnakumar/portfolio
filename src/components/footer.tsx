import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  data: {
    name: string;
    social: {
      github: string;
      linkedin: string;
    };
    email: string;
  };
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-primary mb-2">
              {"<Krishna />"}
            </div>
            <p className="text-muted-foreground">
              © 2026 {data.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={data.social.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={data.social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
