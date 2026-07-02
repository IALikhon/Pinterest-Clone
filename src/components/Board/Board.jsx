import { useItem } from "../../context/ItemsProvidor/ItemsProvider";
import ItemCard from "./ItemCard";

const Board = () => {
  const {state} = useItem();

  const filtered = state.items.filter((item) => item.name.toLowerCase().includes(state.query.toLowerCase()))

  return (
    <section className="mt-24">
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {filtered.map((item) => {
          return (
            <div key={item.id}>
              <ItemCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Board;
