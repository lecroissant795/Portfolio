import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16">
      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 -translate-x-1/2 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) =>(
              <Fragment key={idx}>
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="uppercase font-extrabold text-sm">{word}</span>
                  <StarIcon className="size-6 -rotate-12" />
                </div>
              ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};
