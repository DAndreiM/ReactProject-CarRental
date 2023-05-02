import classes from "./Authenticate.module.css";
import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/Store";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import { login, signUp } from "../../store/userSlice";

const Authenticate = () => {
  const currentUser = useAppSelector((item) => item.user.currentUser);
  const error = useAppSelector((item) => item.user.error);
  const isLoading = useAppSelector((item) => item.user.isLoading);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const modeLogin = searchParams.get("mode") === "login" ? "login" : null;

  const navigate = useNavigate();

  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const cpassword = useRef<HTMLInputElement>(null);

  console.log(currentUser);

  if (currentUser) return <Navigate to={"/"} />;

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const success = await dispatch(
      login(email.current!.value, password.current!.value)
    );

    if (success) return navigate("/");
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const success = await dispatch(
      signUp(
        email.current!.value,
        password.current!.value,
        username.current!.value
      )
    );

    if (success) return navigate("/");
  };

  return (
    <form
      className={classes.authForm}
      onSubmit={modeLogin ? loginHandler : signupHandler}
    >
      <h1>{modeLogin ? "Login" : "Signup"}</h1>
      {error && <p className={classes.authError}>{error}</p>}
      {!modeLogin && (
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            ref={username}
          />
        </div>
      )}
      <div>
        <label htmlFor="email">Email</label>
        <input
          ref={email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          ref={password}
          required
        />
      </div>
      {!modeLogin && (
        <div>
          <label htmlFor="cpassword">Confirm password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            ref={cpassword}
            required
          />
        </div>
      )}
      <p className={classes.authInfo}>
        {modeLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        {modeLogin ? (
          <Link to={"/auth?mode=signup"}>Signup</Link>
        ) : (
          <Link to={"/auth?mode=login"}>Login</Link>
        )}
      </p>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Loading..." : modeLogin ? "Login" : "Signup"}
      </button>
    </form>
  );
};

export default Authenticate;
