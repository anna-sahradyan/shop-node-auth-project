import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Container, Icon, Image, Info} from "./styledContainer/productStyle";
import {Link} from "react-router-dom";

const Product = ({img,id}) => {
    return (
        <>
            <Container>

                <Image src={img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlinedIcon/>
                    </Icon>
                    <Icon>
                        <Link to ={`/product/${id}`}>
                        <SearchOutlinedIcon/>
                        </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlinedIcon/>
                    </Icon>
                </Info>
            </Container>
        </>
    );
};

export default Product;