import classes from "./Main.module.css";
import ferrari from "../../resources/images/ferrari.jpg";
import lamborghini from "../../resources/images/lambo.png";
import tesla from "../../resources/images/teslaModelS.png";
import { Link } from "react-router-dom";

const Main = () => {
  const check = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/emoji/48/check-box-with-check-emoji.png"
      alt="check-box-with-check-emoji"
    />
  );
  const carReleaseYearIcon = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/ios/50/car--v1.png"
      alt="car--v1"
    />
  );
  const carTransmissionType = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-transmission-car-racing-phatplus-lineal-phatplus.png"
      alt="external-transmission-car-racing-phatplus-lineal-phatplus"
    />
  );

  const carConsume = (
    <img
      width="20"
      height="20"
      src="https://img.icons8.com/ios/50/gas-pump.png"
      alt="gas-pump"
    />
  );

  const popularServicesArray = [
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/marker--v1.png"
          alt="marker--v1"
        />
      ),
      title: "City Transfer",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        earum eos velit cumque similique corrupti?`,
    },
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/city-buildings.png"
          alt="city-buildings"
        />
      ),
      title: "Whole City Tour",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      earum eos velit cumque similique corrupti?`,
    },
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios-glyphs/30/car--v1.png"
          alt="car--v1"
        />
      ),
      title: "Unlimited Miles Car Rental",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      earum eos velit cumque similique corrupti?`,
    },
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/present.png"
          alt="present"
        />
      ),
      title: "Fast & East Booking",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      earum eos velit cumque similique corrupti?`,
    },
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/dotty/80/marker.png"
          alt="marker"
        />
      ),
      title: "Many Pickups Location",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      earum eos velit cumque similique corrupti?`,
    },
    {
      img: (
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios/50/airport.png"
          alt="airport"
        />
      ),
      title: "Airport Transfer",
      info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      earum eos velit cumque similique corrupti?`,
    },
  ];

  const avalabileCars = [
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
    {
      img: tesla,
      modelName: "Tesla Model S",
      releaseYear: 2022,
      pricePerDay: 50,
      transmissionType: "Automatic",
      consume: 20,
      hotOffer: true,
    },
  ];

  const hotOffers = avalabileCars.filter((item) => item.hotOffer === true);

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={classes.mainSection}>
        <form className={classes.carSearchForm} onSubmit={searchHandler}>
          <div>
            <img src={ferrari} alt="A car photo" />
          </div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <select title="AC CAR">
              <option value="" disabled selected hidden>
                AC Car?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <input type="date" />
            <button type="submit">Search Car</button>
          </div>
        </form>
      </section>
      <section className={classes.about}>
        <div className={classes.aboutIntro}>
          <h3>About us</h3>
          <h1>Welcome to car rent service</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            tenetur excepturi nam laudantium dolores unde, architecto facilis
            sed suscipit atque at, magni beatae in, sunt ex a aperiam! Veniam,
            similique.
          </p>
          <div className={classes.aboutIntroText}>
            <div>
              <p>{check} Lorem ipsum dolor, sit amet</p>
              <p>{check} Lorem ipsum dolor, sit amet</p>
            </div>
            <div>
              <p>{check} Lorem ipsum dolor, sit amet</p>
              <p>{check} Lorem ipsum dolor, sit amet</p>
            </div>
          </div>
        </div>
        <img className={classes.aboutCarImg} src={lamborghini} alt="Car IMG" />
      </section>
      <section>
        <div className={classes.sectionTitle}>
          <h3>See our</h3>
          <h1>Popular Services</h1>
        </div>
        <div className={classes.popularServices}>
          {popularServicesArray.map((item) => (
            <div className={classes.popularServicesItem} key={item.title}>
              {item.img}
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className={classes.sectionTitle}>
          <h3>Come with</h3>
          <h1>Hot Offers</h1>
        </div>
        <div className={classes.hotOffers}>
          {hotOffers.map((item) => (
            <div
              className={classes.hotOfferItem}
              key={`${item.modelName}.${
                Math.random() * Math.random() + item.pricePerDay
              }`}
            >
              <img className={classes.offerCarImg} src={item.img} />
              <h4>{item.modelName}</h4>
              <p>${item.pricePerDay} / Day</p>
              <div className={classes.carChara}>
                <p>
                  {carReleaseYearIcon} {item.releaseYear}
                </p>
                <p>
                  {carTransmissionType} {item.transmissionType}
                </p>
                <p>
                  {carConsume} {item.consume}kmpl
                </p>
              </div>
              <div className={classes.itemActions}>
                <button>Rent</button>
                <button>Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
