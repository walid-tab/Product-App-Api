import { Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import './CardStyle.css'
import './Spinner.css'
import './DetailCss.css'
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<Details/>}/>


      </Routes>
    </div>
  );
}

export default App;
