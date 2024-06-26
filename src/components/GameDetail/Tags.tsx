import { Tag } from "../../services/gameDetail";

interface Props {
  tag: Tag[];
}

const Tags = ({ tag }: Props) => {
  return (
    <div>
      <p className="font-poppins text-lg my-6 text-gray-400">Tags</p>
      <p className="space-x-1">
        {tag.map((t) => (
          <span
            key={t.id}
            className="text-sm font-bold text-teal-400 bi-hash text-nowrap"
          >
            {t.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Tags;
