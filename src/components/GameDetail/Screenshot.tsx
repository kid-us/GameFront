import optimizedImg from "../../services/image-url";
import { Screenshots } from "../../services/gameDetail";

interface Props {
  screenshots: Screenshots[];
}
export const Screenshot = ({ screenshots }: Props) => {
  return (
    <>
      <h1 className="mt-10 text-lg text-gray-400 lg:px-0 px-3">Screenshots</h1>
      <div className="grid lg:grid-cols-6 grid-cols-4 gap-3 my-5 lg:px-0 px-3">
        {screenshots.map((screenshot) => (
          <div key={screenshot.id}>
            <img
              src={optimizedImg(screenshot.image)}
              alt="Screenshot"
              className="aspect-square object-cover rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};
