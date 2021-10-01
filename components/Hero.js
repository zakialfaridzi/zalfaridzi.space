import userData from "@constants/data";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    //   w-full h-screen
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <h1 className="text-4xl md:text-7xl font-bold text-black dark:text-[#FAF089] my-2">
            Hey, call me Zaki!<span className={styles.wave}>👋</span>
          </h1>

          <RainbowHighlight color={colors[1]}>
            <h1 className="text-2xl font-bold text-black dark:text-[#FAF089] my-2">
              Eager Frontend Web Dev
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-2xl  font-bold text-gray-700 dark:text-gray-200 my-2">
              Main Tech Stack React/NextJS + Tailwind
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-2xl  font-bold text-gray-700 dark:text-gray-200 my-2">
              IS Student
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          {/* <img
            src={userData.avatarUrl}
            alt="avatar"
            className="rounded-2xl -ml-16 mb-20 -mt-14"
          /> */}
          <div className="-mt-16 mr-10" style={{ position: "relative" }}>
            <Image
              src={userData.avatarUrl}
              quality={100}
              placeholder="blur"
              blurDataURL
              width={570}
              height={427}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
