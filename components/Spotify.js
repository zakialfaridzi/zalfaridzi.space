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
          className="relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
        >
          <div className="w-16 ">
            {data?.isPlaying ? (
              <img
                className="w-16 shadow-sm"
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              <SiSpotify size={64} />
            )}
          </div>

          <div className="flex-1">
            <p className="font-medium component">
              {data?.isPlaying ? data.title : <h1>Not Listening</h1>}
            </p>
            <p className="text-xs font-dark">
              {data?.isPlaying ? data.artist : "Spotify"}
            </p>
          </div>
          <div className="absolute bottom-1.5 right-1.5">
            <SiSpotify size={20} color={"#1ED760"} />
          </div>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
