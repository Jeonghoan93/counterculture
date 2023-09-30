import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={"cursor-pointer text-white font-bold text-xl"}
    >
      NewReligion<span className={"text-red-600"}>X</span>
    </div>
  );
};

export default Logo;
