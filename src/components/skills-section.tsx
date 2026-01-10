import { motion } from "framer-motion";
import IconCloud from "@/components/ui/magic-ui/icon-cloud";
import Sparkles from "@/components/ui/magic-ui/sparkles";
// import { useRef } from "react";

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
  // const containerRef = useRef<HTMLDivElement>(null);
  // const div1Ref = useRef<HTMLDivElement>(null);
  // const div2Ref = useRef<HTMLDivElement>(null);

  const skillIcons = [
    "typescript",
    "javascript",
    "react",
    // "nextdotjs",
    "nodejs",
    // "python",
    "docker",
    // "kubernetes",
    // "aws",
    // "mongodb",
    "postgresql",
    // "redis",
    "git",
    "github",
    "figma",
    "tailwindcss",
    // "sass",
    // "webpack",
    "bun",
    "express",
    "socketdotio",
    "reactnative",
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-20">
      <Sparkles className="opacity-10" size="sm" density="low" speed="slow" />

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
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </h3>

            <div className="relative h-112 mb-8 rounded-2xl bg-card/50 border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-blue-500/5" />

              <div className="absolute inset-0 opacity-30">
                <IconCloud iconSlugs={skillIcons} />
              </div>

              <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 max-w-sm">
                  {data.technical.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center"
                    >
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative px-4 py-3 bg-card/80 backdrop-blur-md rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                          <span className="text-sm font-semibold text-center block text-purple-300 group-hover:text-purple-200 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
              Soft Skills
            </h3>

            <div className="relative h-112 mb-8 rounded-2xl bg-card/50 border border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5" />

              <div className="flex h-full w-full items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 max-w-sm">
                  {data.soft.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center"
                    >
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative px-4 py-3 bg-card/80 backdrop-blur-md rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                          <span className="text-sm font-semibold text-center block text-purple-300 group-hover:text-purple-200 transition-colors">
                            {skill}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
