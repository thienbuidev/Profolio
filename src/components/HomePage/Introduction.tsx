import { Image } from "antd";
import Avatar from "../../assets/avatar.jpg";
import TypingEffect from "./TypingEffect";
import SocialComponents from "./SocialComponents";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 pt-20 gap-4">
      <Image
        className="rounded-full border-2 border-black"
        src={Avatar}
        preview={false}
        width={150}
      />
      <SocialComponents />
      <div className="flex flex-col items-center gap-4 shadow-custom p-4 rounded-lg">
        <TypingEffect />
        <span className="text-base text-justify">
          <span className="font-bold leading-6 text-lg">Web Developer</span>{" "}
          with 2+ years of experience. Experienced in integrating current
          technologies. Applying blockchain and artificial intelligence.
        </span>
        <span className="text-base text-justify">
          With 4+ years of research in{" "}
          <span className="font-bold leading-6 text-lg">
            Artificial Intelligence
          </span>{" "}
          and having published articles domestically and internationally.
          Researched topics such as Object detection, recognition and
          classification. Training recognition models
        </span>
        <span className="text-base text-justify">
          <span className="font-bold leading-6 text-lg">Blockchain</span> is
          also one of the fields that I research. Related to smart contracts,
          cryptocurrencies, NFTs on Ethereum blockchain and Solana blockchain
        </span>
      </div>
    </div>
  );
};

export default Introduction;
