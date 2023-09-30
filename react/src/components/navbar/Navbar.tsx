import { BiParty } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import Container from "../Container";
import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";
import Menus from "./Components/Menus";
import UserMenu from "./Components/UserMenu";

const Navbar: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <div
      style={{
        zIndex: 999,
      }}
      className="fixed w-full bg-black shadow-sm"
    >
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
      <Menus
        page={"/"}
        menus={[
          { label: "Party", icon: <BiParty /> },
          { label: "Entrepreneurship", icon: <GiTeamIdea /> },
          { label: "Community", icon: <RiCommunityLine /> },
        ]}
      />
      <Menus
        page={"/partner"}
        menus={[
          { label: "Club Owner" },
          { label: "Festival Organizer" },
          { label: "Rave Organizer" },
        ]}
      />
    </div>
  );
};

export default Navbar;
