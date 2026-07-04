import { useParams } from "react-router-dom";
import { useItem } from "../../context/ItemsProvidor/ItemsProvider";
import NotFound from "../NotFound";

const ItemDetail = () => {
  const { id } = useParams();
  const { state } = useItem();

  const item = state.items.find((i) => i.id === Number(id));

  return (
    <div>
      {!item ? (
        <NotFound />
      ) : (
        <div className="flex">
          <div className="sm:flex ">
            <img
              src={item.image}
              alt={item.name}
              className="w-auto h-auto mx-4 md:ml-25 mr-15 sm:mr-0 mt-25 mb-5 border-0 rounded-3xl "
            />
            <div>
              <h4 className="md:mr-20 sm:mt-30 ml-10 font-bold text-2xl ">
                {item.name}
              </h4>
              <p className="md:mr-20 mt-2 ml-10 ">{item.author}</p>

              <p className="md:mr-20 mt-2 ml-10 ">{item.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
