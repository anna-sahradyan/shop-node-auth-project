import React, {useEffect, useState} from 'react';
import {Container} from "./styledContainer/productsStyle";
import {popularProducts} from "./data/db";
import Product from "./Product";
import axios from "axios";

const Products = ({cat, sort, filters}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {

        const getProducts = async () => {
            try {
                const result = await axios.get(cat ? `http://localhost:4000/api/products?category=${cat}` :
                    `http://localhost:4000/api/products `);
                setProducts(result)
            } catch (err) {
                console.log(err);
            }


        }
        getProducts();
    }, [cat]);
    console.log(products);
    // useEffect(() => {
    //     cat &&
    //     setFilteredProducts(
    //         products.filter((item) =>
    //             Object.entries(filters).every(([key, value]) =>
    //                 item[key].includes(value)
    //             )
    //         )
    //     );
    // }, [products, cat, filters]);
    useEffect(() => {
        cat &&
        setFilteredProducts(
            Object.entries(products).filter((item)=> {
                 return item
            }
        )

    )
        ;
    }, [products, cat, filters]);

    return (
        <>
            <Container>
                {filteredProducts.map((item, index) => <Product key={`${item}_${index}`} {...item}/>)}
            </Container>
        </>
    );
};

export default Products;