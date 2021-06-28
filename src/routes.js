import {
  CreditCard as MyStockIcon,
  Equalizer as StockIcon,
  HomeOutlined as HomeIcon,
  ImportContacts as NewsIcon,
  Info as AboutIcon,
} from "@material-ui/icons";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SingleTicker from "./pages/SingleTicker";
import SingleNews from "./pages/SingleNews";
import News from "./pages/News";
import MyStocks from "./pages/MyStocks";
import Home from "./pages/home/Home";
import React from "react";
import About from "./pages/About";

export const RENDER = {
  FULL: "full",
  REDUCED: "reduced",
  NONE: "none",
}

export const PAGES = {
  ABOUT: "About",
  LOGIN: "Login",
  REGISTRATION: "Registration",
  SINGLE_TICKER: "Single Ticker",
  SINGLE_NEWS: "Single News",
  NEWS: "News",
  MY_STOCKS: "My Stocks",
  HOME: "Home",
};

const routes = [
  {name: PAGES.ABOUT, path: "/about", icon: <AboutIcon/>, page: <About/>, header: RENDER.NONE, navBar: RENDER.NONE},
  {name: PAGES.LOGIN, path: "/login", icon: <HomeIcon/>, page: <Login/>, header: RENDER.REDUCED, navBar: RENDER.NONE},
  {name: PAGES.REGISTRATION, path: "/registration", icon: <HomeIcon/>, page: <Registration/>, header: RENDER.REDUCED, navBar: RENDER.NONE},
  {name: PAGES.SINGLE_TICKER, path: "/ticker/:id", icon: <StockIcon/>, page: <SingleTicker/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.SINGLE_NEWS, path: "/news/:id", icon: <NewsIcon/>, page: <SingleNews/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.NEWS, path: "/news", icon: <NewsIcon/>, page: <News/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.MY_STOCKS, path: "/mystock", icon: <MyStockIcon/>, page: <MyStocks/>, header: RENDER.FULL, navBar: RENDER.FULL},
  {name: PAGES.HOME, path: "/", icon: <HomeIcon/>, page: <Home/>, header: RENDER.FULL, navBar: RENDER.FULL},
];

export const getRoute = (routeName) => {
  return routes.find(({ name }) => name===routeName)
}

export default routes;
