// Import npm packages
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import pages

import CollectionPage from "./pages/product/CollectionPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/product/Product";
import Cart from "./components/features/cart/Cart";
import HomePage from "./components/layout/HomePage";

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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  //FUNCTION TO ADD NEW ITEMS TO NEW OR EXISTING CART
  function handleNewCart(newProducts) {
    setCartProducts((currrentProducts) => {
      return [...currrentProducts, ...newProducts];
    });
  }
  console.log("cartProducts:", cartProducts);

  //add cartproduct to localstorage
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route
          path="/"
          element={
            <Layout
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        >
          {/* PRODUCTS 
        store/products; 
        store/products/clearance*/}

          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />}></Route>

          <Route
            path=":id"
            element={<Product handleNewCart={handleNewCart} />}
          />

          <Route element={<PrivateRoutes />}>
            <Route path="/store/product" element={<AddProduct />} />
            <Route path="/store/product/edit/:id" element={<EditProduct />} />
          </Route>

          {/** */}
          <Route path="/about" element={<About />} />
          {/* AUTH */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="cart"
            element={
              <Cart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />

          {/*PRIVATE ROUTE*/}

          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* ERROR PAGES */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

//  <Route path="/store">
//    <Route path="/store/products" element={<CollectionPage />} />
//    <Route
//      path={"/store/products/product/:id"}
//      element={<Product handleNewCart={handleNewCart} />}
//    />
//    <Route element={<PrivateRoutes />}>
//      <Route path="/store/product" element={<AddProduct />} />
//      <Route path="/store/product/edit/:id" element={<EditProduct />} />
//    </Route>
//  </Route>;
