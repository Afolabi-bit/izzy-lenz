import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TestimonialsCarousel from "../TestiminialCarousel";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Bride",
    stars: 5,
    text: "IzzyLenz captured every emotion of our day so beautifully. We cried watching the gallery for the first time. Every single frame felt intentional.",
    wedding: "January 2026",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    name: "Tunde & Folake Adesanya",
    role: "Couple",
    stars: 5,
    text: "We didn't just get photos — we got memories we'll pass down to our children. The attention to light and detail was something else entirely.",
    wedding: "March 2025",
    location: "Abuja, Nigeria",
  },
  {
    id: 3,
    name: "Chisom Eze",
    role: "Bride",
    stars: 5,
    text: "I was nervous in front of cameras my whole life. By the end of the day I forgot they were even there. The photos tell you everything about how that felt.",
    wedding: "November 2025",
    location: "Port Harcourt, Nigeria",
  },
  {
    id: 4,
    name: "Emeka Nwosu",
    role: "Groom",
    stars: 5,
    text: "My wife is obsessed with the gallery and honestly so am I. We've had three people ask us for the photographer's contact just from our Instagram.",
    wedding: "February 2026",
    location: "Enugu, Nigeria",
  },
  {
    id: 5,
    name: "Sade & Biodun Lawal",
    role: "Couple",
    stars: 5,
    text: "Professional, warm, and incredibly talented. They blended into our day so naturally. The candid shots are our absolute favourites.",
    wedding: "October 2025",
    location: "Ibadan, Nigeria",
  },
  {
    id: 6,
    name: "Ngozi Obi",
    role: "Mother of the Bride",
    stars: 5,
    text: "I've been to many weddings but I've never seen a photographer work this quietly and still produce results this stunning. Truly exceptional.",
    wedding: "December 2025",
    location: "Lagos, Nigeria",
  },
  {
    id: 7,
    name: "Kemi Adeyemi",
    role: "Bride",
    stars: 5,
    text: "From the pre-wedding shoot to the reception, every moment was handled with so much care. I felt like the most photographed and least stressed bride alive.",
    wedding: "August 2025",
    location: "Lekki, Lagos",
  },
  {
    id: 8,
    name: "Rotimi & Amara Fashola",
    role: "Couple",
    stars: 5,
    text: "We booked IzzyLenz after seeing one photo on Instagram and it was the best vendor decision we made. The full gallery exceeded every expectation.",
    wedding: "April 2025",
    location: "Victoria Island, Lagos",
  },
  {
    id: 9,
    name: "Blessing Uche",
    role: "Event Planner",
    stars: 5,
    text: "As a planner I've worked with many photographers. IzzyLenz is the one I recommend without hesitation. Punctual, professional, and the results speak for themselves.",
    wedding: "Ongoing collaboration",
    location: "Lagos, Nigeria",
  },
  {
    id: 10,
    name: "Ifunanya Chukwu",
    role: "Bride",
    stars: 5,
    text: "The photos made my grandmother cry happy tears. That alone says everything. I cannot recommend IzzyLenz enough to anyone planning their day.",
    wedding: "January 2025",
    location: "Owerri, Nigeria",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-10 py-28 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-bg-red font-semibold drop-shadow-md opacity-90 mb-5">
            Love Stories
          </p>
          <h2 className="text-5xl font-heading font-bold text-white tracking-tight  mb-6 drop-shadow-lg">
            From Our{" "}
            <span className="text-bg-red font-semibold italic">Couples</span>
          </h2>
        </div>
      </div>
      <TestimonialsCarousel testimonials={testimonials} />
    </section>
  );
}
