import React, {useEffect, useState} from 'react';
import {Container} from "./styledContainer/productsStyle";
import {popularProducts} from "./data/db";
import Product from "./Product";
import axios from "axios";
const Products = ({cat, sort, filter}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {

        const getProducts = async (req, res) => {
            const result = await axios.get(`http://localhost:4000/api/products?category=${cat}`)
        }
    }, [cat]);
    return (
        <>
            <Container>
                {popularProducts.map((item, index) => <Product key={`${item}_${index}`} {...item}/>)}
            </Container>
        </>
    );
};

export default Products;