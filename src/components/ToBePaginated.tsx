import ItemCardComponent from "./ItemCardComponent";
import { ProductsEntity } from "../../types";

interface props {
  currPage?: number;
  itemsPerPage?: number;
  items?: ProductsEntity[];
}

const ToBePaginated = ({ currPage, itemsPerPage, items }: props) => {
  let from;
  let to;
  if (currPage && itemsPerPage && items) {
    from = (currPage - 1) * itemsPerPage;
    to = from + itemsPerPage;
  }

  return (
    <main className="boss-container">
      <span>Pagination Assignment</span>
      <div className="main-container">
        {items?.slice(from, to).map((item, index) => {
          return (
            <ItemCardComponent
              key={index}
              title={item.title}
              url={item.images && item.images[0]}
            />
          );
        })}
      </div>
    </main>
  );
};

export default ToBePaginated;
