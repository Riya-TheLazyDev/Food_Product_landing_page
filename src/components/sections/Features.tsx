import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Features() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background-main">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 w-full">
          <span className="text-xs uppercase tracking-widest text-text-secondary font-medium block mb-4">
            Our Methods
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-12 leading-tight">
            Low intervention. <br/> High vibration.
          </h2>

          <Accordion type="single" collapsible defaultValue="item-1" className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger>Organic farm</AccordionTrigger>
              <AccordionContent>
                We believe in working with nature, not against it. All our vines are tended using organic practices, ensuring healthy soil and vibrant, expressive fruit without synthetic chemicals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Independent produces</AccordionTrigger>
              <AccordionContent>
                We partner exclusively with small, independent producers who share our passion for quality and sustainability. These relationships allow us to curate a unique and exceptional selection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>100% organic grapes</AccordionTrigger>
              <AccordionContent>
                Every bottle we offer is made from 100% certified organic grapes, reflecting the true terroir of its origin and providing a cleaner, more honest tasting experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Micro winemaking</AccordionTrigger>
              <AccordionContent>
                Our producers employ micro-winemaking techniques, hand-crafting wines in small batches. This meticulous attention to detail ensures unparalleled quality and unique character in every sip.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button variant="outline" className="rounded-full border-text-primary text-text-primary hover:bg-text-primary hover:text-background-main px-10">
            About Us
          </Button>
        </div>

        <div className="lg:w-1/2 w-full h-full">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img 
              src="/images/food_pairing.png" 
              alt="Wine and cheese pairing" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
