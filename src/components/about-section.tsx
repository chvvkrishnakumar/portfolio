
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
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{data.bio}</p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-primary w-20">Email:</span>
                <span className="text-muted-foreground">{data.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-primary w-20">Phone:</span>
                <span className="text-muted-foreground">{data.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-primary w-20">Website:</span>
                <span className="text-muted-foreground">{data.website}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">100k+</div>
                <div className="text-muted-foreground">Users Served</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
