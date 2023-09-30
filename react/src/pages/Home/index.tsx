import { useLocation } from "react-router";
import Community from "./Products/Community";
import Entrepreneurship from "./Products/Entrepreneurship";
import Party from "./Products/Party";

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const menu = params.get("menu");

  switch (menu) {
    case "Party":
      return <Party />;
    case "Entrepreneurship":
      return <Entrepreneurship />;
    case "Community":
      return <Community />;
    default:
      return <Party />;
  }
};

export default Home;
