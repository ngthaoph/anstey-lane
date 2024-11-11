import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";
import * as styles from "./Layout.css";

const Layout = () => (
  <div className={styles.app}>
    {/* TOAST is a popup component to display Errors */}
    <ToastContainer
      style={{ textAlign: "center" }}
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      transition={Slide}
      theme="colored"
    />
    
    <Header />
    {/* Wrap all content in column-direction flexbox */}
    <div className={styles.appContent}>
      {/* {props.children} */}
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
