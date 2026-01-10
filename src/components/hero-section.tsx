import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import OrbitingCircles from "@/components/ui/magic-ui/orbiting-circles";
import { AnimatedBeam } from "@/components/ui/magic-ui/animated-beam";
import Sparkles from "@/components/ui/magic-ui/sparkles";
import { useRef, useEffect, useState } from "react";

interface HeroSectionProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    avatar: string;
    social: {
      github: string;
      linkedin: string;
      twitter?: string;
      dribbble?: string;
    };
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showBeam, setShowBeam] = useState(false);

  useEffect(() => {
    // Check if refs are ready after mount
    if (avatarRef.current && buttonRef.current) {
      setShowBeam(true);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      <div className="absolute inset-0 w-full h-full" ref={containerRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
        <Sparkles
          className="opacity-30"
          size="md"
          density="medium"
          speed="slow"
        />
        {showBeam && (
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={avatarRef}
            toRef={buttonRef}
            gradientStartColor="#8b5cf6"
            gradientStopColor="#06b6d4"
            delay={2}
          />
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  {data.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl text-muted-foreground mb-8 font-medium"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {data.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10"
            >
              <Button
                ref={buttonRef}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-primary/30 transition-all duration-300 backdrop-blur-sm border-0 text-white font-semibold px-8 py-6 text-lg group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:bg-primary/10 bg-background/50 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/30">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span className="font-medium">{data.location}</span>
              </div>
              <div className="flex gap-4">
                <a
                  href={data.social.github}
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={data.social.linkedin}
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 max-w-full">
              <div className="flex h-full w-full items-center justify-center px-4">
                <div className="relative max-w-full">
                  <div ref={avatarRef} className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full z-10 mx-auto">
                    <img
                      src={data.avatar || "/placeholder.svg"}
                      alt={data.name}
                      className="w-full h-full rounded-full object-cover border-4 border-primary/40 shadow-2xl backdrop-blur-sm glow-animation"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl -z-10" />
                </div>

                <OrbitingCircles
                  className="h-12 w-12 border-none bg-transparent"
                  radius={160}
                  duration={20}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl backdrop-blur-sm border border-primary/30 hover:scale-110 transition-transform">
                    <Github className="h-6 w-6" />
                  </div>
                </OrbitingCircles>

                <OrbitingCircles
                  className="h-12 w-12 border-none bg-transparent"
                  radius={160}
                  duration={20}
                  delay={10}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-xl backdrop-blur-sm border border-accent/30 hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6" />
                  </div>
                </OrbitingCircles>

                <OrbitingCircles
                  className="h-10 w-10 border-none bg-transparent"
                  radius={190}
                  duration={25}
                  reverse
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-secondary/60 to-secondary/40 backdrop-blur-sm shadow-lg border border-secondary/40 pulse-glow" />
                </OrbitingCircles>

                <OrbitingCircles
                  className="h-8 w-8 border-none bg-transparent"
                  radius={220}
                  duration={30}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 backdrop-blur-sm shadow-md border border-primary/30" />
                </OrbitingCircles>

                <OrbitingCircles
                  className="h-6 w-6 border-none bg-transparent"
                  radius={250}
                  duration={35}
                  delay={15}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm shadow-sm" />
                </OrbitingCircles>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
