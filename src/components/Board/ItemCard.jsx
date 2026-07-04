import { Bookmark, Heart } from "lucide-react";
import { useItem } from "../../context/ItemsProvidor/ItemsProvider";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { dispatch } = useItem();

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border-black dark:border-gray-700 sm:m-4 cursor-pointer">
      <div className="relative">
        <Link to={`/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-md object-cover group-hover:scale-125 transition duration-300"
          />
        </Link>

        <span className="absolute mr-1 top-20 right-0 z-20 gap-2 flex flex-col ">
          <button
            onClick={() => dispatch({ type: "TOGGLELIKED", id: item.id })}
            className="bg-gray/50 backdrop-blur-lg text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl py-2 px-2 rounded-full hover:scale-110"
          >
            <Heart fill={item.isLiked ? "currentColor" : "none"} />
          </button>

          <button className="bg-gray/50 backdrop-blur-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl py-2 px-2 rounded-full hover:scale-110">
            <Bookmark />
          </button>
        </span>

        <span className="absolute top-2 right-2 text-xs font-semibold text-blue-600 dark:text-white px-2 py-1 rounded-full shadow bg-gray-200 dark:bg-blue-600">
          {item.category}
        </span>

        <div className="p-4 text-left absolute bottom-0 z-10 opacity-0 bg-gray-600 group-hover:opacity-100 text-white transition-opacity duration-300">
          <h4 className="text-lg font-semibold dark:text-white mb-4">
            {item.name}
          </h4>

          <p className="text-xs font-light dark:text-white min-w-12">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
