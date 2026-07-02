import { useItem } from "../context/ItemsProvidor/ItemsProvider";
import ItemCard from "./Board/ItemCard";

const Profile = () => {

    const {state} = useItem()
    const filtered = state.items.filter((item) =>
      item.name.toLowerCase().includes(state.query.toLowerCase()),
    );


  return (
    <div className="flex flex-col gap-50 bg-white dark:bg-gray-800 dark:text-white mt-25 ">
      {/* <div>
        <h4 className="pr-10 text-2xl font-bold relative pb-4 ml-8">Saved</h4>
        <div className="absolute bottom-120 left-8 h-0.5 w-30 bg-gray-800 dark:bg-white rounded-full "></div>
      </div>
 */}
      <div>
        <h4 className="pr-10 text-2xl font-bold ml-8 mb-4 relative">
          Activity
        </h4>
        <div className="absolute bottom-120 left-8 h-0.5 w-30 bg-gray-800 dark:bg-white rounded-full "></div>

        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
          {filtered.map((item) => {
            if (item.isLiked) {
              return (
                <div key={item.id}>
                  <ItemCard item={item} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
