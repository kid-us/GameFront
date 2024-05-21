import React, { useState } from "react";
import { platforms } from "../../services/platforms";
import useGames from "../../hooks/useGames";

const PlatformSelector: React.FC = () => {
  const [showPlatforms, setShowPlatforms] = useState(false);

  const { handlePlatformSelector } = useGames();
  return (
    <div className="relative">
      <button
        onClick={() => setShowPlatforms(!showPlatforms)}
        className="shadow-xl bg2 w-64 py-2 px-5 rounded-md cursor-pointer text-start"
      >
        <span className="text-xl bi-filter-left"></span>
        <span className="text-teal-500 ms-2 text-lg"> Platforms </span>
        <span
          className={`${
            showPlatforms ? "bi-caret-up-fill" : "bi-caret-down-fill"
          } text-xs text-teal-500 ms-20`}
        ></span>
      </button>
      {showPlatforms && (
        <div className="absolute bg2 rounded-md shadow-md mt-2 p-2 z-10 w-64 shadow-teal-400">
          {platforms.map((platform) => (
            <button
              onClick={() => {
                handlePlatformSelector(platform.id);
                setShowPlatforms(false);
              }}
              key={platform.id}
              className="flex items-center p-2 hover:bg-zinc-800 rounded-md mb-1 w-full"
            >
              <span className="mr-3">{React.createElement(platform.icon)}</span>
              {platform.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
