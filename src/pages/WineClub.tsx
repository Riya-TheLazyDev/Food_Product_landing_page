import { ClubGrid } from "@/components/sections/wineclub/ClubGrid";
import { HowItWorks } from "@/components/sections/wineclub/HowItWorks";
import { MembershipBenefits } from "@/components/sections/wineclub/MembershipBenefits";
import { Testimonial } from "@/components/sections/wineclub/Testimonial";
import { FAQ } from "@/components/sections/wineclub/FAQ";
import { WinemakerCTA } from "@/components/sections/wineclub/WinemakerCTA";

export default function WineClub() {
  return (
    <div className="w-full">
      <ClubGrid />
      <HowItWorks />
      <MembershipBenefits />
      <Testimonial />
      <FAQ />
      <WinemakerCTA />
    </div>
  );
}
