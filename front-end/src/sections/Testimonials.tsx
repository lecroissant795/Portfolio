import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Leonardo Critchley",
    position: "Student | The University of Auckland \n @cleonardo.c",
    text: "He's my sunshine. My only sunshine. He makes me happy. When skies are gray.",
    avatar: memojiAvatar1,
  },
  {
    name: "Daniel Tasker",
    position: "@therangagod",
    text: "The man is gay!",
    avatar: memojiAvatar2,
  },
  {
    name: "Kathleen Ly",
    position: "@kqthlenn",
    text: "Fatass who sleeps all day lowkey.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ricky Chen",
    position: "@ani_bizu",
    text: "*Hasn't responded*",
    avatar: memojiAvatar4,
  },
  {
    name: "Pham Khoa",
    position: "@_lemon.1209_",
    text: "I don't even know this guy.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="My Homies"
          title="What My Friends Say about Me"
          description="Don't worry, I told them to be honest."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="max-w-xl md:max-w-md md:p-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40 whitespace-pre-line">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </div>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
