import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/product" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
