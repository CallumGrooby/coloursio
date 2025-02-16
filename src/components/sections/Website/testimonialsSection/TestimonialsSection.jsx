import { TestimonialCard } from "../reusableComponents/testimonialCard/TestimonialCard";

const testimonials = [
  {
    user: "Sarah L",
    text: "Colours.io made designing so much easier! I used to struggle with font and colour choices, but now I can create polished, professional designs in minutes. A game-changer for my projects!",
    stars: 5,
  },
  {
    user: "James R",
    text: "As a marketer, I need branding to be spot on. Colours.io helped me quickly find the perfect colour and font pairings, making my campaigns look sleek and cohesive. Highly recommend!",
    stars: 4,
  },
];

export const TestimonialsSection = ({ modifiedBodyStyle, colorStyle }) => {
  return (
    <section style={{ color: colorStyle.text }}>
      <div className="flex flex-row  gap-4 max-w-[972px] w-full mx-auto">
        {testimonials.map((content, index) => (
          <TestimonialCard
            key={index}
            modifiedBodyStyle={modifiedBodyStyle}
            colorStyle={colorStyle}
            content={content}
          />
        ))}
      </div>
    </section>
  );
};
