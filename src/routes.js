import {
  CreditCard as MyStockIcon,
  Equalizer as StockIcon,
  HomeOutlined as HomeIcon,
  ImportContacts as NewsIcon,
  Info as AboutIcon,
} from "@material-ui/icons";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import SingleTicker from "./screens/SingleTicker";
import SingleNews from "./screens/SingleNews";
import News from "./screens/News";
import MyStocks from "./screens/MyStocks";
import Home from "./screens/Home";
import React from "react";
import About from "./screens/About";

export const RENDER = {
  FULL: "full",
  REDUCED: "reduced",
  NONE: "none",
}

export const PAGES = {
  ABOUT: "About",
  LOGIN: "Login",
  REGISTRATION: "Registration",
  SINGLE_STOCK: "Single Stock",
  SINGLE_NEWS: "Single News",
  NEWS: "News",
  MY_STOCKS: "My Stocks",
  HOME: "Home",
};

const routes = [
  {name: PAGES.ABOUT, path: "/about", icon: <AboutIcon/>, page: <About/>, header: RENDER.NONE, navBar: RENDER.NONE},
  {name: PAGES.LOGIN, path: "/login", icon: <HomeIcon/>, page: <Login/>, header: RENDER.REDUCED, navBar: RENDER.NONE},
  {name: PAGES.REGISTRATION, path: "/registration", icon: <HomeIcon/>, page: <Registration/>, header: RENDER.REDUCED, navBar: RENDER.NONE},
  {name: PAGES.SINGLE_STOCK, path: "/ticker/:id", icon: <StockIcon/>, page: <SingleTicker/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.SINGLE_NEWS, path: "/news/:id", icon: <NewsIcon/>, page: <SingleNews/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.NEWS, path: "/news", icon: <NewsIcon/>, page: <News/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.MY_STOCKS, path: "/mystock", icon: <MyStockIcon/>, page: <MyStocks/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.HOME, path: "/", icon: <HomeIcon/>, page: <Home/>, header: RENDER.FULL, navBar: RENDER.FULL},
];

export const getRoute = (routeName) => {
  return routes.find(({ name }) => name===routeName)
}

export default routes;
