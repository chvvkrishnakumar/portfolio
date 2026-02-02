import { motion } from "framer-motion";
import IconCloud from "@/components/ui/magic-ui/icon-cloud";
import Sparkles from "@/components/ui/magic-ui/sparkles";
import Marquee from "@/components/ui/magic-ui/marquee";
import { MagicCard } from "@/components/ui/magic-ui/magic-card";
import { Code2, Database, Palette, Layers } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface SkillsSectionProps {
  data: {
    technical: Skill[];
    soft: string[];
  };
}

export function SkillsSection({ data }: SkillsSectionProps) {
  const skillIcons = [
    "typescript",
    "javascript",
    "react",
    "nodejs",
    "docker",
    "postgresql",
    "mongodb",
    "firebase",
    "git",
    "github",
    "figma",
    "tailwindcss",
    "bun",
    "express",
    "fastify",
    "socketdotio",
    "reactnative",
  ];

  // Group skills by category
  const groupedSkills = data.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  // Category icons and colors
  const categoryConfig: Record<string, { icon: typeof Code2; color: string }> = {
    Frontend: { icon: Code2, color: "from-purple-500 to-pink-500" },
    Backend: { icon: Layers, color: "from-blue-500 to-cyan-500" },
    Database: { icon: Database, color: "from-green-500 to-emerald-500" },
    "Version Control": { icon: Palette, color: "from-orange-500 to-yellow-500" },
  };

  // Split skills for marquee rows
  const firstRow = data.technical.slice(0, Math.ceil(data.technical.length / 2));
  const secondRow = data.technical.slice(Math.ceil(data.technical.length / 2));

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-20">
      <Sparkles className="opacity-10" size="sm" density="low" speed="slow" />
      
      {/* Icon Cloud Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none scale-150">
        <IconCloud iconSlugs={skillIcons} />
      </div>
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:25s]">
              {firstRow.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex items-center justify-center px-4 py-2 mx-2"
                >
                  <div className="flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 px-6 py-3 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
              {secondRow.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex items-center justify-center px-4 py-2 mx-2"
                >
                  <div className="flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background"></div>
          </div>
        </motion.div>

        {/* Category Cards with Magic UI */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {Object.entries(groupedSkills).map(([category, skills], index) => {
            const config = categoryConfig[category];
            const Icon = config?.icon || Code2;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MagicCard
                  className="p-6 h-full"
                  gradientColor="#262626"
                  gradientOpacity={0.3}
                  gradientFrom="#9E7AFF"
                  gradientTo="#FE8BBB"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-linear-to-br ${config?.color || 'from-purple-500 to-pink-500'}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.soft.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all cursor-default"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
