import React, {useEffect, useState} from 'react';
import {Container} from "./styledContainer/productsStyle";
import {popularProducts} from "./data/db";
import Product from "./Product";
import axios from "axios";

const Products = ({cat, sort, filters}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
//!get products
        const getProducts = async () => {
            try {
                const result = await axios.get(cat ? `http://localhost:4000/api/products?category=${cat}` :
                    `http://localhost:4000/api/products `);
                setProducts(result.data)
            } catch (err) {
                console.log(err);
            }

        }
        getProducts();
    }, [cat]);
    console.log(products);

//!filtering
    useEffect(() => {
        cat &&
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [products, cat, filters]);
    console.log(filteredProducts);

//!sorting products

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.createdAt - a.createdAt));
        }
    }, [sort]);
    return (
        <>
            <Container>
                {cat ? filteredProducts.map((item, index) => <Product
                    key={`${item}_${index}`} {...item}/>) : products.map((item, index) => <Product
                    key={`${item}_${index}`} {...item}/>)}
            </Container>
        </>
    );
};

export default Products;