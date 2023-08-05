import classes from "./Header.module.css";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Header = (props) => {

  const isAuth = useSelector(state => state.auth.isAuthanticated)

  const dispatch = useDispatch()

  const logoutClickHandler = () => {
    dispatch(authActions.logout())
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutClickHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
