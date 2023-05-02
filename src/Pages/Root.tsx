import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const Root = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Root;
