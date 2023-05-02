import classes from "./DesktopNav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import porscheImg from "../../resources/images/porsche.jpg";
import NavBody from "./NavBody";
import SearchForm from "../ui/SearchForm";
import { useAppSelector } from "../../store/Store";

const DesktopNav = () => {
  const [searchData, setSearchData] = useState<string>("");
  const currentUser = useAppSelector((item) => item.user.currentUser);

  const searchHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchData === "") return;

    console.log(searchData);

    setSearchData("");
  };

  const searchInputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchData(e.currentTarget?.value);
  };
  return (
    <div className={classes.desktopNav}>
      <div className={classes.desktopNavFirst}>
        <div>
          <p>Need Help?</p>
          <p>
            <img src="https://img.icons8.com/ios-filled/50/null/apple-phone.png" />{" "}
            +1-555-555-5555
          </p>
        </div>
        <div>
          {!currentUser ? (
            <>
              <Link to={"/auth?mode=login"}>Login</Link>
              <Link to={"/auth?mode=register"}>Register</Link>
            </>
          ) : (
            <Link to={"/logout"}>Logout</Link>
          )}
        </div>
      </div>
      <div className={classes.desktopNavSecond}>
        <p>
          <img src="https://img.icons8.com/material-sharp/24/null/carpool--v2.png" />{" "}
          Rent a car
        </p>
        <div>
          <img src="https://img.icons8.com/material-outlined/24/null/globe--v1.png" />
          <div className={classes.content}>
            <p>Zone</p>
            <p>Zone City, Zone</p>
          </div>
        </div>
        <div>
          <img src="https://img.icons8.com/ios/50/null/clock--v1.png" />
          <div className={classes.content}>
            <p>Sunday to friday</p>
            <p>9am - 7pm</p>
          </div>
        </div>
        <button className={classes.callButton}>
          <img src="https://img.icons8.com/ios-filled/50/null/apple-phone.png" />{" "}
          Request a call
        </button>
      </div>
      <div className={classes.desktopNavPages}>
        <NavBody active={classes.active} />
        <SearchForm
          searchHandler={searchHandler}
          searchInputChangeHandler={searchInputHandler}
          searchData={searchData}
        />
      </div>
      <div className={classes.additionalInfoContainer}>
        <img src={porscheImg} />
        <div>
          <p>For rent $50 Per day</p>
          <h1>Reserve now and get 50% Off</h1>
          <button>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
