import { GameDetails } from "../Games/GameDetail";
interface Props {
  store: GameDetails;
}

const Stores = ({ store }: Props) => {
  return (
    <>
      <p className="font-poppins my-5 text-gray-400">Stores</p>
      <div className="grid grid-cols-2">
        {store.stores.map((s) => (
          <div>
            <p className="font-semibold">{s.store.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stores;
