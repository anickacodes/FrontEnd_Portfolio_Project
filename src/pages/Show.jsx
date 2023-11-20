import { useParams } from "react-router-dom";
import Style from "../components/Style";

const Show = () => {
  const { id } = useParams();

  return (
    <div>
      <h1> Viewing Style </h1>
      <Style id={id} />
    </div>
  );
};

export default Show;
