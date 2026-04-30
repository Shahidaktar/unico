import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Sharpening the Vision',
    text: 'A personal consultation to understand your rhythm, preferences, and the unsaid desires of your heart.'
  },
  {
    number: '02',
    title: 'The Design Phase',
    text: 'Our specialists craft a singular blueprint, layering logistics with moments of unexpected wonder.'
  },
  {
    number: '03',
    title: 'Seamless Transit',
    text: 'From the moment you leave until your return, every detail is handled with invisible precision.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-40 px-8 md:px-16 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <div className="max-w-xl">
             <h2 className="text-5xl font-light leading-tight">
              A Process Refined by <span className="italic">Intuition</span> and Intelligence.
            </h2>
          </div>
          <p className="text-luxury-muted text-lg font-light max-w-sm leading-relaxed opacity-70">
            We don’t book trips. We design legacies of movement, ensuring every second spent away is a second spent alive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative"
            >
              <span className="text-7xl font-serif italic text-luxury-muted/20 absolute -top-12 -left-8">
                {step.number}
              </span>
              <div className="pt-8 border-t border-luxury-ink/10">
                <h3 className="text-2xl font-light mb-6 tracking-wide uppercase text-xs font-semibold tracking-[0.2em]">{step.title}</h3>
                <p className="text-luxury-ink/70 font-light leading-loose">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
