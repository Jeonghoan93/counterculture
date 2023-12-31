import qs from "query-string";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuBoxProps {
  page: string;
  label: string;
  selected?: boolean;
  icon?: React.ReactNode;
}

type QueryParams = Record<string, string | undefined> & {
  menu?: string;
};

const MenuBox: React.FC<MenuBoxProps> = ({ label, selected, page, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(location.search);
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: QueryParams = {
      ...currentQuery,
      menu: label,
    };

    if (params?.get("menu") === label) {
      delete updatedQuery.menu;
    }

    const url = qs.stringifyUrl(
      {
        url: page,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  }, [label, navigate, location.search, page]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-1
        pt-3
        pb-1
        border-b-2
        hover:text-neutral-900
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <span className="text-[15pt]">{icon}</span>
      <span className="font-semibold text-[10pt]">{label}</span>
    </div>
  );
};

export default MenuBox;
