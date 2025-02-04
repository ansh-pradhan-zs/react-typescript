import { useEffect, useState } from "react";
import "./App.css";
import Paginator from "./components/Paginator";
import ToBePaginated from "./components/ToBePaginated";
import { ItemType } from "../types";

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  async function populateItems() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      setItems(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateItems();
  }, []);

  return (
    <main className="boss">
      <Paginator items={items} itemsPerPage={10}>
        <ToBePaginated />
      </Paginator>
    </main>
  );
}

export default App;
