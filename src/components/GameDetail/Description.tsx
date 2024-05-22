interface Props {
  name: string;
  description: string;
}

const Description = ({ name, description }: Props) => {
  return (
    <>
      <h1 className="text-lg mb-5">{name}</h1>
      <p className="font-poppins text-gray-300">
        {description.split("<p>Español")[0].replace(/<\/?p>|<br\s*\/?>/g, "")}
      </p>
    </>
  );
};

export default Description;
