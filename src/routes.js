import {
  CreditCard as MyStockIcon,
  Equalizer as StockIcon,
  HomeOutlined as HomeIcon,
  ImportContacts as NewsIcon,
  Info as AboutIcon,
} from "@material-ui/icons";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import SingleStock from "./screens/SingleStock";
import SingleNews from "./screens/SingleNews";
import News from "./screens/News";
import MyStocks from "./screens/MyStocks";
import Home from "./screens/Home";
import React from "react";
import About from "./screens/About";

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
  {name: PAGES.ABOUT, path: "/about", icon: <AboutIcon/>, page: <About/>, renderHeader: false, renderNavbar: false},
  {name: PAGES.LOGIN, path: "/login", icon: <HomeIcon/>, page: <Login/>, renderHeader: "reduced", renderNavbar: false},
  {name: PAGES.REGISTRATION, path: "/registration", icon: <HomeIcon/>, page: <Registration/>, renderHeader: "reduced", renderNavbar: false},
  {name: PAGES.SINGLE_STOCK, path: "/stock/:id", icon: <StockIcon/>, page: <SingleStock/>, renderHeader: true, renderNavbar: true},
  {name: PAGES.SINGLE_NEWS, path: "/news/:id", icon: <NewsIcon/>, page: <SingleNews/>, renderHeader: true, renderNavbar: true},
  {name: PAGES.NEWS, path: "/news", icon: <NewsIcon/>, page: <News/>, renderHeader: true, renderNavbar: true},
  {name: PAGES.MY_STOCKS, path: "/mystock", icon: <MyStockIcon/>, page: <MyStocks/>, renderHeader: true, renderNavbar: true},
  {name: PAGES.HOME, path: "/", icon: <HomeIcon/>, page: <Home/>, renderHeader: true, renderNavbar: true},
];

export const getRoute = (routeName) => {
  return routes.find(({ name }) => name===routeName)
}

export default routes;
