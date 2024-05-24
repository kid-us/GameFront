import { Screenshots } from "../Games/GameDetail";

interface Props {
  screenshots: Screenshots[];
}
export const Screenshot = ({ screenshots }: Props) => {
  return (
    <>
      <h1 className="mt-10 text-lg text-gray-400">Screenshots</h1>
      <div className="grid grid-cols-6 gap-3 my-5">
        {screenshots.map((screenshot) => (
          <div key={screenshot.id}>
            <img
              src={screenshot.image}
              alt="Screenshot"
              className="aspect-square object-cover rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};
