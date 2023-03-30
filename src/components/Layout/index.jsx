import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

/**
 * Layout function containing header and footer.
 */
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
