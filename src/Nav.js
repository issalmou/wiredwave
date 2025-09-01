import Home from "./PageHome/Home";
import {Route,Routes } from "react-router-dom";
import Login from "./PageLogin/Login";
import Products from "./PageProducts/Products";
import Product from "./PageProductDetail/Product";
import Contact from "./PageContact/Contact";
import NotFound from "./PageNotfound/NotFound";
import About from "./PageAbout/About";
import Cart from "./PageCart/Cart";
import Profile from "./PageProfile/Profile";
import DetailUser from "./PageDetaillUser/DetailUser";
import Search from "./PageSearch/Search";
import Logout from "./PageLogout/Logout";
import Admin from "./PageAdmin/Admin";
export default function Nav() { 
    return(
        <Routes>
            <Route path="https://issalmou.github.io/wiredwave/" element={<Home />}></Route>
            <Route path="/wiredwave/login" element={<Login  />}></Route>
            <Route path="/wiredwave/profile" element={<Profile  />}></Route>
            <Route path="/wiredwave/profile/detail" element={<DetailUser  />}></Route>
            <Route path="/wiredwave/products" element={<Products  />}></Route>
            <Route path="/wiredwave/contact" element={<Contact  />}></Route>
            <Route path="/wiredwave/logout" element={<Logout  />}></Route>
            <Route path="/wiredwave/product/:categorie?/:asin" element={<Product  />}></Route>
            <Route path="/wiredwave/search/:categorie?/:search" element={<Search  />}></Route>
            <Route path="/wiredwave/about" element={<About  />}></Route>
            <Route path="/wiredwave/cart" element={<Cart  />}></Route>
            <Route path="/wiredwave/admin" element={<Admin  />}></Route>
            <Route path="/wiredwave/*" element={<NotFound  />}></Route>
        </Routes>
    )
}