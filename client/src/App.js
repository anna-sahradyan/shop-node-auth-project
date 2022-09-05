import React from 'react';
import {Route, Routes,  useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryItem from "./components/CategoryItem";


const App = () => {
    const user = true;
    let navigate = useNavigate();

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/products/:category'} element={<ProductList/>}/>
                <Route path={'/product/:id'} element={<Product/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                {/*{user ? navigate("/") : <Login/>}*/}
                <Route path={'/login'} element={<Login/>}/>
                {/*{user ? navigate("/") : <Register/>}*/}
                <Route path={'/register'} element={<Register/>}/>


            </Routes>
        </>
    );
};

export default App;