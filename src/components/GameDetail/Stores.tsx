import { Link } from "react-router-dom";
import { GameDetails } from "../Games/GameDetail";
interface Props {
  store: GameDetails;
}

const Stores = ({ store }: Props) => {
  return (
    <>
      <p className="font-poppins mb-5 text-gray-400">Where to Buy</p>
      <div className="grid grid-cols-2 gap-3">
        {store.stores.map((s) => (
          <Link
            key={s.id}
            to={s.store.domain}
            className="p-3 rounded-md"
            style={{
              backgroundSize: "cover",
              backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 1, 0.80), rgba(0, 0, 0, 0.99)), url("${s.store.image_background}")`,
              backgroundPosition: "center top",
            }}
          >
            <p className="font-semibold text-gray-400 text-sm text-center hover:text-white">
              {s.store.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Stores;
