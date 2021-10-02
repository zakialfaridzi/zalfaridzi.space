import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

import fetcher from "../utils/fetcher";

export default function Spotify() {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <AnimatePresence>
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
          className="relative flex items-center p-5 space-x-4 transition-shadow border border-gray-300 dark:border-[#FAF089] rounded-md hover:shadow-md w-auto"
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
            <p className="font-medium text-xl component font-jkt">
              {data?.isPlaying ? data.title : <h1>Not Listening</h1>}
            </p>
            <p className="text-sm font-dark font-jkt">
              {data?.isPlaying ? data.artist : "Spotify"}
            </p>
          </div>
          <div className="absolute bottom-1.5 right-1.5">
            <SiSpotify size={20} color={"#1ED760"} />
          </div>
        </motion.a>
      ) : (
        <h1 className="text-xl">
          Not playing anything right now <br /> Just listening to my cat's
          meowings😺🐈
        </h1>
      )}
    </AnimatePresence>
  );
}
