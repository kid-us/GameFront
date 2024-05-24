import { Developers } from "../Games/GameDetail";

interface Props {
  devs: Developers[];
}
const Developer = ({ devs }: Props) => {
  return (
    <div>
      <p className="font-poppins text-lg my-6 text-gray-400">Developers</p>
      {devs.map((dev) => (
        <p key={dev.id}>{dev.name}</p>
      ))}
    </div>
  );
};

export default Developer;
