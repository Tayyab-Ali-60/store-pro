import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {user ? <Home /> : <Login />}
          
        </Route>
        <Route path="/products/:category">
        {user ? <ProductList /> : <Login />}
          
        </Route>
        <Route path="/product/:id">
        {user ? <Product /> : <Login />}
          
        </Route>
        <Route path="/cart">
        {user ? <Cart /> : <Login />}
          
        </Route>
        <Route path="/success">
        {user ? <Success /> : <Login />}
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
