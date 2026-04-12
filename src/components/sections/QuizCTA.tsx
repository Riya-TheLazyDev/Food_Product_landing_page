import { ArrowRight } from "lucide-react";

export function QuizCTA() {
  return (
    <section className="py-8 px-6 border-y border-border bg-background-main">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h3 className="font-serif text-xl sm:text-2xl text-text-primary italic">
          Not sure where to start? Take the quiz
        </h3>
        <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-border/30 transition-colors group">
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
