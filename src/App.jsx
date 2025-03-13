import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import {Provider} from 'react-redux'
import appStore from "./utils/appStore";

function App(){
  return (
  <>
  <Provider store={appStore}>
  <Header/>
  <Outlet/>
  </Provider>

  </>
  )
}

export default App;