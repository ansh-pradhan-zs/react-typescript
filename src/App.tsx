import "./App.css";
import Paginator from "./components/Paginator";
import ToBePaginated from "./components/ToBePaginated";

function App() {
  return (
    <main>
      <Paginator pages={10}>
        <ToBePaginated />
      </Paginator>
    </main>
  );
}

export default App;
