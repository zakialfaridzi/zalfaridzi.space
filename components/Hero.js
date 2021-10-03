import userData from "@constants/data";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    //   w-full h-screen
    <div className="lg:h-screen flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <h1 className="text-4xl md:text-7xl font-bold text-black dark:text-[#FAF089] my-2  ">
          Hey, call me Zaki!<span className={styles.wave}>👋</span>
        </h1>

        <h1 className="text-xl font-medium text-black dark:text-gray-200 my-2 pt-4  ">
          An IS student who also an eager frontend web dev who does React,
          NextJS, Tailwind/ChakraUI thingy regularly.
        </h1>
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
