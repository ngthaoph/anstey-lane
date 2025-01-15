import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";

import * as styles from "./Layout.css";

const Layout = ({ cartProducts }) => (
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
    <div className={styles.mainContent}>
      <Header cartProducts={cartProducts} />
      <div className={styles.appContent}>
        <Outlet /> {/* Your page content */}
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
