import Pages from "./Pages/Pages";
import Category from "./componets/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./componets/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
