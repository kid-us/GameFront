import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div className="text-xl">
        <p>Lorem {id} </p>
      </div>
    </>
  );
};

export default GameDetail;
