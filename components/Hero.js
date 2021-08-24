import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <h1 className="text-4xl md:text-8xl font-bold text-black dark:text-[#FAF089] my-2">
          Developer.
        </h1>
        <h1 className="text-4xl md:text-8xl font-bold text-black dark:text-[#FAF089] my-2">
          Bookworm.
        </h1>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img
            src={userData.avatarUrl}
            alt="avatar"
            className="rounded-2xl -ml-16 mb-20 -mt-14"
          />
        </div>
      </div>
    </div>
  );
}
