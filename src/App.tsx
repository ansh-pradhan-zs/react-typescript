import "./App.css";
import Paginator from "./components/Paginator";
import ToBePaginated from "./components/ToBePaginated";

function App() {
  return (
    <main className="boss">
      <Paginator pages={10} itemsPerPage={10}>
        <ToBePaginated />
      </Paginator>
    </main>
  );
}

export default App;
