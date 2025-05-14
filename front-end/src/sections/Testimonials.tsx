import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Leonardo Critchley",
    position: "Friend \n @cleonardo.c",
    text: "He’s got this mix of brainpower and chill that’s rare. Whether it’s geeking out over a cool idea or just being there for someone, Tom has got this solid vibe that makes people feel like they can trust you.",
    avatar: memojiAvatar1,
  },
  {
    name: "Daniel Tasker",
    position: "Friend \n @therangagod",
    text: "Thomas has this calm confidence that makes people feel at ease. Like, even when things get hectic, he doesn’t freak out — Tom thinks it through, handles it, and somehow still manages to crack a joke and keep the vibe light. ",
    avatar: memojiAvatar2,
  },
  {
    name: "Kathleen Ly",
    position: "Student | The University of Auckland \n @kqthlenn",
    text: "Fatass who sleeps all day. No but really, one thing I’ve always admired about Tom is how real he is. Tom doesn’t put on a front or try to be someone he’s not. He has this quiet strength and a good heart.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ricky Chen",
    position: "Student | The University of Auckland \n @ani_bizu",
    text: "This guy lowkey got charisma that sneaks up on people. Like, he’s not trying to impress anyone, but somehow end up being the one everyone wants to talk to. Tom’s got good energy, sharp wit, and just the right amount of mischief — makes hanging out with you always feel easy and fun.",
    avatar: memojiAvatar4,
  },
  {
    name: "Pham Khoa",
    position: "Friend \n@_lemon.1209_",
    text: "He has this really cool way of making people feel like they belong. Whether it’s a deep convo or just messing around, Tom gives this vibe that makes people feel included and comfortable. It’s like… when Tom is around, everything feels a bit more chill, a bit more right. Honestly the kind of friend people don’t forget.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="My Homies"
          title="What My Friends Say about Me"
          description="Don't worry, I told them to be honest."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) =>(
            <Fragment key={index}>
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="max-w-md md:max-w-md p-6 md:p-8 hover:-rotate-3 transition-transform duration-300">
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
              </Fragment>
          ))}

        
          </div>
        </div>
      </div>
    </div>
  );
};
