import { useCurrentUser } from "src/hooks/useCurrentUser";
import Container from "../Container";
import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";
import Menus from "./Components/Menus";
import UserMenu from "./Components/UserMenu";

const Navbar: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <div className="fixed w-full bg-black z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
          border-black
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className="relative">
              <div className="flex flex-row">
                <Logo />
                <MainMenu currentUser={currentUser} />
              </div>
            </div>

            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Menus page={"/company"} menus={["Mission", "Arts", "Next Unicorn"]} />
      <Menus
        page={"/partner"}
        menus={["Club Owner", "Festival Organizer", "Rave Organizer"]}
      />
    </div>
  );
};

export default Navbar;
