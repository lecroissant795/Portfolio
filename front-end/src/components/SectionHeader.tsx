interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const SectionHeader = ({
  eyebrow = "Real-world Results",
  title = "Featured Projects",
  description = "See how I transformed concepts into engaging digital experiences."
}: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
