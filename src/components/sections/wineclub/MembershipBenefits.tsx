import { Button } from "@/components/ui/button";

export function MembershipBenefits() {
  const benefits = [
    {
      title: "Curated by experts",
      description: "Each bottle is hand selected by our team in California."
    },
    {
      title: "Free Shipping",
      description: "Free shipping on Club purchases."
    },
    {
      title: "Members-only access",
      description: "Early access for members only when we source rare wines and our cult-favourites."
    },
    {
      title: "Change anytime",
      description: "Want to swap plans or pause the pour? Club membership is always flexible and cancellable."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-4">
            CLUB DETAILS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary">
            Why become a member?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center w-full">
          <div className="lg:w-1/2 w-full flex flex-col gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <h3 className="text-xl font-serif text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            ))}
            
            <div className="pt-4">
              <Button size="lg" className="bg-brand-green hover:bg-brand-greenHover text-white px-8 rounded-full">
                CHOOSE YOUR CLUB
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft">
              <img 
                src="/images/food_pairing.png" // Reusing available local image
                alt="Member enjoying wine" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
