import { Image } from "antd";
import "./index.css";
import { dailyFramework, dailyTech } from "../../constants/data";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-20 border-neutral-300">
        <div className="text-lg font-bold">
          <span className="shadow-custom rounded-lg py-2 px-4">ABOUT ME</span>
        </div>
        <div className="shadow-custom p-4 rounded-lg">
          <div className="text-justify">
            Since the beginning, I've been deeply passionate about computer
            science, starting with no-code tools back in 2018. This early
            fascination led me to teach myself how to code, and over the years,
            I've honed my skills across various programming languages and
            technologies.
          </div>
          <div className="text-justify">
            I've had the privilege of working in a web development company, and
            now, I'm eager to build innovative projects, automate tasks, and
            push the boundaries in Web & Mobile Development, Open Source, and
            Competitive Programming.
          </div>
          <div className="flex flex-row gap-1 text-xs border-neutral-600 mt-2">
            <span className="rounded-full px-4 bg-neutral-600 text-white">
              25 yo
            </span>
            <span className="rounded-full px-4 bg-neutral-600 text-white">
              Web
            </span>
            <span className="rounded-full px-4 bg-neutral-600 text-white">
              Front-end
            </span>
          </div>
        </div>
        <div className="text-lg font-bold">
          <span className="shadow-custom rounded-lg py-2 px-4">DAILY TECH</span>
        </div>
        <div className="shadow-custom p-4 rounded-lg">
          <div className="relative z-20 w-full max-w-4xl overflow-hidden scroller">
            <ul className="scroll-right-to-left">
              {dailyTech.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
              {dailyTech.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
              {dailyTech.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-20 w-full max-w-4xl overflow-hidden scroller">
            <ul className="scroll-left-to-right">
              {dailyFramework.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
              {dailyFramework.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
              {dailyFramework.map((item) => (
                <li>
                  <Image className="min-w-6" src={item} preview={false} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
