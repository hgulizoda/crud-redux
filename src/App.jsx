import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/layout";
import PrivateRoutes from "./components/privateRoutes";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme";
import { useSelector } from "react-redux";
import ProfileLayout from "./components/ProfileLayout";

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {!auth ? (
            <>
              <Route path="/todos" element={<TodoPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </>
          ) : (
            <Route element={<ProfileLayout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/todos" element={<TodoPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Route>
          )}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
