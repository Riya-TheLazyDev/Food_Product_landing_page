import { Settings, Truck, GlassWater } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: <Settings className="w-8 h-8 text-brand-green" strokeWidth={1.5} />,
      title: "Set your preferences",
      description: "Choose which type of wine you want in each shipment, how many bottles, and how often you want to receive them."
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-green" strokeWidth={1.5} />,
      title: "Get your delivery",
      description: "We'll ship you new bottles monthly or quarterly so your fridge is never empty for long."
    },
    {
      icon: <GlassWater className="w-8 h-8 text-brand-green" strokeWidth={1.5} />,
      title: "Sip and enjoy",
      description: "Great wine is meant to be enjoyed. Every wine we send is ready right now—no aging needed."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-beige">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-16">
          Here's how it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
