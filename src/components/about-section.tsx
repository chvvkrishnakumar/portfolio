
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface AboutSectionProps {
  data: {
    bio: string
    email: string
    phone: string
    website: string
  }
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-muted/20 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">{data.bio}</p>

            <div className="space-y-4">
              <div className="flex items-center flex-wrap">
                <span className="font-semibold text-primary w-20 flex-shrink-0">Email:</span>
                <span className="text-muted-foreground text-sm md:text-base break-all">{data.email}</span>
              </div>
              <div className="flex items-center flex-wrap">
                <span className="font-semibold text-primary w-20 flex-shrink-0">Phone:</span>
                <span className="text-muted-foreground text-sm md:text-base">{data.phone}</span>
              </div>
              <div className="flex items-center flex-wrap">
                <span className="font-semibold text-primary w-20 flex-shrink-0">Website:</span>
                <span className="text-muted-foreground text-sm md:text-base break-all">{data.website}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            <Card className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm md:text-base text-muted-foreground">Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm md:text-base text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            <Card className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm md:text-base text-muted-foreground">Companies</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
