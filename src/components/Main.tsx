import classes from "./Main.module.css";
import ferrari from "../resources/images/ferrari.jpg";

const Main = () => {
  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className={classes.mainSection}>
        <form className={classes.carSearchForm} onSubmit={searchHandler}>
          <img src={ferrari} alt="A car photo" />
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <select title="AC CAR">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <input type="date" />
            <button type="submit">Search Car</button>
          </div>
        </form>
      </section>
      <section>
        <div>
          <h3>About us</h3>
          <h1>Welcome to car rent service</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            tenetur excepturi nam laudantium dolores unde, architecto facilis
            sed suscipit atque at, magni beatae in, sunt ex a aperiam! Veniam,
            similique.
          </p>
          <div>
            <div>
              <p>Lorem ipsum dolor, sit amet</p>
              <p>Lorem ipsum dolor, sit amet</p>
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet</p>
              <p>Lorem ipsum dolor, sit amet</p>
            </div>
          </div>
        </div>
        <img alt="Car IMG" />
      </section>
      <section>
        <h3>See our</h3>
        <h1>Popular Services</h1>
        <div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
