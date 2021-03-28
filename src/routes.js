import {
  CreditCard as MyStockIcon,
  Equalizer as StockIcon,
  HomeOutlined as HomeIcon,
  ImportContacts as NewsIcon
} from "@material-ui/icons";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import SingleStock from "./screens/SingleStock";
import SingleNews from "./screens/SingleNews";
import News from "./screens/News";
import MyStocks from "./screens/MyStocks";
import Home from "./screens/Home";
import React from "react";

export default function routes() {
  return [
    {name: "Login", path: "/login", icon: <HomeIcon/>, page: <Login/>},
    {name: "Registration", path: "/registration", icon: <HomeIcon/>, page: <Registration/>},
    {name: "Single Stock", path: "/stock/:id", icon: <StockIcon/>, page: <SingleStock/>},
    {name: "Single News", path: "/news/:id", icon: <NewsIcon/>, page: <SingleNews/>},
    {name: "News", path: "/news", icon: <NewsIcon/>, page: <News/>},
    {name: "My Stocks", path: "/mystock", icon: <MyStockIcon/>, page: <MyStocks/>},
    {name: "Home", path: "/", icon: <HomeIcon/>, page: <Home/>},
  ];
}