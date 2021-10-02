import ContainerBlock from "../components/ContainerBlock";
import Spotify from "@components/Spotify";

export default function spotifyplaying() {
  return (
    <ContainerBlock title="Jam - zalfaridzi">
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left font-jkt">
            Now Playing
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900  mt-8">
          <main className="flex flex-col items-center justify-center pt-14 space-y-3">
            <div>
              <h1 className="text-center text-3xl font-medium pb-4 font-jkt">
                What's zalfaridzi listening to right now?
              </h1>
            </div>
            <Spotify />
          </main>
        </div>
      </section>
    </ContainerBlock>
  );
}
