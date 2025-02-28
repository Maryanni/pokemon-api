import { FaSearch } from "react-icons/fa";
import Pokemon from "../components/Pokemon";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiStarOutline } from "react-icons/ti";
import { useEffect, useState } from "react";

function List() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setActiveTab("all");
    setShowFavorites(false);
  }, []);

  const tabChange = (tab) => {
    setActiveTab(tab);
    setShowFavorites(tab === "favorites");
    setSearchTerm("");
  };

  const handleSearch = (value) => {
    setSearchTerm(value.target.value);
  };

  const activeButtonStyle =
    "flex items-center justify-center w-40 bg-red-600 text-white rounded-md py-2";
  const inactiveButtonStyle =
    "flex items-center justify-center w-40 text-gray-600 py-2 hover:bg-gray-100 rounded-md";

  return (
    <div className="container mx-auto px-4 pb-16 relative min-h-screen">
      <div className="sticky top-0 z-20 py-4 flex justify-center w-full bg-white">
        <div className="w-64 shadow-sm border rounded-md p-4">
          <div className="flex items-center">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              className="outline-none w-full"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Pokemon showOnlyFavorites={showFavorites} searchTerm={searchTerm} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t py-1 z-20">
        <div className="container mx-auto flex justify-center space-x-8">
          <button
            className={
              activeTab === "all" ? activeButtonStyle : inactiveButtonStyle
            }
            onClick={() => tabChange("all")}
          >
            {" "}
            <TfiMenuAlt className="mr-2" />
            <span>All</span>
          </button>
          <button
            className={
              activeTab === "favorites"
                ? activeButtonStyle
                : inactiveButtonStyle
            }
            onClick={() => tabChange("favorites")}
          >
            {" "}
            <TiStarOutline className="mr-2" />
            <span>Favorites</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
