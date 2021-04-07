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

export default function routes() {
  return [
    {name: "About", path: "/about", icon: <AboutIcon/>, page: <About/>, renderHeader: false, renderNavbar: false},
    {name: "Login", path: "/login", icon: <HomeIcon/>, page: <Login/>, renderHeader: "reduced", renderNavbar: false},
    {name: "Registration", path: "/registration", icon: <HomeIcon/>, page: <Registration/>, renderHeader: "reduced", renderNavbar: true},
    {name: "Single Stock", path: "/stock/:id", icon: <StockIcon/>, page: <SingleStock/>, renderHeader: true, renderNavbar: true},
    {name: "Single News", path: "/news/:id", icon: <NewsIcon/>, page: <SingleNews/>, renderHeader: true, renderNavbar: true},
    {name: "News", path: "/news", icon: <NewsIcon/>, page: <News/>, renderHeader: true, renderNavbar: true},
    {name: "My Stocks", path: "/mystock", icon: <MyStockIcon/>, page: <MyStocks/>, renderHeader: true, renderNavbar: true},
    {name: "Home", path: "/", icon: <HomeIcon/>, page: <Home/>, renderHeader: true, renderNavbar: true},
  ];
}