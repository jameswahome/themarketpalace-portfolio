import Image from "next/future/image";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const HomePage: React.FC = () => {
  const css = { maxWidth: "100%", height: "auto" };
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div className="mt-0 md:mt-4">
        <article>
          <div className="leading-8 font-sans">
            <div className="flex">
              <div>Hello,</div>
              <div className="text-blue ml-2">
                I&#39;m
                <b>
                  <em className="text-xl"> James Kariuki</em>
                </b>
              </div>
            </div>
            <div>
              Software Developer Founder of{" "}
              <em className="text-blue font-semibold text-lg">
                TheMarketPalace
              </em>{" "}
            </div>
            A Software Company with a difference
            <br />
            <em>Turn your Ideas To a real App</em>
          </div>
        </article>

        <div className="mt-4">
          <a
            className=" bg-blue px-2 py-2 rounded text-white hover:bg-blue-500"
            href="mailto:contact@themarketpalace.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lets Talk
          </a>
        </div>

        <div className="flex space-x-4 mt-8">
          <a
            href="https://www.youtube.com/channel/UCOEe6FZcz0iIRoO0dqnZQxQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon sx={{ color: "red" }} />
          </a>
          <a
            href="https://twitter.com/jaymo__jay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: "#00acee" }} />
          </a>
          <a
            href="https://instagram.com/jaymo_jay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "#FD1D1D  " }} />
          </a>
          <a
            href="https://github.com/jameswahome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Image
          src={
            "https://d312ms1ujly8di.cloudfront.net/Macbook+and+iMac+Screen+Mockup.jpg"
          }
          width={600}
          height={600}
          // layout="intrinsic"
          alt="Image showing Macbook and imac screen mockup"
        />
      </div>
    </div>
  );
};

export default HomePage;
