import { Image } from "antd";
import { projectRelated } from "../../constants/data";

const Experience = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4 py-20">
      <span className="text-lg font-bold uppercase">
        <span className="shadow-custom rounded-lg py-2 px-4">Experience</span>
      </span>
      <div className="shadow-custom p-2 rounded-lg">
        <div className="relative z-20 w-full max-w-4xl overflow-hidden">
          <ul className="scroll-right-to-left-v2">
            {projectRelated.map((item) => (
              <li className="flex items-center justify-center">
                <Image
                  className="min-w-[220px] rounded-xl border-neutral-600 border-[0.2px]"
                  src={item}
                  height={130}
                  preview={false}
                />
              </li>
            ))}
            {projectRelated.map((item) => (
              <li>
                <Image
                  className="min-w-[220px] rounded-xl border-neutral-600 border-[0.2px]"
                  src={item}
                  height={130}
                  preview={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
