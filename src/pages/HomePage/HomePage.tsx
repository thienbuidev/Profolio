import AboutMe from "../../components/HomePage/AboutMe";
import Experience from "../../components/HomePage/Experience";
import Introduction from "../../components/HomePage/Introduction";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-[35%,30%,35%] gap-3">
          <Introduction />
          <AboutMe />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
