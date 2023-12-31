import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCreateProfileModal from "src/hooks/useCreateProfile";
import useLoginModal from "src/hooks/useLoginModal";
import useRegisterModal from "src/hooks/useRegisterModal";
import useRentModal from "src/hooks/useRentModal";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import useOnClickOutside from "src/hooks/userOnClickOutside";
import { User } from "src/interfaces/user";
import { logout } from "src/services/auth";
import Avatar from "../../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const windowWidth = useWindowWidth();

  const smallScreen = windowWidth < 475;

  const createProfileModal = useCreateProfileModal();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  useOnClickOutside([menuRef], () => setIsOpen(false));

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();

      toast.success("Logged out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {!smallScreen && (
          <div
            onClick={loginModal.onOpen}
            className="
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-800 
            transition 
            cursor-pointer
          "
          >
            <span className="text-white text-[10pt] font-bold underline">
              Sign in
            </span>
          </div>
        )}

        {smallScreen && (
          <div
            onClick={toggleOpen}
            className="
          p-2
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-900 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          text-white
          "
          >
            <AiOutlineMenu />
            <div className="hidden md:block">
              <Avatar src={currentUser?.img} />
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[40vw]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-black
            text-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col p-1 cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  semibold={true}
                  label="Messages"
                  onClick={() => navigate("/messages/:userId")}
                />
                <MenuItem
                  semibold={true}
                  label="Notifications"
                  onClick={() => navigate("/notifications")}
                />
                <MenuItem
                  semibold={true}
                  label="Tickets"
                  onClick={() => navigate("/tickets")}
                />
                <MenuItem
                  semibold={true}
                  label="Favorites"
                  onClick={() => navigate("/favorites")}
                />
                <hr />
                <MenuItem
                  label="Account"
                  onClick={() => navigate("/account")}
                />
                <MenuItem
                  label="My events"
                  onClick={() => navigate("/my-events")}
                />
                <MenuItem label="List your party" onClick={rentModal.onOpen} />

                <hr />
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Company"
                    onClick={() => navigate("/company")}
                  />
                  <MenuItem
                    label="Profile"
                    onClick={createProfileModal.onOpen}
                  />
                </div>
                <div
                  className="
                  block
                  md:hidden
                "
                >
                  <MenuItem label="Home" onClick={() => navigate("/")} />
                </div>
                <MenuItem label="Logout" onClick={handleSignOut} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />

                <MenuItem label="Sign up" onClick={registerModal.onOpen} />

                <hr className="border-gray-500 block lg:hidden" />
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Mission"
                    onClick={() => navigate("/mission")}
                  />
                </div>
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Company"
                    onClick={() => navigate("/company")}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
