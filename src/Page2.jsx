import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>This is Page2</h1>
      <Link to="/page2/99">URL Parameter</Link>
    </div>
  );
};
