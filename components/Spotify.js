import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";

import fetcher from "../utils/fetcher";
import { SiSpotify } from "@react-icons/all-files/si/SiSpotify";

export default function Spotify() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <AnimatePresence>
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left  ">
            Now Playing
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900  mt-8">
          <main className="flex flex-col items-center justify-center pt-14 space-y-3">
            <div>
              <h1 className="text-center text-3xl font-medium pb-4 px-2">
                What's zalfaridzi listening to right now?
              </h1>
              <p className="text-center pb-4 px-4">
                FYI, it'll change when i listen to something on Spotify 👀
              </p>
            </div>

            {data?.isPlaying ? (
              <motion.a
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                target="_blank"
                rel="noopener noreferer"
                href={
                  data?.isPlaying
                    ? data.songUrl
                    : "https://open.spotify.com/user/4n9el8q41ngdg9dzkkf1bv5tj"
                }
                className="relative flex items-center p-4 space-x-4 transition-shadow  rounded-md hover:shadow-md  hover:ring-4 hover:ring-black ring-2 ring-black dark:hover:ring-4 dark:hover:ring-[#1ED760] dark:ring-2 dark:ring-[#1ED760] w-auto"
              >
                <div className="w-32 ">
                  {data?.isPlaying ? (
                    <img
                      className="w-32 shadow-sm"
                      src={data?.albumImageUrl}
                      alt={data?.album}
                    />
                  ) : (
                    <SiSpotify size={64} />
                  )}
                </div>

                <div className="flex-1">
                  <p className="font-medium text-xl component  ">
                    {data?.isPlaying ? data.title : <h1>Not Listening</h1>}
                  </p>
                  <p className="text-sm font-dark  ">
                    {data?.isPlaying ? data.artist : "Spotify"}
                  </p>
                </div>
                <div className="absolute bottom-1.5 right-1.5">
                  <SiSpotify size={20} color={"#1ED760"} />
                </div>
              </motion.a>
            ) : (
              <h1 className="text-xl px-4">
                Not playing anything right now <br /> Just listening to my cat's
                meows😺🐈
              </h1>
            )}
          </main>
        </div>
      </section>
    </AnimatePresence>
  );
}
