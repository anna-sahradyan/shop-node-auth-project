import React, {useState} from 'react';
import {
    Container, Filter, FilterContainer, FilterText, Select, Option, Title, CheckBox, CheckBoxColor
} from "../components/styledContainer/productListStyle";
import Nav from "../components/Nav";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";


const ProductList = () => {
    const [sort, setSort] = useState("newest");
    const [filters, setFilters] = useState({});
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (<>
        <Container>
            <Nav/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <option disabled>Color</option>
                        <Option color={'FFFFFF'} defaultValue={"1"}>White</Option>
                        <Option color={'000000'} defaultValue={"2"}>Black</Option>
                        <Option color={'FE0202'} defaultValue={"3"}>Red</Option>
                        <Option color={'29A0DC'} defaultValue={"4"}>Blue</Option>
                        <Option color={'45AD04'} defaultValue={"5"}>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option defaultValue={"5"}>XS</Option>
                        <Option defaultValue={"5"}>S</Option>
                        <Option defaultValue={"5"}>M</Option>
                        <Option defaultValue={"5"}>L</Option>
                        <Option defaultValue={"5"}>XL</Option>
                    </Select>
                </Filter>

                <Filter><FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option defaultValue={"newest"}>Newest</Option>
                        <Option defaultValue={"asc"}>Price(asc)</Option> <Option
                        defaultValue={"desc"}>Black(desc)</Option>

                    </Select>
                </Filter>

            </FilterContainer>
            <Products cat={cat} filters={filters} sort ={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    </>);
};

export default ProductList;