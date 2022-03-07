
import Navbar_Custom from './Components/Navbar_Custom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createContext, useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Screens/About';
import Products from './Screens/Products';
import Cart_Bar from './Components/Cart_Bar';
import Heading from './Components/Heading';
import CheckOut from './Screens/CheckOut';
import Product from './Screens/Product';
import data_home from './test/home_data';
import Login from './Screens/Login';
import NotFound from './Screens/NotFound';
import Cart from './Screens/Cart';
import { reducer } from './Components/reducer';
import CategoryPage from './Screens/Category_Page';
import Orders from './Screens/Orders';
import CreateAccountOne from './Screens/CreateAccountOne';
import CreateAccountTwo from './Screens/CreateAccountTwo';
import ConfirmMail from './Screens/ConfirmMail';
import Profile from './Screens/Profile';
import HomeScreen from './Screens/HomeScreen';
import Order from './Screens/Order';
import Search from './Screens/Search';
import CreateAccountNew from './Screens/CreateAccountNew';


export const CartContext = createContext(data_home);

export const productsList = createContext(data_home);


const initialState = {
  data: data_home,
  totalAmount: 0,
  totalItem: 0
}
const initProductList = {
  data: data_home
}

function App() {

  const [cart_state, dispatch] = useReducer(reducer, initialState);
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  }
  const addItem = (id) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: id
    })
  }
  const ClearCart = () => {
    return dispatch(
      {
        type: "CLEAR_CART"
      }
    )
  }
  const DecreaseItem = (id) => {
    return dispatch({
      type: "DEC_ITEM",
      payload: id
    })
  }


  const [item_Data, set_Item_Data] = useState(data_home)

  const [showNav, setNav] = useState(false)
  const ShowNavBar = () => {
    setNav(!showNav)
  }
  const [showCart, setCart] = useState(false)
  const ShowCart = () => {
    setCart(!showCart)
  }
  const LeftCart = () => {
    setCart(false)
  }
  const LeftNav = () => {
    setNav(false)
  }
  
  
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [cart_state.data]);

  return (
    <CartContext.Provider value={{ ...cart_state, removeItem, addItem, DecreaseItem, ClearCart }} >
      <Router>
        <div className="App">
          <div className="main">
            <Switch>
              <Route path="/" exact  >  <HomeScreen>
                <Heading cart={ShowCart}   nav={ShowNavBar}></Heading>
                <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

              </HomeScreen>

              </Route>
              <Route path="/about" exact  > <About>
                <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

              </About>   </Route>
              <Route path="/products" exact  >
                {/* <Products item_Data={item_Data} /> */}
                <Products>

                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Products>

              </Route>
              <Route path="/checkout" exact  >

                <CheckOut>
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />


                </CheckOut>

              </Route>
              <Route path="/product/:id" exact  >
                <Product>
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Product>
              </Route>
              <Route path="/login" exact >
                <Login />
              </Route>
              <Route path="/confirmMail" exact >          <ConfirmMail />          </Route>
              <Route path="/cart" exact >
                <Cart>
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Cart>


              </Route>
              <Route path="/orders" exact >

                <Orders>
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Orders>

              </Route>
              <Route path="/category/:id" exact > <CategoryPage >
                <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

              </CategoryPage>

              </Route>
              <Route path="/profile" exact >
                <Profile >
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>
                </Profile>

              </Route>
              <Route path="/order/:id" exact >
                <Order>
                
              <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
              <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Order>

              </Route>
              <Route path="/search" exact >
                <Search >
                  <Heading cart={ShowCart} nav={ShowNavBar}></Heading>
                  <Navbar_Custom show={showNav} leave={LeftNav} click={ShowNavBar} />
                <Cart_Bar show={showCart} leave={LeftCart} click={ShowCart}></Cart_Bar>

                </Search>

              </Route>
              <Route path="/new" exact >  <CreateAccountNew></CreateAccountNew> </Route>


              <Route path="*"> <NotFound /> </Route>

            </Switch>
          </div>

        </div>

      </Router>
    </CartContext.Provider>
  );
}
export default App;
