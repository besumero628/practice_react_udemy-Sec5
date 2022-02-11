import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is UrlParameter Page!</h1>
      <p>parameter is {id}</p>
    </div>
  );
};
