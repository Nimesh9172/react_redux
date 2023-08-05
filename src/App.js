import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthanticated);

  return (
    <Fragment>
      {<Header/>}
      {isAuth && <Counter />}
      {!isAuth && <Auth />}
    </Fragment>
  );
}

export default App;
