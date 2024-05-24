interface Props {
  minimum: string;
  recommended: string;
}

const SystemRequirements = ({ minimum, recommended }: Props) => {
  return (
    <>
      <p className="font-poppins text-lg my-6 text-gray-400">
        System Requirements
      </p>
      <div className="grid grid-cols-2 bg-zinc-950 rounded p-14 gap-5 mb-10">
        <div>
          {minimum.split("\n").map((line, index) => (
            <p className="font-poppins text-gray-300" key={index}>
              {line}
            </p>
          ))}
        </div>
        <div>
          {recommended.split("\n").map((line, index) => (
            <p className="font-poppins text-gray-300" key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* <p className="font-poppins text-lg my-6">System Requirements</p>
            <div className="grid grid-cols-2 bg-zinc-950 rounded p-14 gap-5 mb-10">
              <div>
                {gameDetail.platforms[0].requirements.minimum
                  .split("\n")
                  .map((line, index) => (
                    <p className="font-poppins text-gray-300" key={index}>
                      {line}
                    </p>
                  ))}
              </div>
              <div>
                {gameDetail.platforms[0].requirements.recommended
                  .split("\n")
                  .map((line, index) => (
                    <p className="font-poppins text-gray-300" key={index}>
                      {line}
                    </p>
                  ))}
              </div>
            </div> */}
    </>
  );
};

export default SystemRequirements;
