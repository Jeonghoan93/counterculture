import { useLocation } from "react-router-dom";
import MenuBox from "src/components/MenuBox";

interface Menu {
  label: string;
  icon?: React.ReactNode;
}

interface MenusProps {
  page: string;
  menus: Menu[];
}

const Menus: React.FC<MenusProps> = ({ page, menus }) => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const menu = params?.get("menu");
  const pathname = location.pathname;
  const isPage = pathname === page;

  const defaultSelectedMenu = pathname === "/" ? "Party" : null;

  if (!isPage) {
    return null;
  }

  return (
    <div
      className="
      bg-white
        max-w-[2520px]
        mx-auto
        xl:px-16
        md:px-7
        sm:px-2
        px-5
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          overflow-x-auto
          gap-10
        "
      >
        {menus.map((item) => (
          <MenuBox
            icon={item.icon}
            page={page}
            key={item.label}
            label={item.label}
            selected={
              menu ? menu === item.label : item.label === defaultSelectedMenu
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Menus;
