import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const RecentProjects: React.FC = () => {
  return (
    <div>
      <p className="text-gray-400">Recent Projects</p>
      <p className="text-xl font-bold text-gray-700">
        Checkout a few of my works
      </p>
      <Carousel showThumbs={false} className="mt-4">
        <div className="justify-center items-center flex">
          <div className="h-24 w-24 md:h-full md:w-full ">
            <Image
              src={"https://d312ms1ujly8di.cloudfront.net/trapflix.png"}
              width={230}
              height={500}
              //   layout="responsive"
              className=""
              alt="Trapflix App"
            />
          </div>
        </div>

        <div>
          <Image
            src={
              "https://d312ms1ujly8di.cloudfront.net/Screen+Shot+2022-10-20+at+19.11.30.png"
            }
            width={800}
            height={500}
            // layout="responsive"
            alt="Image showing Awol Arts Website"
          />
        </div>
        <div>
          <Image
            src={
              "https://d312ms1ujly8di.cloudfront.net/Screen+Shot+2022-10-20+at+19.06.56.png"
            }
            width={800}
            height={500}
            // layout="fill"
            alt="Image showing Rwenji Website"
          />
        </div>
        <div>
          <Image
            src={
              "https://d312ms1ujly8di.cloudfront.net/Screen+Shot+2022-10-20+at+19.16.36.png"
            }
            width={800}
            height={500}
            //   layout="responsive"
            alt="Image showing Graphql Api"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default RecentProjects;
