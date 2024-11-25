import memojiImage from "@/assets/images/memoji-hii.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)", // Safari fallback
        }}
      >
        {" "}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[680px] hero-ring"></div>
        <div className="size-[880px] hero-ring"></div>
        <div className="size-[1080px] hero-ring"></div>
        <div className="size-[1280px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-70}>
          <StarIcon className="size-28 text-purple-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-purple-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-purple-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon className="size-8 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80}>
          <SparkleIcon className="size-5 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon className="size-10 text-purple-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150}>
          <SparkleIcon className="size-14 text-purple-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          {/* Memoji Image */}
          <Image
            src={memojiImage}
            className="w-[100px] h-[100px]"
            alt="Memoji saying hi"
          />

          {/* Availability Badge */}
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-3 rounded-lg ">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for some chats</div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi, I'm Thomas
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I am an enthusiastic student who enjoys learning and exploring new
            ideas. Whether it’s diving into creative projects, mastering new
            skills, or dreaming up innovative solutions, I’m always eager to
            challenge myself and grow. Let’s explore what the future holds
            together!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-4 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
          <button className="inline-flex items-center gap-2 bg-purple-300 text-gray-900 px-6 h-12 rounded-xl">
            <span>Download My CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
