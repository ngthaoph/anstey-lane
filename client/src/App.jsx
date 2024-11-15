// Import npm packages
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import CollectionPage from "./pages/product/CollectionPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/product/Product";

// Import components
import Layout from "./components/layout/Layout";
import PrivateRoutes from "./components/layout/PrivateRoutes";

import Dashboard from "./pages/auth/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AddProduct from "./pages/product/AddProduct";
import EditProduct from "./pages/product/EditProduct";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* AUTH */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          {/*PRIVATE ROUTE*/}

          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* PRODUCTS 
        store/products; 
        store/products/clearance*/}
          <Route path="/store">
            <Route path="/store/products" element={<CollectionPage />} />
            <Route path={"/store/products/product/:id"} element={<Product />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/store/product" element={<AddProduct />} />
              <Route path="/store/product/edit/:id" element={<EditProduct />} />
            </Route>
          </Route>

          {/* ERROR PAGES */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
