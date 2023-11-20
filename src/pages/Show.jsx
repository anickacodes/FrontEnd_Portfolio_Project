import { useParams } from "react-router-dom";
import Style from "../components/Style";

const Show = ({ selectedStyleById }) => {
  const { id } = useParams();
  

  return (
    <div>
      <h2> Shoooooowww </h2>
      <Style id={id} selectedStyleById={selectedStyleById} />
    </div>
  );
};

export default Show;
