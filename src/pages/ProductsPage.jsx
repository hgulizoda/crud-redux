import { useSelector } from "react-redux";
import BasicModal from "../components/modalInputProduct";
import ProductCard from "../components/productCard";

const ProductsPage = () => {
  const products = useSelector((state) => state.product.products || []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          width: "100%",
        }}
      >
        <h1>Products List</h1>
        <BasicModal />
      </div>
      <div
        className="container"
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
